import { Link, useLoaderData, useParams } from "@remix-run/react";
// import type { LoaderArgs } from "@remix-run/node"; 

// export const loader = async ({ params }: LoaderArgs) => {
//   console.log("params.pieceId", params.pieceId);
//   return params.pieceId;
// };

// export default function DetailsPage() {
//   const { id } = useParams();
//   console.log("id", id);
// }

// export const loader = async ({ request, params }: LoaderArgs) => {
//   console.log(params.pieceId);
//   return params.pieceId;
// };

export default function PieceIdRoute() {
  const { id } = useParams();
  console.log("id", id);

  return (
    <div>
      {/* <p>Piece route: ${params.pieceId}</p> */}
      <p>Piece route: {id}</p>
    </div>
  );
}
