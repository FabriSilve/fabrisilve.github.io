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
        id: 'G-ZVJQWJZ9BT',
        initCommands: [
            // Setup up consent mode
            ['consent', 'default', {
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                ad_storage: 'granted',
                analytics_storage: 'granted',
                wait_for_update: 500,
            }]
        ]
    }
})
