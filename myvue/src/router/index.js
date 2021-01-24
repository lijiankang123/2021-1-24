import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Index from '../views/Index'
import Article from '../views/Article'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/article/:id',
    component:Article
  },
  {
    path:'/index',
    component:Index
  },
  {
    path:'/register',
    component:Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})  

export default router
