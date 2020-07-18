import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Browser from './components/Browser.vue'

// Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
     {
       path: '/',
       component: Browser
     }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
