export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Empire Admin',
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - Empire Admin` : 'Empire Admin';
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i&amp;subset=latin-ext'
            }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/empire-admin.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/empire-admin',
        '@/plugins/vue-bar',
        '@/plugins/vue-moment',
        {
            src: './plugins/vue-snotify',
            ssr: false
        },
        {
            src: './plugins/full-calendar',
            ssr: false
        },
        // This is only for the welcome and login purposes, you can remove it along with the dependency
        {
            src: './plugins/snowfall',
            ssr: false
        },
    ],

    router: {
        linkActiveClass: 'node-active',
        middleware: 'auth',
    },
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        ['bootstrap-vue/nuxt', {css: false}],
        // Remember to set the baseUrl setting for axios if you want to use it
        ['@nuxtjs/axios', {baseURL: 'https://empireapi.burak.pro'}],
        '@nuxtjs/auth',
        '@nuxtjs/pwa',
    ],

    /**
     * Transitions
     */
    layoutTransition: {
        name: 'layout',
        mode: 'out-in'
    },
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    },

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {url: 'authenticate', method: 'post', propertyName: 'data'},
                    user: { url: 'me', method: 'get', propertyName: 'data' }
                }
            }
        }
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },

    env: {
        defaultTitle: 'Empire Admin',
        baseUrl: 'http://api.1pxup.com'
    }
}
