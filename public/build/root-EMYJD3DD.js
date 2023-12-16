import {
  LinkContactUs_default
} from "/build/_shared/chunk-3G64TNMO.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
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

// app/css/global.css
var global_default = "/build/_assets/global-OALIWR2C.css";

// app/components/layout/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/Header.tsx"
  );
  import.meta.hot.lastModified = "1701659982067.282";
}
var SOCIAL = data_default.SOCIAL;
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "h1-headline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/work", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "visually-hidden", children: "Artwork by " }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 27,
        columnNumber: 52
      }, this),
      "Seanne Buoy"
    ] }, void 0, true, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 27,
      columnNumber: 35
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mainnav", "aria-label": "Main Menu", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "mainmenu-btn", type: "checkbox", id: "mainmenu-btn" }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mainmenu-icon", htmlFor: "mainmenu-btn", tabIndex: "0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "navicon" }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 30,
        columnNumber: 78
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mainmenu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: "Home" }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/work", children: "Work" }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/about", children: "About" }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkContactUs_default, { social: SOCIAL, text: "Contact" }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utilities/utilities.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utilities/utilities.tsx"
  );
  import.meta.hot.lastModified = "1700336922881.2532";
}
function getCurrYear() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}

// app/components/layout/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/Footer.tsx"
  );
  import.meta.hot.lastModified = "1701300573885.612";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
    "\xA9",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { id: "copyright-date", children: getCurrYear() }, void 0, false, {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    " Seanne Buoy"
  ] }, void 0, true, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var Footer_default = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [...global_default ? [{
  rel: "stylesheet",
  href: global_default
}] : []];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "container--1200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "container--1000", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-EMYJD3DD.js.map
