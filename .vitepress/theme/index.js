// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DeveloperFeatures from './components/DeveloperFeatures.vue'
import Contributors from './components/Contributors.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(DeveloperFeatures)
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app.component('DeveloperFeatures', DeveloperFeatures)
    app.component('Contributors', Contributors)
  }
}
