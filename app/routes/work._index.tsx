import type { MetaFunction } from "@remix-run/node";

import CardDeck from "../components/CardDeck";
import data from "../assets/data/data.json";
const PIECES = data.PIECES;

export const meta: MetaFunction = () => {
  return [
    { name: "description", content: "View the body of work by artist Seanne Buoy." },
    { title: "Seanne Buoy | Work" },
  ];
};

export default function WorkIndexRoute() {
  return (
    <CardDeck pieces={PIECES} />
  );
}