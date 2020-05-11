import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "home" */ '_v/home')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      title: '详情页'
    },
    component: () => import(/* webpackChunkName: "detail" */ '_v/detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || process.env.title
  next()
})

export default router
