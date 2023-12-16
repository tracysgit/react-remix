import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStylesHref from "./css/global.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const links: LinksFunction = () => [
  ...(appStylesHref ? [{ rel: "stylesheet", href: appStylesHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="container--1200">
        <Header />
        <main className="container--1000">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
        <Footer />
      </body>
    </html>
  );
}
