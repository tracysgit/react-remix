var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/css/global.css
var global_default = "/build/_assets/global-OALIWR2C.css";

// app/components/layout/Header.tsx
import {
  Link,
  NavLink
} from "@remix-run/react";

// app/components/ui/LinkContactUs.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function LinkContactUs({ social, text }) {
  return /* @__PURE__ */ jsxDEV2("a", { href: `mailto:${social.email.address}?subject=${social.email.subject}`, children: text || social.email.address }, void 0, !1, {
    fileName: "app/components/ui/LinkContactUs.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var LinkContactUs_default = LinkContactUs;

// app/assets/data/data.json
var data_default = {
  SOCIAL: {
    email: {
      address: "contact@seannebuoy.art",
      subject: "Contact%20Seanne%20Buoy"
    },
    instagram: {
      handle: "@milk.a.neuron",
      link: "https://www.instagram.com/milk.a.neuron/?hl=en"
    }
  },
  PIECES: [
    {
      isActive: !0,
      id: 35,
      name: "Holy People of the Morning Light",
      medium: "Charcoal on paper",
      height: "24",
      width: "30",
      sizeUnits: "inches",
      yearCreated: "2021",
      description: "",
      imageFiles: {
        card: "holy-people-of-the-morning-light",
        other: []
      }
    },
    {
      isActive: !0,
      id: 34,
      name: "The Milk of Human Kindness",
      medium: "Woodblock Print",
      height: "8.5",
      width: "11.5",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "<p>Part of an existentialist series. First-time woodblock printing.</p>",
      imageFiles: {
        card: "the-milk-of-human-kindness_crop",
        other: ["the-milk-of-human-kindness"]
      }
    },
    {
      isActive: !0,
      id: 33,
      name: "Honey, We Shook Him Too Hard",
      medium: "Woodblock Print",
      height: "8.5",
      width: "11.5",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "<p>Part of an existentialist series. First-time woodblock printing.</p>",
      imageFiles: {
        card: "honey-we-shook-him-too-hard_crop",
        other: ["honey-we-shook-him-too-hard"]
      }
    },
    {
      isActive: !0,
      id: 32,
      name: "Suburban Home",
      medium: "Woodblock Print",
      height: "8.5",
      width: "11.5",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "<p>Part of an existentialist series. First-time woodblock printing.</p>",
      imageFiles: {
        card: "suburban-home_crop",
        other: ["suburban-home"]
      }
    },
    {
      isActive: !0,
      id: 31,
      name: "Oogly Boogly",
      medium: "Raku-fired stoneware",
      height: "8",
      width: "10",
      depth: "9",
      sizeUnits: "inches",
      yearCreated: "2019",
      description: "<p>Coil built vase. Alternated wax resist (the smoky gray) with stripes of a metallic glaze, which fired polychromatically.</p><blockquote><p>Als das Kind Kind war,<br />ging es mit h&auml;ngenden Armen,<br />wollte der Bach sei ein Flu&#223;,<br />der Flu&#223; sei ein Strom,<br />und diese Pf&uuml;tze das Meer.</p><p>(When the child was a child<br />It walked with arms swinging,<br />Wanted the brook to be a river,<br />The river to be a torrent,<br />And this puddle to be the sea.)</p></blockquote><p>This raku-fired piece is meant to evoke organic amusement, bordering on the absurd. Its stripes go round and round and round, their interplay reminding me of sensations which swirl together like water. The thrill brought by disorientation&mdash;of wind-whipping hair and a small stomach unwinding fast enough for the world to settle down singing.</p>",
      imageFiles: {
        card: "oogly-boogly",
        other: []
      }
    },
    {
      isActive: !0,
      id: 30,
      name: "Boob Walker",
      medium: "Acrylic and charcoal on canvas",
      height: "8",
      width: "10",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "boob-walker",
        other: []
      }
    },
    {
      isActive: !0,
      id: 29,
      name: "Moon Crane",
      medium: "Monotype print",
      height: "12",
      width: "15",
      sizeUnits: "inches",
      yearCreated: "2021",
      description: "",
      imageFiles: {
        card: "moon-crane",
        other: []
      }
    },
    {
      isActive: !0,
      id: 28,
      name: "Engel (Angels)",
      medium: "Monotype print",
      height: "12",
      width: "15",
      sizeUnits: "inches",
      yearCreated: "2021",
      description: "",
      imageFiles: {
        card: "engel",
        other: []
      }
    },
    {
      isActive: !0,
      id: 27,
      name: "On Landscape",
      medium: "Charcoal on paper",
      height: "18",
      width: "24",
      sizeUnits: "inches",
      yearCreated: "2021",
      description: "",
      imageFiles: {
        card: "on-landscape",
        other: []
      }
    },
    {
      isActive: !0,
      id: 26,
      name: "CRASH",
      medium: "Charcoal, chalk, and colored pencil on paper",
      height: "16.5",
      width: "22",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "CRASH",
        other: []
      }
    },
    {
      isActive: !0,
      id: 25,
      name: "Chairs",
      medium: "Bic pen on paper",
      height: "5",
      width: "8",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: `<blockquote><p> be that kid<br />don't be that kid<br />kid won't you<br />be that kid<br /></p><p>chairs are funny<br />they deflect atten-<br />tion till you find<br />them 'in the way'<br />alternatively, until <br />they disappear<br />when you need<br />them, scurry off on <br />needfully stiff<br />forelegs<br /></p><p>support me my<br />hold my weight<br />i'll pay you miss-<br />ing the point&mdash;<br />by design</p><p><span style="font-style:normal;">park those bones</span></p></blockquote>`,
      imageFiles: {
        card: "chairs",
        other: []
      }
    },
    {
      isActive: !0,
      id: 24,
      name: "Sliding Eye Under Chicken Feather Hair",
      medium: "Bic pen on paper",
      height: "5",
      width: "8",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "sliding-eye-under-chicken-feather-hair",
        other: []
      }
    },
    {
      isActive: !0,
      id: 23,
      name: "Tim and the One-Sided Sun",
      medium: "Lithograph print",
      height: "12",
      width: "8",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "tim-and-the-one-sided-sun",
        other: []
      }
    },
    {
      isActive: !0,
      id: 22,
      name: "Psari",
      medium: "Bic pen on paper",
      height: "4",
      width: "8",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "psari",
        other: []
      }
    },
    {
      isActive: !0,
      id: 21,
      name: "Kasmir&nbsp;&nbsp;&nbsp;stands with plant",
      medium: "Charcoal, pen, and cut paper",
      height: "14",
      width: "11",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "kasmir-stands-with-plant",
        other: []
      }
    },
    {
      isActive: !0,
      id: 20,
      name: "Mire&nbsp;&nbsp;&nbsp;she carries his load",
      medium: "Charcoal, pen, and cut paper",
      height: "14",
      width: "10",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "mire-she-carries-his-load",
        other: []
      }
    },
    {
      isActive: !0,
      id: 19,
      name: "Dave&nbsp;&nbsp;&nbsp;moments after exiting the shower",
      medium: "Charcoal and cut paper",
      height: "12",
      width: "9",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "dave-moments-after-exiting-the-shower",
        other: []
      }
    },
    {
      isActive: !0,
      id: 18,
      name: "Fabric of Being",
      medium: "Pen on paper",
      height: "3",
      width: "4",
      sizeUnits: "inches",
      yearCreated: "2019",
      description: "",
      imageFiles: {
        card: "fabric-of-being",
        other: []
      }
    },
    {
      isActive: !0,
      id: 17,
      name: "The Light Keepers",
      medium: "Colored pencil, oil pastel, and charcoal on paper",
      height: "11",
      width: "14",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "the-light-keepers",
        other: []
      }
    },
    {
      isActive: !0,
      id: 16,
      name: "Sea Bass, Greece",
      medium: "Bic pen on paper",
      height: "5",
      width: "8",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "sea-bass-greece",
        other: []
      }
    },
    {
      isActive: !0,
      id: 15,
      name: "Untitled 02",
      medium: "Charcoal on paper",
      height: "9",
      width: "12",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "untitled-02",
        other: []
      }
    },
    {
      isActive: !0,
      id: 14,
      name: "Primordial Soup",
      medium: "Bleach painted on fabric",
      height: "24",
      width: "32",
      sizeUnits: "inches",
      yearCreated: "2023",
      description: "",
      imageFiles: {
        card: "primordial-soup",
        other: []
      }
    },
    {
      isActive: !0,
      id: 13,
      name: "Sea Slug",
      medium: "Raku-fired stoneware",
      height: "2.5",
      width: "7",
      depth: "2",
      sizeUnits: "inches",
      yearCreated: "2019",
      description: "",
      imageFiles: {
        card: "sea-slug",
        other: []
      }
    },
    {
      isActive: !0,
      id: 12,
      name: "Tongues",
      medium: "Plaster casts on wood board",
      height: "11",
      width: "17",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "tongues",
        other: []
      }
    },
    {
      isActive: !1,
      id: 11,
      name: "Cowbone",
      medium: "Charcoal on paper",
      height: "7",
      width: "7",
      sizeUnits: "inches",
      yearCreated: "2021",
      description: "<p>Drawn from a cow vertebrae.</p>",
      imageFiles: {
        card: "cowbone",
        other: []
      }
    },
    {
      isActive: !1,
      id: 10,
      name: "Mitosis",
      medium: "Bic pen on paper",
      height: "15",
      width: "11",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "mitosis",
        other: []
      }
    },
    {
      isActive: !1,
      id: 9,
      name: "Spoonman",
      medium: "Charcoal, oil pastel, and marker on paper",
      height: "11",
      width: "9",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "<p>Began this piece as a poem; it grew into a mixed-media drawing.</p>",
      imageFiles: {
        card: "spoonman",
        other: []
      }
    },
    {
      isActive: !1,
      id: 8,
      name: "Make Good Free-Body Diagram",
      medium: "Bic pen on paper",
      height: "15",
      width: "12",
      sizeUnits: "inches",
      yearCreated: "2022",
      description: "",
      imageFiles: {
        card: "make-good-free-body-diagram",
        other: []
      }
    }
  ]
};

