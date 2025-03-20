import { Q as QPage } from "./QPage-Cz1mJO3h.js";
import { K as resolveComponent, H as createBlock, v as openBlock, J as withCtx, l as createBaseVNode, j as createVNode } from "./index-CaSS0-Ro.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_MDCode = resolveComponent("MDCode");
  return openBlock(), createBlock(QPage, { class: "" }, {
    default: withCtx(() => [
      _cache[0] || (_cache[0] = createBaseVNode("h2", null, "MDCode", -1)),
      createVNode(_component_MDCode, {
        content: "ping pong",
        codeLanguage: "js"
      }),
      _cache[1] || (_cache[1] = createBaseVNode("hr", null, null, -1))
    ]),
    _: 1
  });
}
const TestGlobalComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  TestGlobalComponents as default
};
