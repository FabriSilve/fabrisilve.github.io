import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/fabrizio/Projects/fabrisilve.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}