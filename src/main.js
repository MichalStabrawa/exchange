
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueScrollTo from 'vue-scrollto'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'


Vue.use(VueScrollTo)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue ({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
