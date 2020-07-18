import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home' 
import Result from '@/views/Result' 
Vue.use(VueRouter)


 const router = new VueRouter({
  routes: [
     {
       name: 'home',
       path: '/',
       component: Home
     },
     {
       name: 'result',
       path:'/result',
       component: Result
     }
  ]
})

export default router