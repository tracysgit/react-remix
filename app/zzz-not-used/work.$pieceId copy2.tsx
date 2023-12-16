import { Link, useLoaderData, useParams } from "@remix-run/react";
import type {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

import data from "../assets/data/data.json";
const PIECES = data.PIECES;
console.log("test", PIECES[0].name);

export const meta: MetaFunction = () => {
  return [
    { name: "description", content: "Learn more about the art piece called AAAAAA." },
    { title: "Seanne Buoy | AAAAAA" },
  ];
};

export default function PieceIdRoute() {
  const { id } = useParams();
  console.log("id", id);

  return (
    <div>
      {/* <p>Piece route: ${params.pieceId}</p> */}
      <p>Piece route: {PIECES[0].id}</p>
      <p>Piece name: {PIECES[0].name}</p>
    </div>
  );
}
