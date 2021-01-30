import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
          path:'/about',
          name:'About',
          component:About
      },
      {
        path:'/service',
        name:'service',
        component:Service
    },
      
      
      
        
   
    ],
    mode:"history"
});