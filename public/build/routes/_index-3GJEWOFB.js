import {
  Link
} from "/build/_shared/chunk-CJOQZBZH.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// public/images/psari_transparent.png
var psari_transparent_default = "/build/_assets/psari_transparent-MRYKRBLU.png";

// public/images/psari_transparent_rotated.png
var psari_transparent_rotated_default = "/build/_assets/psari_transparent_rotated-CU2W2PNN.png";

// app/css/index.css
var css_default = "/build/_assets/index-22PFKAR5.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: css_default
}];
var meta = () => {
  return [{
    name: "description",
    content: "Expressionistic artwork by Seanne Buoy in a variety of mediums."
  }, {
    title: "Seanne Buoy | Home"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { "aria-label": "Artwork by Seanne Buoy", className: "splash-image-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/work", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: psari_transparent_rotated_default, alt: "Select the drawing of the fish to view the artist's body of work.", className: "splash-image--vertical" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: psari_transparent_default, alt: "Select the drawing of the fish to view the artist's body of work.", className: "splash-image--horizontal" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-3GJEWOFB.js.map
