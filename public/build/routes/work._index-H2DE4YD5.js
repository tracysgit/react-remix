import {
  esm_default
} from "/build/_shared/chunk-I65TL2NZ.js";
import {
  Link
} from "/build/_shared/chunk-CJOQZBZH.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  data_default
} from "/build/_shared/chunk-NB64HA3Q.js";
import {
  createHotContext
} from "/build/_shared/chunk-HX4WM2NL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/CardDeck.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CardDeck.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CardDeck.tsx"
  );
  import.meta.hot.lastModified = "1701626552721.3787";
}
function CardDeck({
  pieces
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { "aria-label": "Portfolio of Artwork", children: pieces.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "image-container--columns", children: pieces.map((piece) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { id: `piece_${piece.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/work/${piece.id}`, className: "image-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { srcSet: `../images/${piece.imageFiles.card}.webp`, alt: "", type: "image/webp" }, void 0, false, {
        fileName: "app/components/CardDeck.tsx",
        lineNumber: 33,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `../images/${piece.imageFiles.card}.jpg`, alt: "" }, void 0, false, {
        fileName: "app/components/CardDeck.tsx",
        lineNumber: 34,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CardDeck.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { children: esm_default(`${piece.name}`) }, void 0, false, {
      fileName: "app/components/CardDeck.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 30,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, piece.id, false, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 28,
    columnNumber: 30
  }, this)) }, void 0, false, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 27,
    columnNumber: 24
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "message--error", children: "No artwork is available for display." }, void 0, false, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 40,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/CardDeck.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = CardDeck;
var CardDeck_default = CardDeck;
var _c;
$RefreshReg$(_c, "CardDeck");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/work._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/work._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/work._index.tsx"
  );
  import.meta.hot.lastModified = "1701659892328.281";
}
var PIECES = data_default.PIECES;
var meta = () => {
  return [{
    name: "description",
    content: "View the body of work by artist Seanne Buoy."
  }, {
    title: "Seanne Buoy | Work"
  }];
};
function WorkIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardDeck_default, { pieces: PIECES }, void 0, false, {
    fileName: "app/routes/work._index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c2 = WorkIndexRoute;
var _c2;
$RefreshReg$(_c2, "WorkIndexRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WorkIndexRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/work._index-H2DE4YD5.js.map
