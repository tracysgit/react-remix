import type { LoaderArgs } from "@remix-run/node"; 
// import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderArgs) => {
  // return json([
  //   { id: "1", name: "Pants" },
  //   { id: "2", name: "Jacket" },
  // ]);

  //console.log(params.userId);
  // console.log(params.pieceId);

  // invariant(params.pieceId, "Expected params.pieceId");

  // params.pieceId; 
  return null;
};

export default function PieceRoute() {
  return (
    <div>
      <p>Parameterized pieces route</p>
    </div>
  );
}
