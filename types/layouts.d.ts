import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "page" | "section"
declare module "/home/fabrizio/Projects/fabrisilve.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}