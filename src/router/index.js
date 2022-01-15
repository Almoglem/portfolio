import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/header',
    name: 'header',
    component: HomeView
  },
  {
    path: '/my-projects',
    name: 'projects',
    component: HomeView
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: HomeView
  },
  {
    path: '/footer',
    name: 'footer',
    component: HomeView
  },
]

const router = new VueRouter({
  routes
})

export default router
