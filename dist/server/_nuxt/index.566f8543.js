import { _ as _export_sfc, i as __nuxt_component_0, j as _sfc_main$1, k as _sfc_main$2 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
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
  const _component_TheHero = __nuxt_component_0;
  const _component_TheSocials = _sfc_main$1;
  const _component_FeaturedProjects = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8 lg:gap-16 mb-16" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHero, null, null, _parent));
  _push(ssrRenderComponent(_component_TheSocials, null, null, _parent));
  _push(`<hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25">`);
  _push(ssrRenderComponent(_component_FeaturedProjects, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.566f8543.js.map
