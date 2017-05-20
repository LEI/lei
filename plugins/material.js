import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

if (process.BROWSER_BUILD) {
  Vue.use(VueMaterial)
}
