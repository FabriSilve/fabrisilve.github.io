import { l as useProjectStore, f as __nuxt_component_0, a as __nuxt_component_1, m as __nuxt_component_2, n as _sfc_main$1, h as __nuxt_component_4 } from "../server.mjs";
import { h, defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Icon } from "@iconify/vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
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
const __nuxt_component_5 = (props) => h("div", { class: "flex flex-col gap-1" }, [
  h("a", { href: props.project.link, class: "font-theme_bold text-head_text text-lg" }, [
    props.project.name,
    h(Icon, {
      class: "inline text-xl mx-2",
      color: "#eaeaea",
      icon: "ep:top-right"
    })
  ]),
  h("p", { class: "font-theme text-sm lg:text-lg" }, props.project.description)
]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { getAllProjects, getGraveProjects } = useProjectStore();
    const projects = getAllProjects;
    const grave = getGraveProjects;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_MainTitle = __nuxt_component_1;
      const _component_MainParagraph = __nuxt_component_2;
      const _component_MainProjectItem = _sfc_main$1;
      const _component_SectionTitle = __nuxt_component_4;
      const _component_GraveyardItem = __nuxt_component_5;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "page" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MainTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Projects`);
                } else {
                  return [
                    createTextVNode("Projects")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MainParagraph, { class: "-mt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Here are personal projects I&#39;ve worked on in my past years. Not all are great but they have been really nice experiments. `);
                } else {
                  return [
                    createTextVNode(" Here are personal projects I've worked on in my past years. Not all are great but they have been really nice experiments. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25"${_scopeId}><div class="flex flex-col items-center justify-center gap-28"${_scopeId}><!--[-->`);
            ssrRenderList(unref(projects), (proj) => {
              _push2(ssrRenderComponent(_component_MainProjectItem, {
                key: proj.id,
                description: proj.description,
                image: proj.image,
                link: proj.link,
                name: proj.name
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLayout, { name: "section" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Graveyard`);
                      } else {
                        return [
                          createTextVNode("Graveyard")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}>Projects I worked on and are no longer maintained.</p><div class="flex flex-col mt-10 gap-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(grave), (proj) => {
                    _push3(ssrRenderComponent(_component_GraveyardItem, {
                      key: proj.id,
                      project: proj
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_SectionTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Graveyard")
                      ]),
                      _: 1
                    }),
                    createVNode("p", null, "Projects I worked on and are no longer maintained."),
                    createVNode("div", { class: "flex flex-col mt-10 gap-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(grave), (proj) => {
                        return openBlock(), createBlock(_component_GraveyardItem, {
                          key: proj.id,
                          project: proj
                        }, null, 8, ["project"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MainTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Projects")
                ]),
                _: 1
              }),
              createVNode(_component_MainParagraph, { class: "-mt-2" }, {
                default: withCtx(() => [
                  createTextVNode(" Here are personal projects I've worked on in my past years. Not all are great but they have been really nice experiments. ")
                ]),
                _: 1
              }),
              createVNode("hr", { class: "bg-squgily bg-repeat border-0 h-[6px] opacity-25" }),
              createVNode("div", { class: "flex flex-col items-center justify-center gap-28" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (proj) => {
                  return openBlock(), createBlock(_component_MainProjectItem, {
                    key: proj.id,
                    description: proj.description,
                    image: proj.image,
                    link: proj.link,
                    name: proj.name
                  }, null, 8, ["description", "image", "link", "name"]);
                }), 128))
              ]),
              createVNode("hr", { class: "bg-squgily bg-repeat border-0 h-[6px] opacity-25" }),
              createVNode(_component_NuxtLayout, { name: "section" }, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Graveyard")
                    ]),
                    _: 1
                  }),
                  createVNode("p", null, "Projects I worked on and are no longer maintained."),
                  createVNode("div", { class: "flex flex-col mt-10 gap-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(grave), (proj) => {
                      return openBlock(), createBlock(_component_GraveyardItem, {
                        key: proj.id,
                        project: proj
                      }, null, 8, ["project"]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects.d0c01643.js.map
