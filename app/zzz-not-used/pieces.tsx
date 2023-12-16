import data from "../assets/data/pieces.json"

const PIECES = data.PIECES;

export default function Pieces() {
  // const products = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Pieces</h1>
      {/* {PIECES.map((piece) => (
        <div key={piece.id}>{piece.name}</div>
      ))} */}
    </div>
  );
}
