import { Link } from "@remix-run/react";
import parse from 'html-react-parser';

function CardDeck({ pieces }) {
  return (
    <section aria-label="Portfolio of Artwork">
      {pieces.length ? (
      <ul className="image-container--columns">
        {pieces.map((piece) => (
          <li key={piece.id} id={`piece_${piece.id}`}>
            <Link to={`/work/${piece.id}`} className="image-card">
              <figure>
                {/* <img src={`../images/${piece.imageFiles.card}.jpg`} alt="" /> */}
                <picture>
                  <source srcSet={`../images/${piece.imageFiles.card}.webp`} alt="" type="image/webp" />
                  <img src={`../images/${piece.imageFiles.card}.jpg`} alt="" />
                </picture>
                <figcaption>{parse(`${piece.name}`)}</figcaption>
              </figure>
            </Link>
          </li> 
        ))}
      </ul>
      ) : (
      <p className="message--error">No artwork is available for display.</p>
      )}
    </section>
  )
}

export default CardDeck;