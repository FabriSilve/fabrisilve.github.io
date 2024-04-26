// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-gtag',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.js',
    },
    components: [{
        path: '~/components', pathPrefix: false,
    }],
    content: {},
    target: 'static',
    router: {
        base: '/'
    },
    gtag: {
        id: 'G-ZVJQWJZ9BT'
    }
})
