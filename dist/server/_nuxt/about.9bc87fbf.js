import { u as useWorkStore, c as __vite_glob_0_0, d as __vite_glob_0_1, e as __vite_glob_0_2, f as __nuxt_component_0, g as __nuxt_component_2, h as __nuxt_component_4$1 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./SectionParagraph.8428550d.js";
import { h, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
const __nuxt_component_4 = (props, context) => {
  const { name, position, link, to, from } = props.work;
  return h("a", {
    class: "flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6 hover:bg-sky-700",
    href: link
  }, [
    h("span", { class: "font-theme_bold text-head_text" }, position),
    h("span", { class: "flex-[1_1_auto]" }),
    h("span", { class: "sm:text-right text-sm sm:text-base italic" }, name),
    h("span", { class: "text-sm sm:text-base" }, `${from} - ${to}`)
  ]);
};
const TopImage = "" + globalThis.__buildAssetsURL("about-image.6f2f5a10.jpg");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const workStore = useWorkStore();
    const works = workStore.getAllWorks;
    const pdfs = /* @__PURE__ */ Object.assign({ "../assets/pdf/eaapp.pdf": __vite_glob_0_0, "../assets/pdf/eventaround.pdf": __vite_glob_0_1, "../assets/pdf/silvestri.pdf": __vite_glob_0_2 });
    const resumeLink = pdfs["../assets/pdf/silvestri.pdf"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionParagraph = __nuxt_component_1;
      const _component_LinkBtn = __nuxt_component_2;
      const _component_SectionTitle = __nuxt_component_4$1;
      const _component_WorkListItem = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "page" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(TopImage))} class="w-full h-64 rounded-xl object-cover"${_scopeId}><div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` I&#39;m Fabrizio Silvestri, an Italian in Sweden with never-stopping love for learning new tech. I am specialised in Web Development and Software tools to support DevX. I am passionate about coding64nd designing tech solutions for live problems. `);
                } else {
                  return [
                    createTextVNode(" I'm Fabrizio Silvestri, an Italian in Sweden with never-stopping love for learning new tech. I am specialised in Web Development and Software tools to support DevX. I am passionate about coding64nd designing tech solutions for live problems. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` I&#39;m currently working full time as CTO for `);
                  _push3(ssrRenderComponent(_component_LinkBtn, {
                    link: "https://www.moank.se/",
                    text: "Moank AB"
                  }, null, _parent3, _scopeId2));
                  _push3(`, a cool heavy tech oriented bank based in Stockholm. I got &quot;adobted&quot; by the founders of the company in mid 2018 after graduating. The company was still at a Startup phase and I&#39;ve been working on the development of the bank&#39;s core system since I was a Junior Developer. `);
                } else {
                  return [
                    createTextVNode(" I'm currently working full time as CTO for "),
                    createVNode(_component_LinkBtn, {
                      link: "https://www.moank.se/",
                      text: "Moank AB"
                    }),
                    createTextVNode(`, a cool heavy tech oriented bank based in Stockholm. I got "adobted" by the founders of the company in mid 2018 after graduating. The company was still at a Startup phase and I've been working on the development of the bank's core system since I was a Junior Developer. `)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` During this career opportunity I had the chance to mature to my current position passing through the roles of Senior Developer and Engineer Project Manager. I refined my skills in the stack used by the company: React, NodeJS, Typescript, MongoDB, AWS Cloud and Docker. I also had the chance to work with Python and Falcon for some internal tools. `);
                } else {
                  return [
                    createTextVNode(" During this career opportunity I had the chance to mature to my current position passing through the roles of Senior Developer and Engineer Project Manager. I refined my skills in the stack used by the company: React, NodeJS, Typescript, MongoDB, AWS Cloud and Docker. I also had the chance to work with Python and Falcon for some internal tools. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Given the small size of the company, I often had to wear multiple hats. I had the chance to work on the DevOps side, setting up the CI/CD pipelines and the infrastructure on AWS. I also worked with the Product team, helping panning the roadmap and the features for the projects. I became the tech reference for the company with the opportunity to mentor and lead the other developers in the team and support the meetings with external partners. `);
                } else {
                  return [
                    createTextVNode(" Given the small size of the company, I often had to wear multiple hats. I had the chance to work on the DevOps side, setting up the CI/CD pipelines and the infrastructure on AWS. I also worked with the Product team, helping panning the roadmap and the features for the projects. I became the tech reference for the company with the opportunity to mentor and lead the other developers in the team and support the meetings with external partners. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` I started learning about web development in my early high school years, where I was introduced to small webpages with simple HTML, CSS and JS. After my high-school, I took the univeristy path to increase my skills in this fascinating IT world and I graduated in Computer Science at the University of Genoa, Italy. During my university years I had the chance to work on some small projects and I started to learn about the backend side of the web with PHP, C#, Java and MySQL. I also started to learn about the Linux world and the terminal, which is now my daily driver. `);
                } else {
                  return [
                    createTextVNode(" I started learning about web development in my early high school years, where I was introduced to small webpages with simple HTML, CSS and JS. After my high-school, I took the univeristy path to increase my skills in this fascinating IT world and I graduated in Computer Science at the University of Genoa, Italy. During my university years I had the chance to work on some small projects and I started to learn about the backend side of the web with PHP, C#, Java and MySQL. I also started to learn about the Linux world and the terminal, which is now my daily driver. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` You can find some of my experimental side projects on my `);
                  _push3(ssrRenderComponent(_component_LinkBtn, {
                    link: "https://github.com/FabriSilve",
                    text: "Github"
                  }, null, _parent3, _scopeId2));
                  _push3(` or on my `);
                  _push3(ssrRenderComponent(_component_LinkBtn, {
                    link: "/",
                    text: "Portfolio"
                  }, null, _parent3, _scopeId2));
                  _push3(` page. I usually don&#39;t update my portfolio page but all my recent one&#39;s are on github. `);
                } else {
                  return [
                    createTextVNode(" You can find some of my experimental side projects on my "),
                    createVNode(_component_LinkBtn, {
                      link: "https://github.com/FabriSilve",
                      text: "Github"
                    }),
                    createTextVNode(" or on my "),
                    createVNode(_component_LinkBtn, {
                      link: "/",
                      text: "Portfolio"
                    }),
                    createTextVNode(" page. I usually don't update my portfolio page but all my recent one's are on github. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Outside of my work-life, I love to play Ukulele, doing Film Photography and Cooking. You can follow along about my life on my `);
                  _push3(ssrRenderComponent(_component_LinkBtn, {
                    link: "https://www.instagram.com/fabri.silve",
                    text: "Instagram"
                  }, null, _parent3, _scopeId2));
                  _push3(`. `);
                } else {
                  return [
                    createTextVNode(" Outside of my work-life, I love to play Ukulele, doing Film Photography and Cooking. You can follow along about my life on my "),
                    createVNode(_component_LinkBtn, {
                      link: "https://www.instagram.com/fabri.silve",
                      text: "Instagram"
                    }),
                    createTextVNode(". ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"${_scopeId}><div class="flex flex-col gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Experience `);
                  _push3(ssrRenderComponent(_component_LinkBtn, {
                    link: unref(resumeLink),
                    text: "(Resume)"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode("Experience "),
                    createVNode(_component_LinkBtn, {
                      link: unref(resumeLink),
                      text: "(Resume)"
                    }, null, 8, ["link"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLayout, { name: "section" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(works), (work) => {
                    _push3(ssrRenderComponent(_component_WorkListItem, {
                      key: work.id,
                      work
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(works), (work) => {
                      return openBlock(), createBlock(_component_WorkListItem, {
                        key: work.id,
                        work
                      }, null, 8, ["work"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("img", {
                src: unref(TopImage),
                class: "w-full h-64 rounded-xl object-cover"
              }, null, 8, ["src"]),
              createVNode("div", { class: "flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12" }, [
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" I'm Fabrizio Silvestri, an Italian in Sweden with never-stopping love for learning new tech. I am specialised in Web Development and Software tools to support DevX. I am passionate about coding64nd designing tech solutions for live problems. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" I'm currently working full time as CTO for "),
                    createVNode(_component_LinkBtn, {
                      link: "https://www.moank.se/",
                      text: "Moank AB"
                    }),
                    createTextVNode(`, a cool heavy tech oriented bank based in Stockholm. I got "adobted" by the founders of the company in mid 2018 after graduating. The company was still at a Startup phase and I've been working on the development of the bank's core system since I was a Junior Developer. `)
                  ]),
                  _: 1
                }),
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" During this career opportunity I had the chance to mature to my current position passing through the roles of Senior Developer and Engineer Project Manager. I refined my skills in the stack used by the company: React, NodeJS, Typescript, MongoDB, AWS Cloud and Docker. I also had the chance to work with Python and Falcon for some internal tools. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" Given the small size of the company, I often had to wear multiple hats. I had the chance to work on the DevOps side, setting up the CI/CD pipelines and the infrastructure on AWS. I also worked with the Product team, helping panning the roadmap and the features for the projects. I became the tech reference for the company with the opportunity to mentor and lead the other developers in the team and support the meetings with external partners. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" I started learning about web development in my early high school years, where I was introduced to small webpages with simple HTML, CSS and JS. After my high-school, I took the univeristy path to increase my skills in this fascinating IT world and I graduated in Computer Science at the University of Genoa, Italy. During my university years I had the chance to work on some small projects and I started to learn about the backend side of the web with PHP, C#, Java and MySQL. I also started to learn about the Linux world and the terminal, which is now my daily driver. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" You can find some of my experimental side projects on my "),
                    createVNode(_component_LinkBtn, {
                      link: "https://github.com/FabriSilve",
                      text: "Github"
                    }),
                    createTextVNode(" or on my "),
                    createVNode(_component_LinkBtn, {
                      link: "/",
                      text: "Portfolio"
                    }),
                    createTextVNode(" page. I usually don't update my portfolio page but all my recent one's are on github. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SectionParagraph, null, {
                  default: withCtx(() => [
                    createTextVNode(" Outside of my work-life, I love to play Ukulele, doing Film Photography and Cooking. You can follow along about my life on my "),
                    createVNode(_component_LinkBtn, {
                      link: "https://www.instagram.com/fabri.silve",
                      text: "Instagram"
                    }),
                    createTextVNode(". ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("hr", { class: "bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" }),
              createVNode("div", { class: "flex flex-col gap-5" }, [
                createVNode(_component_SectionTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Experience "),
                    createVNode(_component_LinkBtn, {
                      link: unref(resumeLink),
                      text: "(Resume)"
                    }, null, 8, ["link"])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLayout, { name: "section" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(works), (work) => {
                      return openBlock(), createBlock(_component_WorkListItem, {
                        key: work.id,
                        work
                      }, null, 8, ["work"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about.9bc87fbf.js.map
