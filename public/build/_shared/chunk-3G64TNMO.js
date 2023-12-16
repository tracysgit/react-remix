import {
  createHotContext
} from "/build/_shared/chunk-HX4WM2NL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/LinkContactUs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/LinkContactUs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/LinkContactUs.tsx"
  );
  import.meta.hot.lastModified = "1701659192025.4707";
}
function LinkContactUs({
  social,
  text
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `mailto:${social.email.address}?subject=${social.email.subject}`, children: text ? text : social.email.address }, void 0, false, {
    fileName: "app/components/ui/LinkContactUs.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = LinkContactUs;
var LinkContactUs_default = LinkContactUs;
var _c;
$RefreshReg$(_c, "LinkContactUs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  LinkContactUs_default
};
//# sourceMappingURL=/build/_shared/chunk-3G64TNMO.js.map
