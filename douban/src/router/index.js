import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../page/Home/Home.vue')
    },
    {
      path: '/broadcast',
      component: () => import('../page/Broadcast/Broadcast.vue')
    },
    {
      path: '/mine',
      component: () => import('../page/Mine/Mine.vue')
    },
    {
      path: '/group',
      component: () => import('../page/Group/Group.vue')
    },
    {
      path: '/audio',
      component: () => import('../page/Audio/Audio.vue'),
      children: [
        { path: '/', redirect: 'movie' },
        { path: 'movie', component: () => import('../page/Audio/sub/Movies.vue') },
        { path: 'city', component: () => import('../page/Audio/sub/City.vue') },
        { path: 'read', component: () => import('../page/Audio/sub/Read.vue') },
        { path: 'tv', component: () => import('../page/Audio/sub/Tv.vue') },
        { path: 'music', component: () => import('../page/Audio/sub/Music.vue') }
      ]
    },
    { path: '/login', component: () => import('../page/Login/Login.vue') }
  ]
})
