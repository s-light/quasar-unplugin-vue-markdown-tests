import { K as resolveComponent, p as createElementBlock, v as openBlock, a5 as createStaticVNode, l as createBaseVNode, D as createTextVNode, j as createVNode, J as withCtx } from "./index-BsK2UUXV.js";
const _hoisted_1 = { class: "markdown-body" };
const title = "Testing Abbreviations";
const tags = ["rendering", "abbr", "style"];
const id = 1024;
const excerpt = "";
const _sfc_main = {
  __name: "abbr_test",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Testing Abbreviations", "tags": ["rendering", "abbr", "style"], "id": 1024 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[15] || (_cache[15] = createStaticVNode('<h1 id="test-abbreviations" tabindex="-1">Test Abbreviations</h1><p>In this document there are two abbr defined - <code>SUN</code> and <code>pp</code>.</p><p>from the global space should be enabled: <code>HTML</code>, <code>W3C</code>, <code>I2C</code>, <code>UART</code>.</p>', 3)),
        createBaseVNode("p", null, [
          _cache[2] || (_cache[2] = createTextVNode("Mikrocontroller often use ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("I2C")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("h1", null, "I²C", -1),
              createBaseVNode("p", null, "I²C InterInterCircuit", -1),
              createBaseVNode("p", null, [
                createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                createBaseVNode("em", null, "Controller"),
                createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                createBaseVNode("em", null, "Geräte"),
                createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                createBaseVNode("em", null, "Hausnummer"),
                createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
              ], -1)
            ])),
            _: 1
          }),
          _cache[3] || (_cache[3] = createTextVNode(" for communications."))
        ]),
        createBaseVNode("p", null, [
          _cache[6] || (_cache[6] = createTextVNode("The ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("SUN")
            ])),
            abbrDescription: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("big bright light")
            ])),
            _: 1
          }),
          _cache[7] || (_cache[7] = createTextVNode(" shines today!"))
        ]),
        createBaseVNode("p", null, [
          _cache[10] || (_cache[10] = createTextVNode("Another older interface is ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("UART")
            ])),
            abbrDescription: withCtx(() => _cache[9] || (_cache[9] = [
              createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
              createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
              createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1)
            ])),
            _: 1
          }),
          _cache[11] || (_cache[11] = createTextVNode(" - most times it is a point to point connection."))
        ]),
        createBaseVNode("p", null, [
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[12] || (_cache[12] = [
              createTextVNode("HTML")
            ])),
            abbrDescription: withCtx(() => _cache[13] || (_cache[13] = [
              createBaseVNode("p", null, "Hyper Text Markup Language", -1)
            ])),
            _: 1
          }),
          _cache[14] || (_cache[14] = createTextVNode(" is a nice way to do things?!"))
        ])
      ]);
    };
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main,
  excerpt,
  id,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _,
  _sfc_main as a
};
