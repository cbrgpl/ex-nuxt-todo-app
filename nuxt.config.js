import colors from 'vuetify/es5/util/colors'

import * as configPartials from './nuxt.config.partials'

export default {
  ...configPartials,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ex-nuxt-todo-app',
    title: 'ex-nuxt-todo-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/general/atomic',
    '~/components/general/composite',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  vuetify: {
    customVariables: [ '~/scss/utils/_utils.scss' ],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.pink,
          accent: colors.pink.accent2,
          secondary: colors.purple.darken4,
          info: colors.indigo.darken1,
          warning: colors.teal.darken4,
          error: colors.deepOrange.accent3,
          success: colors.green.accent3
        }
      }
    }
  },

  router: {
    extendRoutes ( routes ) {
      console.log( JSON.stringify( routes, null, 1 ) )
    }
  },

  dir: {
    assets: 'scss',
    pages: 'views'
  },
}
