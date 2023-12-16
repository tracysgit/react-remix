import { Outlet } from "@remix-run/react";

import data from "../assets/data/data.json";
const PIECES = data.PIECES;

export default function WorkRoute() {
  return (
    <Outlet pieces={PIECES} />
  );
}