// app/components/layout/Header.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var SOCIAL = data_default.SOCIAL;
function Header() {
  return /* @__PURE__ */ jsxDEV3("header", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "h1-headline", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/work", children: [
      /* @__PURE__ */ jsxDEV3("span", { className: "visually-hidden", children: "Artwork by " }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 13,
        columnNumber: 52
      }, this),
      "Seanne Buoy"
    ] }, void 0, !0, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 13,
      columnNumber: 35
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("nav", { className: "mainnav", "aria-label": "Main Menu", children: [
      /* @__PURE__ */ jsxDEV3("input", { className: "mainmenu-btn", type: "checkbox", id: "mainmenu-btn" }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("label", { className: "mainmenu-icon", htmlFor: "mainmenu-btn", tabIndex: "0", children: /* @__PURE__ */ jsxDEV3("span", { className: "navicon" }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 16,
        columnNumber: 78
      }, this) }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("ul", { className: "mainmenu", children: [
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(NavLink, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 18,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(NavLink, { to: "/work", children: "Work" }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 19,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(NavLink, { to: "/about", children: "About" }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(LinkContactUs_default, { social: SOCIAL, text: "Contact" }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 22,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var Header_default = Header;

// app/utilities/utilities.tsx
function getCurrYear() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}

// app/components/layout/Footer.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV4("footer", { children: /* @__PURE__ */ jsxDEV4("p", { children: [
    "\xA9",
    /* @__PURE__ */ jsxDEV4("span", { id: "copyright-date", children: getCurrYear() }, void 0, !1, {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    " Seanne Buoy"
  ] }, void 0, !0, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Footer_default = Footer;

// app/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [
  ...global_default ? [{ rel: "stylesheet", href: global_default }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { className: "container--1200", children: [
      /* @__PURE__ */ jsxDEV5(Header_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("main", { className: "container--1000", children: [
        /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Footer_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/work.$pieceId.tsx
var work_pieceId_exports = {};
__export(work_pieceId_exports, {
  default: () => WorkPieceIdRoute,
  loader: () => loader,
  meta: () => meta
});
import {
  useNavigate,
  useParams
} from "@remix-run/react";
import parse from "html-react-parser";

// app/components/ui/Button.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Button({ type, purpose, className, onClick, children }) {
  return /* @__PURE__ */ jsxDEV6(
    "button",
    {
      type,
      className,
      onClick,
      children: [
        purpose == "back" && /* @__PURE__ */ jsxDEV6("svg", { "aria-hidden": "true", focusable: "false", className: "icon--arrow-left", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 25", children: /* @__PURE__ */ jsxDEV6("path", { d: "M7 12.5 17.293 2l.707.707L8.414 12.5 18 22.293l-.707.707L7 12.5z" }, void 0, !1, {
          fileName: "app/components/ui/Button.tsx",
          lineNumber: 9,
          columnNumber: 133
        }, this) }, void 0, !1, {
          fileName: "app/components/ui/Button.tsx",
          lineNumber: 9,
          columnNumber: 7
        }, this),
        children
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/Button.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
var Button_default = Button;

// app/routes/work.$pieceId.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var PIECES = data_default.PIECES;
function getPiece(pieceId) {
  return PIECES.find(({ id }) => id === Number(pieceId));
}
var loader = async ({ params }) => params, meta = ({
  params
}) => {
  let piece = getPiece(params.pieceId), pieceName = piece && piece.isActive ? piece.name.replace(/&nbsp;/g, " ") : "No piece found";
  return [
    { title: `Seanne Buoy | ${pieceName}` },
    { name: "description", content: `Seanne Buoy's art piece called '${pieceName}'.` }
  ];
};
function WorkPieceIdRoute() {
  let navigate = useNavigate(), { pieceId } = useParams(), piece = getPiece(pieceId), handleGoBack = () => {
    navigate(-1);
  };
  return /* @__PURE__ */ jsxDEV7("section", { "aria-labelledby": "headline--piece", children: piece && piece.isActive ? /* @__PURE__ */ jsxDEV7("div", { id: `piece-${piece.id}`, children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "headline--piece-wrapper", children: [
      /* @__PURE__ */ jsxDEV7("h2", { id: "headline--piece", children: [
        parse(`${piece.name}`),
        piece.yearCreated && `, ${piece.yearCreated}`
      ] }, void 0, !0, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Button_default, { type: "button", purpose: "back", className: "button--back", onClick: handleGoBack, children: "Back" }, void 0, !1, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/work.$pieceId.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    piece.imageFiles.card && /* @__PURE__ */ jsxDEV7("figure", { className: "image-container--single", children: [
      /* @__PURE__ */ jsxDEV7("picture", { children: [
        /* @__PURE__ */ jsxDEV7("source", { srcSet: `../../images/${piece.imageFiles.card}.webp`, type: "image/webp" }, void 0, !1, {
          fileName: "app/routes/work.$pieceId.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("img", { src: `../../images/${piece.imageFiles.card}.jpg`, alt: "" }, void 0, !1, {
          fileName: "app/routes/work.$pieceId.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      piece.imageFiles.other && piece.imageFiles.other.map(
        (image, index) => (
          // <img key={index} src={`../../images/${image}`} alt="" style={{marginTop: "10px"}} />
          /* @__PURE__ */ jsxDEV7("picture", { children: [
            /* @__PURE__ */ jsxDEV7("source", { srcSet: `../../images/${image}.webp`, type: "image/webp", style: { marginTop: "10px" } }, void 0, !1, {
              fileName: "app/routes/work.$pieceId.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV7("img", { src: `../../images/${image}.jpg`, alt: "", style: { marginTop: "10px" } }, void 0, !1, {
              fileName: "app/routes/work.$pieceId.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          ] }, index, !0, {
            fileName: "app/routes/work.$pieceId.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this)
        )
      ),
      /* @__PURE__ */ jsxDEV7("figcaption", { children: [
        piece.medium,
        ", ",
        piece.height,
        " x ",
        piece.width,
        piece.depth && ` x ${piece.depth}`,
        " ",
        piece.sizeUnits
      ] }, void 0, !0, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/work.$pieceId.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { children: parse(`${piece.description}`) }, void 0, !1, {
      fileName: "app/routes/work.$pieceId.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work.$pieceId.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV7("p", { className: "message--error", children: "No piece found." }, void 0, !1, {
    fileName: "app/routes/work.$pieceId.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/work.$pieceId.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/work._index.tsx
var work_index_exports = {};
__export(work_index_exports, {
  default: () => WorkIndexRoute,
  meta: () => meta2
});

// app/components/CardDeck.tsx
import { Link as Link2 } from "@remix-run/react";
import parse2 from "html-react-parser";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function CardDeck({ pieces }) {
  return /* @__PURE__ */ jsxDEV8("section", { "aria-label": "Portfolio of Artwork", children: pieces.length ? /* @__PURE__ */ jsxDEV8("ul", { className: "image-container--columns", children: pieces.map((piece) => /* @__PURE__ */ jsxDEV8("li", { id: `piece_${piece.id}`, children: /* @__PURE__ */ jsxDEV8(Link2, { to: `/work/${piece.id}`, className: "image-card", children: /* @__PURE__ */ jsxDEV8("figure", { children: [
    /* @__PURE__ */ jsxDEV8("picture", { children: [
      /* @__PURE__ */ jsxDEV8("source", { srcSet: `../images/${piece.imageFiles.card}.webp`, alt: "", type: "image/webp" }, void 0, !1, {
        fileName: "app/components/CardDeck.tsx",
        lineNumber: 15,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV8("img", { src: `../images/${piece.imageFiles.card}.jpg`, alt: "" }, void 0, !1, {
        fileName: "app/components/CardDeck.tsx",
        lineNumber: 16,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CardDeck.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV8("figcaption", { children: parse2(`${piece.name}`) }, void 0, !1, {
      fileName: "app/components/CardDeck.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 12,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, piece.id, !1, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV8("p", { className: "message--error", children: "No artwork is available for display." }, void 0, !1, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var CardDeck_default = CardDeck;

// app/routes/work._index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var PIECES2 = data_default.PIECES, meta2 = () => [
  { name: "description", content: "View the body of work by artist Seanne Buoy." },
  { title: "Seanne Buoy | Work" }
];
function WorkIndexRoute() {
  return /* @__PURE__ */ jsxDEV9(CardDeck_default, { pieces: PIECES2 }, void 0, !1, {
    fileName: "app/routes/work._index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/features.tsx
var features_exports = {};
__export(features_exports, {
  default: () => FeaturesRoute
});
import { Fragment, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function FeaturesRoute() {
  return /* @__PURE__ */ jsxDEV10(Fragment, { children: [
    /* @__PURE__ */ jsxDEV10("h2", { children: "Features" }, void 0, !1, {
      fileName: "app/routes/features.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("ul", { children: [
      /* @__PURE__ */ jsxDEV10("li", { children: "Built with React-Remix" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Static JSON data file of artwork for easy maintenance" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Parameterized routing (work/pieceId)" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Unique <head> content on each page" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Built with accessibility in mind (color contrast, aria attributes, focus rings, headline hierarchy, etc.)" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Uses webp and jpg images" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Optimized for light mode but also handles dark mode" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/features.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
      fileName: "app/routes/features.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("h2", { children: "Future Improvements" }, void 0, !1, {
      fileName: "app/routes/features.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("ul", { style: { marginBottom: "100px" }, children: [
      /* @__PURE__ */ jsxDEV10("li", { children: "Improve accessibility of mobile menu" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Add JSON data to a database" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Provide an interface to add artwork via the web" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("li", { children: "Image compression/optimizer or lazy load" }, void 0, !1, {
        fileName: "app/routes/features.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/features.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/features.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta3
});
import { Link as Link3 } from "@remix-run/react";

// public/images/psari_transparent.png
var psari_transparent_default = "/build/_assets/psari_transparent-MRYKRBLU.png";

// public/images/psari_transparent_rotated.png
var psari_transparent_rotated_default = "/build/_assets/psari_transparent_rotated-CU2W2PNN.png";

// app/css/index.css
var css_default = "/build/_assets/index-22PFKAR5.css";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var links2 = () => [
  { rel: "stylesheet", href: css_default }
], meta3 = () => [
  { name: "description", content: "Expressionistic artwork by Seanne Buoy in a variety of mediums." },
  { title: "Seanne Buoy | Home" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11("section", { "aria-label": "Artwork by Seanne Buoy", className: "splash-image-wrapper", children: /* @__PURE__ */ jsxDEV11(Link3, { to: "/work", children: [
    /* @__PURE__ */ jsxDEV11(
      "img",
      {
        src: psari_transparent_rotated_default,
        alt: "Select the drawing of the fish to view the artist's body of work.",
        className: "splash-image--vertical"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      "img",
      {
        src: psari_transparent_default,
        alt: "Select the drawing of the fish to view the artist's body of work.",
        className: "splash-image--horizontal"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute,
  meta: () => meta4
});

// public/images/the-milk-of-human-kindness_crop.jpg
var the_milk_of_human_kindness_crop_default = "/build/_assets/the-milk-of-human-kindness_crop-3325JWT6.jpg";

// public/images/the-milk-of-human-kindness_crop.webp
var the_milk_of_human_kindness_crop_default2 = "/build/_assets/the-milk-of-human-kindness_crop-SZOSMBKO.webp";

// app/routes/about.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var SOCIAL2 = data_default.SOCIAL, meta4 = () => [
  { name: "description", content: "Learn about artist Seanne Buoy and kinesthetic synesthesia in their art." },
  { title: "Seanne Buoy | About" }
];
function AboutRoute() {
  return /* @__PURE__ */ jsxDEV12("section", { "aria-labelledby": "headline--about", children: [
    /* @__PURE__ */ jsxDEV12("figure", { className: "image-container--marquee", children: /* @__PURE__ */ jsxDEV12("picture", { children: [
      /* @__PURE__ */ jsxDEV12("source", { srcSet: the_milk_of_human_kindness_crop_default2, alt: "", type: "image/webp" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("img", { src: the_milk_of_human_kindness_crop_default, alt: "" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("h2", { id: "headline--about", children: "About the Artist" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { children: "Seanne Buoy is an emerging, self-taught artist from Austin, Texas. Their body of work spans diverse mediums, experimenting with charcoal, printmaking, collage, drawing, painting, and ceramics to converge into a style marked by an enigmatic cohesiveness. Within this style, shapes intermingle, lines dissipate, and a playful yet shadowed ambiguity arises, swaying along the lines between androgyneity, being, and the unknown." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { children: "Buoy's creations consistently present images that are stark and emotionally resonant, delving into existentially challenging concepts with a profound compassion for the pain, wanting, and curious beauty of the human condition. This combination makes Seanne Buoy's artwork defy easy categorization, offering viewers an introspective and evocative lens into the polymorphic facets of our existence." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { children: "Out of these nebulous artforms emerge shapes and anthropomorphic figures. Humanoid forms engage at a point between the tangible and the elusive, drawing from the raw essence of life while layering these forms with subconscious impressions." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { children: [
      "Email the artist at ",
      /* @__PURE__ */ jsxDEV12(LinkContactUs_default, { social: SOCIAL2 }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 31,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ jsxDEV12("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 31,
        columnNumber: 63
      }, this),
      "Instagram: ",
      /* @__PURE__ */ jsxDEV12("a", { href: SOCIAL2.instagram.link, target: "_blank", children: SOCIAL2.instagram.handle }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 32,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => WorkRoute
});
import { Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var PIECES3 = data_default.PIECES;
function WorkRoute() {
  return /* @__PURE__ */ jsxDEV13(Outlet2, { pieces: PIECES3 }, void 0, !1, {
    fileName: "app/routes/work.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HIFIKWBT.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-CJOQZBZH.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HX4WM2NL.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EMYJD3DD.js", imports: ["/build/_shared/chunk-3G64TNMO.js", "/build/_shared/chunk-NB64HA3Q.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3GJEWOFB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-5AOQR6AU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/features": { id: "routes/features", parentId: "root", path: "features", index: void 0, caseSensitive: void 0, module: "/build/routes/features-HNASAOFB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-TZRUBEG3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/work.$pieceId": { id: "routes/work.$pieceId", parentId: "routes/work", path: ":pieceId", index: void 0, caseSensitive: void 0, module: "/build/routes/work.$pieceId-EIH7WMM6.js", imports: ["/build/_shared/chunk-I65TL2NZ.js", "/build/_shared/chunk-NB64HA3Q.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/work._index": { id: "routes/work._index", parentId: "routes/work", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/work._index-H2DE4YD5.js", imports: ["/build/_shared/chunk-I65TL2NZ.js", "/build/_shared/chunk-NB64HA3Q.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "3bdac20c", hmr: { runtime: "/build/_shared/chunk-HX4WM2NL.js", timestamp: 1702764571492 }, url: "/build/manifest-3BDAC20C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/work.$pieceId": {
    id: "routes/work.$pieceId",
    parentId: "routes/work",
    path: ":pieceId",
    index: void 0,
    caseSensitive: void 0,
    module: work_pieceId_exports
  },
  "routes/work._index": {
    id: "routes/work._index",
    parentId: "routes/work",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: work_index_exports
  },
  "routes/features": {
    id: "routes/features",
    parentId: "root",
    path: "features",
    index: void 0,
    caseSensitive: void 0,
    module: features_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: work_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
