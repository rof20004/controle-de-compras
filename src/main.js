import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.min.js')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
