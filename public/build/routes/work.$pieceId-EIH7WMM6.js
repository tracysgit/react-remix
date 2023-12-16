import {
  esm_default
} from "/build/_shared/chunk-I65TL2NZ.js";
import {
  useNavigate,
  useParams
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

// app/components/ui/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Button.tsx"
  );
  import.meta.hot.lastModified = "1701311168556.9934";
}
function Button({
  type,
  purpose,
  className,
  onClick,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type, className, onClick, children: [
    purpose == "back" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", focusable: "false", className: "icon--arrow-left", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7 12.5 17.293 2l.707.707L8.414 12.5 18 22.293l-.707.707L7 12.5z" }, void 0, false, {
      fileName: "app/components/ui/Button.tsx",
      lineNumber: 29,
      columnNumber: 155
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Button.tsx",
      lineNumber: 29,
      columnNumber: 29
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/ui/Button.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Button;
var Button_default = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/work.$pieceId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/work.$pieceId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/work.$pieceId.tsx"
  );
  import.meta.hot.lastModified = "1702764570984.8464";
}
var PIECES = data_default.PIECES;
function getPiece(pieceId) {
  let piece = PIECES.find(({
    id
  }) => id === Number(pieceId));
  return piece;
}
var meta = ({
  params
}) => {
  let piece = getPiece(params.pieceId);
  let pieceName = piece && piece.isActive ? piece.name.replace(/&nbsp;/g, " ") : "No piece found";
  return [{
    title: `Seanne Buoy | ${pieceName}`
  }, {
    name: "description",
    content: `Seanne Buoy's art piece called '${pieceName}'.`
  }];
};
function WorkPieceIdRoute() {
  _s();
  const navigate = useNavigate();
  const {
    pieceId
  } = useParams();
  let piece = getPiece(pieceId);
  const handleGoBack = () => {
    navigate(-1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { "aria-labelledby": "headline--piece", children: piece && piece.isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: `piece-${piece.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "headline--piece-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "headline--piece", children: [
        esm_default(`${piece.name}`),
        piece.yearCreated && `, ${piece.yearCreated}`
      ] }, void 0, true, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "button", purpose: "back", className: "button--back", onClick: handleGoBack, children: "Back" }, void 0, false, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/work.$pieceId.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    piece.imageFiles.card && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("figure", { className: "image-container--single", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("picture", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("source", { srcSet: `../../images/${piece.imageFiles.card}.webp`, type: "image/webp" }, void 0, false, {
          fileName: "app/routes/work.$pieceId.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `../../images/${piece.imageFiles.card}.jpg`, alt: "" }, void 0, false, {
          fileName: "app/routes/work.$pieceId.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      piece.imageFiles.other && piece.imageFiles.other.map((image, index) => (
        // <img key={index} src={`../../images/${image}`} alt="" style={{marginTop: "10px"}} />
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("picture", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("source", { srcSet: `../../images/${image}.webp`, type: "image/webp", style: {
            marginTop: "10px"
          } }, void 0, false, {
            fileName: "app/routes/work.$pieceId.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `../../images/${image}.jpg`, alt: "", style: {
            marginTop: "10px"
          } }, void 0, false, {
            fileName: "app/routes/work.$pieceId.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this)
        ] }, index, true, {
          fileName: "app/routes/work.$pieceId.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("figcaption", { children: [
        piece.medium,
        ", ",
        piece.height,
        " x ",
        piece.width,
        piece.depth && ` x ${piece.depth}`,
        " ",
        piece.sizeUnits
      ] }, void 0, true, {
        fileName: "app/routes/work.$pieceId.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/work.$pieceId.tsx",
      lineNumber: 66,
      columnNumber: 35
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: esm_default(`${piece.description}`) }, void 0, false, {
      fileName: "app/routes/work.$pieceId.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/work.$pieceId.tsx",
    lineNumber: 61,
    columnNumber: 34
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "message--error", children: "No piece found." }, void 0, false, {
    fileName: "app/routes/work.$pieceId.tsx",
    lineNumber: 85,
    columnNumber: 16
  }, this) }, void 0, false, {
    fileName: "app/routes/work.$pieceId.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(WorkPieceIdRoute, "EZcmCt5O/PEDnyppKt+Sg7eKbNg=", false, function() {
  return [useNavigate, useParams];
});
_c2 = WorkPieceIdRoute;
var _c2;
$RefreshReg$(_c2, "WorkPieceIdRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WorkPieceIdRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/work.$pieceId-EIH7WMM6.js.map
