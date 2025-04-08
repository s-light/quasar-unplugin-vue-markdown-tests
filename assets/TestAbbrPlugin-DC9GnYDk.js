import { H as createBlock, v as openBlock, n as unref } from "./index-BsK2UUXV.js";
import { _ as __vite_glob_0_0, a as _sfc_main$1 } from "./abbr_test-B-vItanL.js";
const _sfc_main = {
  __name: "TestAbbrPlugin",
  setup(__props) {
    const MDContent = _sfc_main$1;
    console.log("md_obj", __vite_glob_0_0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MDContent));
    };
  }
};
export {
  _sfc_main as default
};
