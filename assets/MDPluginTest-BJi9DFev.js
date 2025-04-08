import { Q as QPage } from "./QPage-CI0LLcUj.js";
import { p as createElementBlock, v as openBlock, D as createTextVNode, j as createVNode, n as unref, F as Fragment, H as createBlock, J as withCtx, l as createBaseVNode } from "./index-DIMEVx97.js";
import { m as md_obj, _ as _sfc_main$2 } from "./code_test-De9TAjq6.js";
const _sfc_main$1 = {
  __name: "MDComponentRendering",
  setup(__props) {
    const MDContent = _sfc_main$2;
    console.log("md_obj", md_obj);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createTextVNode(" (MDComponentRendering.vue) ")),
        createVNode(unref(MDContent))
      ], 64);
    };
  }
};
const _sfc_main = {
  __name: "MDPluginTest",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "" }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("h2", null, "MDComponentRendering", -1)),
          createVNode(_sfc_main$1),
          _cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
