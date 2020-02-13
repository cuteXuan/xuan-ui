import Vue from 'vue'
import App from './App.vue'
import XunaUi from '../packages'

Vue.config.productionTip = false
Vue.use(XunaUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
