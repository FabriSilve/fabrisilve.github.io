import { _ as _export_sfc, a as __nuxt_component_1, b as __nuxt_component_2 } from "../server.mjs";
import { _ as __nuxt_component_1$1 } from "./SectionParagraph.8428550d.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "@vue/devtools-api";
import "@iconify/vue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainTitle = __nuxt_component_1;
  const _component_SectionParagraph = __nuxt_component_1$1;
  const _component_ActionButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_MainTitle, { style: { "margin-bottom": "-15px" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`404`);
      } else {
        return [
          createTextVNode("404")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_SectionParagraph, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` The page you&#39;re looking for doesn&#39;t exist. Click below to head back to the safe and cozy home.`);
      } else {
        return [
          createTextVNode(" The page you're looking for doesn't exist. Click below to head back to the safe and cozy home.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ActionButton, { link: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go Home`);
      } else {
        return [
          createTextVNode("Go Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _404 as default
};
//# sourceMappingURL=404.eb9ec50d.js.map
