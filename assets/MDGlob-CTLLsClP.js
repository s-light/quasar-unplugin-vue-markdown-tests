import { _ as __vite_glob_0_0 } from "./abbr_test-Bkc-Zn0G.js";
import { m as md_obj } from "./code_test-Bad5L-7p.js";
import { p as createElementBlock, v as openBlock, l as createBaseVNode, D as createTextVNode, j as createVNode, J as withCtx, n as unref, H as createBlock, F as Fragment, L as renderList, M as resolveDynamicComponent } from "./index-CaSS0-Ro.js";
import { Q as QTooltip } from "./QTooltip-epJYRAuy.js";
import { Q as QPage } from "./QPage-Cz1mJO3h.js";
import "./scroll-BwzEjsZh.js";
const _hoisted_1$1 = { class: "markdown-body" };
const title$1 = "my special title...";
const tags$1 = ["output", "aktor", "motor", "i2c"];
const id$1 = 70;
const excerpt$1 = "";
const _sfc_main$2 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "my special title...", "tags": ["output", "aktor", "motor", "i2c"], "id": 70 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[2] || (_cache[2] = createBaseVNode("h1", {
          id: "hello-world!",
          tabindex: "-1"
        }, "Hello World!", -1)),
        _cache[3] || (_cache[3] = createBaseVNode("p", null, "this is a test 😃", -1)),
        createBaseVNode("p", null, [
          _cache[1] || (_cache[1] = createTextVNode("PING")),
          createVNode(unref(QTooltip), null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Blubber Blubber")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2,
  excerpt: excerpt$1,
  id: id$1,
  tags: tags$1,
  title: title$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { class: "markdown-body" };
const title = "ping pong..";
const tags = ["input"];
const id = 42;
const excerpt = "";
const _sfc_main$1 = {
  __name: "test",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "ping pong..", "tags": ["input"], "id": 42 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
        createBaseVNode("h1", {
          id: "some-more-content%E2%80%A6",
          tabindex: "-1"
        }, "some more content…", -1),
        createBaseVNode("p", null, "this is another test 😃", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: "src/md_content/test_image.png",
            alt: "blubber"
          })
        ], -1),
        createBaseVNode("p", null, "and some more text…", -1)
      ]));
    };
  }
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt,
  id,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "MDGlob",
  setup(__props) {
    const mdcontent = /* @__PURE__ */ Object.assign({ "/src/md_content/abbr_test.md": __vite_glob_0_0, "/src/md_content/code_test.md": md_obj, "/src/md_content/readme.md": __vite_glob_0_2, "/src/md_content/test.md": __vite_glob_0_3 });
    console.log("mdcontent", mdcontent);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createTextVNode(" ping ")),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mdcontent), (item, index) => {
            return openBlock(), createBlock(resolveDynamicComponent(item.default), { key: index });
          }), 128))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
