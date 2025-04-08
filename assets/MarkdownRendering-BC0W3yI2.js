var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { s as shallowRef, r as ref, a6 as watchEffect, p as createElementBlock, v as openBlock, D as createTextVNode, l as createBaseVNode, a7 as toRaw } from "./index-BsK2UUXV.js";
import { M as MarkdownIt } from "./index-B0QwVmVv.js";
const placeholder = (id, code) => `<pre><!--::markdown-it-async::${id}::--><code>${code}</code></pre>`;
const placeholderRe = /<pre><!--::markdown-it-async::(\w+)::--><code>[\s\S]*?<\/code><\/pre>/g;
function randStr() {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}
class MarkdownItAsync extends MarkdownIt {
  constructor(...args) {
    const map = /* @__PURE__ */ new Map();
    const options = args.length === 2 ? args[1] : args[0];
    if (options && "highlight" in options)
      options.highlight = wrapHightlight(options.highlight, map);
    super(...args);
    __publicField(this, "placeholderMap");
    __publicField(this, "disableWarn", false);
    this.placeholderMap = map;
  }
  // implementation
  use(plugin, ...params) {
    return super.use(plugin, ...params);
  }
  render(src, env) {
    if (this.options.warnOnSyncRender && !this.disableWarn) {
      console.warn("[markdown-it-async] Please use `md.renderAsync` instead of `md.render`");
    }
    return super.render(src, env);
  }
  async renderAsync(src, env) {
    this.options.highlight = wrapHightlight(this.options.highlight, this.placeholderMap);
    this.disableWarn = true;
    const result = this.render(src, env);
    this.disableWarn = false;
    return replaceAsync(result, placeholderRe, async (match, id) => {
      if (!this.placeholderMap.has(id))
        throw new Error(`Unknown highlight placeholder id: ${id}`);
      const [promise, _str, lang, _attrs] = this.placeholderMap.get(id);
      const result2 = await promise || "";
      this.placeholderMap.delete(id);
      if (result2.startsWith("<pre"))
        return result2;
      else
        return `<pre><code class="language-${lang}">${result2}</code></pre>`;
    });
  }
}
function createMarkdownItAsync(...args) {
  return new MarkdownItAsync(...args);
}
function replaceAsync(string, searchValue, replacer) {
  try {
    if (typeof replacer === "function") {
      const values = [];
      String.prototype.replace.call(string, searchValue, (...args) => {
        values.push(replacer(...args));
        return "";
      });
      return Promise.all(values).then((resolvedValues) => {
        return String.prototype.replace.call(string, searchValue, () => {
          return resolvedValues.shift() || "";
        });
      });
    } else {
      return Promise.resolve(
        String.prototype.replace.call(string, searchValue, replacer)
      );
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
const wrappedSet = /* @__PURE__ */ new WeakSet();
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function wrapHightlight(highlight, map) {
  if (!highlight)
    return void 0;
  if (wrappedSet.has(highlight))
    return highlight;
  const wrapped = (str, lang, attrs) => {
    const promise = highlight(str, lang, attrs);
    if (typeof promise === "string")
      return promise;
    const id = randStr();
    map.set(id, [promise, str, lang, attrs]);
    let code = str;
    if (code.endsWith("\n"))
      code = code.slice(0, -1);
    code = escapeHtml(code);
    return placeholder(id, code);
  };
  wrappedSet.add(wrapped);
  return wrapped;
}
function MarkdownItPluginCodeAsMDCode(md) {
  md.renderer.rules.fence = function(tokens, idx, options, env, slf) {
    var _a, _b, _c, _d, _e, _f;
    const token = tokens[idx];
    token.tag = "MDCode";
    token.attrSet("content", token.content);
    token.attrSet("codeLanguage", token.info);
    token.attrSet("includePath", ((_a = token.meta) == null ? void 0 : _a.includePath) ? (_b = token.meta) == null ? void 0 : _b.includePath : "");
    token.attrSet("codeFilePath", ((_c = token.meta) == null ? void 0 : _c.codeFilePath) ? (_d = token.meta) == null ? void 0 : _d.codeFilePath : "");
    token.attrSet("fileExists", ((_e = token.meta) == null ? void 0 : _e.fileExists) ? (_f = token.meta) == null ? void 0 : _f.fileExists : void 0);
    return `<${token.tag} ${slf.renderAttrs(token)}></${token.tag}>`;
  };
}
const source = "---\ntitle: Testing Code-Blocks\ntags: [sw, code, style]\nid: 127\n---\n\n# Code Test\n\nsome default..\n\n```js\nconst xyz = 42\n```\n\nthe following code block should be filled with a good example.ino code..\n\n```css :./example.css\nthis should be replaced...\n```\n\nthe end.\n";
const _hoisted_1 = { class: "my-markdown-wrapper" };
const _hoisted_2 = ["innerHTML"];
const _sfc_main = {
  __name: "MarkdownRendering",
  setup(__props) {
    const md_options = {
      html: true,
      linkify: true,
      typographer: true,
      eval: false
    };
    const md = shallowRef(new createMarkdownItAsync(md_options));
    md.value.use(MarkdownItPluginCodeAsMDCode);
    const contentHTML = ref("");
    watchEffect(async () => {
      contentHTML.value = md.value.render(source);
      console.log("contentHTML.value", toRaw(contentHTML.value));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode(" (MarkdownRendering.vue) ")),
        createBaseVNode("div", {
          class: "my-markdown",
          innerHTML: contentHTML.value
        }, null, 8, _hoisted_2)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
