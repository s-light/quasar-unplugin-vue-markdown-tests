import { K as resolveComponent, p as createElementBlock, v as openBlock, l as createBaseVNode, j as createVNode } from "./index-BsK2UUXV.js";
const _hoisted_1 = { class: "markdown-body" };
const title = "Testing Code-Blocks";
const tags = ["sw", "code", "style"];
const id = 127;
const excerpt = "";
const _sfc_main = {
  __name: "code_test",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Testing Code-Blocks", "tags": ["sw", "code", "style"], "id": 127 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", {
          id: "code-test",
          tabindex: "-1"
        }, "Code Test", -1)),
        _cache[1] || (_cache[1] = createBaseVNode("p", null, "some default…", -1)),
        createVNode(_component_MDCode, {
          content: "const xyz = 42\n",
          codeLanguage: "js",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        _cache[2] || (_cache[2] = createBaseVNode("p", null, "the following code block should be filled with a good example.ino code…", -1)),
        createVNode(_component_MDCode, {
          content: "html {\n    color: orange;\n    background-color: hsl(219, 100%, 18%);\n    box-shadow: 0 0 10px black;\n}\n",
          codeLanguage: "css",
          includePath: "",
          codeFilePath: "./example.css",
          fileExists: "true"
        }),
        _cache[3] || (_cache[3] = createBaseVNode("p", null, "the end.", -1))
      ]);
    };
  }
};
const md_obj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main,
  excerpt,
  id,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
export {
  _sfc_main as _,
  md_obj as m
};
