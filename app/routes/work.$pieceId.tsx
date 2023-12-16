import { 
  useNavigate, 
  useParams, 
} from "@remix-run/react";
import type {
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import parse from 'html-react-parser';

import Button from "~/components/ui/Button";

import data from "../assets/data/data.json";
const PIECES = data.PIECES;

function getPiece(pieceId) {
  let piece = PIECES.find(({ id }) => id === Number(pieceId));
  return piece;
}

export const loader: LoaderFunction = async ({ params }) => {
  return params; 
};

export const meta: MetaFunction<typeof loader> = ({
  params,
}) => {
  let piece = getPiece(params.pieceId);
  let pieceName = (piece && piece.isActive) ? (piece.name).replace(/&nbsp;/g, " ") : "No piece found";
  
  return [
    { title: `Seanne Buoy | ${pieceName}`},
    { name: "description", content: `Seanne Buoy's art piece called '${pieceName}'.` },
  ];
};

export default function WorkPieceIdRoute() {
  const navigate = useNavigate();
  const { pieceId } = useParams();
  let piece = getPiece(pieceId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section aria-labelledby="headline--piece">
      {piece && piece.isActive ? (
      <div id={`piece-${piece.id}`}>
        <div className="headline--piece-wrapper">
          <h2 id="headline--piece">{parse(`${piece.name}`)}{piece.yearCreated && `, ${piece.yearCreated}`}</h2>
          <Button type={"button"} purpose={"back"} className={"button--back"} onClick={handleGoBack}>Back</Button>
        </div>
        {piece.imageFiles.card && 
        <figure className="image-container--single">
          {/* <img src={`../../images/${piece.imageFiles.card}`} alt="" /> */}
          <picture>
            <source srcSet={`../../images/${piece.imageFiles.card}.webp`} type="image/webp" />
            <img src={`../../images/${piece.imageFiles.card}.jpg`} alt="" />
          </picture>
          {piece.imageFiles.other && 
            (piece.imageFiles.other).map((image, index) => 
              // <img key={index} src={`../../images/${image}`} alt="" style={{marginTop: "10px"}} />
              <picture key={index}>
                <source srcSet={`../../images/${image}.webp`} type="image/webp" style={{marginTop: "10px"}} />
                <img src={`../../images/${image}.jpg`} alt="" style={{marginTop: "10px"}} />
              </picture>
            )
          }
          <figcaption>{piece.medium}, {piece.height} x {piece.width}{piece.depth && ` x ${piece.depth}`} {piece.sizeUnits}</figcaption>
        </figure>
        }
        <div>{parse(`${piece.description}`)}</div>
      </div>
      ) : (
      <p className="message--error">No piece found.</p>
      )}
    </section>
  ); 
}  
