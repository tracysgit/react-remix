import {
  Outlet
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

// app/routes/work.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/work.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/work.tsx"
  );
  import.meta.hot.lastModified = "1701656638341.3796";
}
var PIECES = data_default.PIECES;
function WorkRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { pieces: PIECES }, void 0, false, {
    fileName: "app/routes/work.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = WorkRoute;
var _c;
$RefreshReg$(_c, "WorkRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WorkRoute as default
};
//# sourceMappingURL=/build/routes/work-TZRUBEG3.js.map
