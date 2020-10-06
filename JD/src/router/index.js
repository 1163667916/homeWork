import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
const routerPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/catergry',
    component: () => import('../views/Catergry/catergry.vue')
  },
  {
    path: '/find',
    component: () => import('../views/Find/find.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart/cart.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine/mine.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
