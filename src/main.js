import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 与服务器建立连接
// let socket = io.connect("http://127.0.0.1:3000");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')