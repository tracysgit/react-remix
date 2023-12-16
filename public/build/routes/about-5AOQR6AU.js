import {
  LinkContactUs_default
} from "/build/_shared/chunk-3G64TNMO.js";
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

// public/images/the-milk-of-human-kindness_crop.jpg
var the_milk_of_human_kindness_crop_default = "/build/_assets/the-milk-of-human-kindness_crop-3325JWT6.jpg";

// public/images/the-milk-of-human-kindness_crop.webp
var the_milk_of_human_kindness_crop_default2 = "/build/_assets/the-milk-of-human-kindness_crop-SZOSMBKO.webp";

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1701659678326.4587";
}
var SOCIAL = data_default.SOCIAL;
var meta = () => {
  return [{
    name: "description",
    content: "Learn about artist Seanne Buoy and kinesthetic synesthesia in their art."
  }, {
    title: "Seanne Buoy | About"
  }];
};
function AboutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { "aria-labelledby": "headline--about", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", { className: "image-container--marquee", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { srcSet: the_milk_of_human_kindness_crop_default2, alt: "", type: "image/webp" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: the_milk_of_human_kindness_crop_default, alt: "" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "headline--about", children: "About the Artist" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Seanne Buoy is an emerging, self-taught artist from Austin, Texas. Their body of work spans diverse mediums, experimenting with charcoal, printmaking, collage, drawing, painting, and ceramics to converge into a style marked by an enigmatic cohesiveness. Within this style, shapes intermingle, lines dissipate, and a playful yet shadowed ambiguity arises, swaying along the lines between androgyneity, being, and the unknown." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Buoy's creations consistently present images that are stark and emotionally resonant, delving into existentially challenging concepts with a profound compassion for the pain, wanting, and curious beauty of the human condition. This combination makes Seanne Buoy's artwork defy easy categorization, offering viewers an introspective and evocative lens into the polymorphic facets of our existence." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Out of these nebulous artforms emerge shapes and anthropomorphic figures. Humanoid forms engage at a point between the tangible and the elusive, drawing from the raw essence of life while layering these forms with subconscious impressions." }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Email the artist at ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkContactUs_default, { social: SOCIAL }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 48,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 48,
        columnNumber: 63
      }, this),
      "Instagram: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: SOCIAL.instagram.link, target: "_blank", children: SOCIAL.instagram.handle }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 49,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c = AboutRoute;
var _c;
$RefreshReg$(_c, "AboutRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AboutRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/about-5AOQR6AU.js.map
