import { m as md_obj$1 } from "./abbr_test-BBs31nzL.js";
import { m as md_obj } from "./code_test-De9TAjq6.js";
import { p as createElementBlock, v as openBlock, l as createBaseVNode, D as createTextVNode, j as createVNode, J as withCtx, n as unref, H as createBlock, F as Fragment, K as renderList, E as toDisplayString, L as resolveDynamicComponent } from "./index-DIMEVx97.js";
import { Q as QTooltip } from "./QTooltip-DzykyEsx.js";
import { Q as QPage } from "./QPage-CI0LLcUj.js";
import "./scroll-HVkcWP7y.js";
const _hoisted_1$3 = { class: "markdown-body" };
const title$2 = "World Hello!!";
const tags$2 = ["hello"];
const id$2 = 12345;
const excerpt$2 = '<h1 id="hello-world" tabindex="-1">Hello World</h1>\n<p>some intro text…</p>\n';
const _sfc_main$3 = {
  __name: "hello",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "World Hello!!", "tags": ["hello"], "id": 12345 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _cache[0] || (_cache[0] = [
        createBaseVNode("h1", {
          id: "hello-world",
          tabindex: "-1"
        }, "Hello World", -1),
        createBaseVNode("p", null, "some intro text…", -1),
        createBaseVNode("p", null, "and more details… what ever follows here…", -1),
        createBaseVNode("p", null, "the end.", -1)
      ]));
    };
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3,
  excerpt: excerpt$2,
  id: id$2,
  tags: tags$2,
  title: title$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$2 = { class: "markdown-body" };
const title$1 = "my special title...";
const tags$1 = ["output", "aktor", "motor", "i2c"];
const id$1 = 70;
const excerpt$1 = '<h1 id="readme.md" tabindex="-1">Readme.md</h1>\n<p>this is a test 😃</p>\n';
const _sfc_main$2 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "my special title...", "tags": ["output", "aktor", "motor", "i2c"], "id": 70 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[2] || (_cache[2] = createBaseVNode("h1", {
          id: "readme.md",
          tabindex: "-1"
        }, "Readme.md", -1)),
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
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2,
  excerpt: excerpt$1,
  id: id$1,
  tags: tags$1,
  title: title$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1 = { class: "markdown-body" };
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
      return openBlock(), createElementBlock("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
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
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt,
  id,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { for: "" };
const _sfc_main = {
  __name: "MDGlob",
  setup(__props) {
    const mdcontent = /* @__PURE__ */ Object.assign({ "/src/md_content/abbr_test.md": md_obj$1, "/src/md_content/code_test.md": md_obj, "/src/md_content/hello.md": __vite_glob_0_2, "/src/md_content/readme.md": __vite_glob_0_3, "/src/md_content/test.md": __vite_glob_0_4 });
    console.log("mdcontent", mdcontent);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createTextVNode(" here are all *.md files rendered one after each other: ")),
          _cache[2] || (_cache[2] = createBaseVNode("hr", null, null, -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mdcontent), (item, index) => {
            return openBlock(), createElementBlock("div", { key: index }, [
              createBaseVNode("label", _hoisted_1, toDisplayString(index), 1),
              (openBlock(), createBlock(resolveDynamicComponent(item.default))),
              _cache[0] || (_cache[0] = createBaseVNode("hr", null, null, -1))
            ]);
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
