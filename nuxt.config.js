module.exports = {
    /*
     ** Build configuration
     */
    build: {
        vendor: ['vue-i18n'],
        /*
         ** Run ESLINT on save
         */
        // extend (config, ctx) {
        //     if (ctx.isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //         })
        //     }
        // }
    },
    router: {
        middleware: 'i18n',
        // routes: [
        //     {
        //         name: 'index',
        //         path: '/',
        //         component: 'pages/index.vue',
        //     },
        //     {
        //         name: 'about',
        //         path: '/about',
        //         component: 'pages/about.vue',
        //     },
        //     /*{
        //         name: 'category',
        //         path: '/:slug',
        //         component: 'pages/_slug/index.vue',
        //     },*/
        // ]
    },
    plugins: [
        { src: '~plugins/i18n.js', injectAs: 'i18n' },
    ],
    generate: {
        routes: ['/', '/about', '/fr', '/fr/about'],
        // dir: 'docs',
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Headers of the page
     */
    head: {
        title: 'LEI',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '{#web, #dev, #design}' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
}
