import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import splashImageHoriz from "public/images/psari_transparent.png";
import splashImageVert from "public/images/psari_transparent_rotated.png";
import stylesUrl from "./../css/index-page.css";  

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: MetaFunction = () => {
  return [
    { name: "description", content: "Expressionistic artwork by Seanne Buoy in a variety of mediums." },
    { title: "Seanne Buoy | Home" },
  ];
};

export default function Index() {
  return (
    <div>
      <section aria-label="Artwork by Seanne Buoy" className="splash-image-wrapper">
        <Link to="/work">
          <img 
            src={splashImageVert} 
            alt="Select the drawing of the fish to view the artist's body of work." 
            className="splash-image--vertical" 
          />
          <img 
            src={splashImageHoriz} 
            alt="Select the drawing of the fish to view the artist's body of work." 
            className="splash-image--horizontal" 
          />
        </Link>
      </section>
    </div>
  );
}
