import { Q as QPage } from "./QPage-31gACgmy.js";
import { H as createBlock, v as openBlock, n as unref, J as withCtx, l as createBaseVNode, j as createVNode } from "./index-MP0GapPT.js";
import { m as md_obj, _ as _sfc_main$2 } from "./code_test-Cc6Yjrnx.js";
import { _ as _sfc_main$3 } from "./MarkdownRendering-D6_dRAZ5.js";
import "./index-B0QwVmVv.js";
const _sfc_main$1 = {
  __name: "MDComponentRendering",
  setup(__props) {
    const MDContent = _sfc_main$2;
    console.log("md_obj", md_obj);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MDContent));
    };
  }
};
const _sfc_main = {
  __name: "MDPluginTest",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "" }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("h2", null, "MarkdownRendering", -1)),
          createVNode(_sfc_main$3),
          _cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1)),
          _cache[2] || (_cache[2] = createBaseVNode("h2", null, "MDComponentRendering", -1)),
          createVNode(_sfc_main$1),
          _cache[3] || (_cache[3] = createBaseVNode("hr", null, null, -1)),
          _cache[4] || (_cache[4] = createBaseVNode("hr", null, null, -1))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
