import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _804ce2d0 = () => interopDefault(import('..\\pages\\ch.vue' /* webpackChunkName: "pages/ch" */))
const _8a48c322 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0ead9d06 = () => interopDefault(import('..\\pages\\i.vue' /* webpackChunkName: "pages/i" */))
const _1acc9192 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ch",
    component: _804ce2d0,
    name: "ch___en"
  }, {
    path: "/es",
    component: _8a48c322,
    name: "index___es"
  }, {
    path: "/fr",
    component: _8a48c322,
    name: "index___fr"
  }, {
    path: "/i",
    component: _0ead9d06,
    name: "i___en"
  }, {
    path: "/inspire",
    component: _1acc9192,
    name: "inspire___en"
  }, {
    path: "/es/ch",
    component: _804ce2d0,
    name: "ch___es"
  }, {
    path: "/es/i",
    component: _0ead9d06,
    name: "i___es"
  }, {
    path: "/es/inspire",
    component: _1acc9192,
    name: "inspire___es"
  }, {
    path: "/fr/ch",
    component: _804ce2d0,
    name: "ch___fr"
  }, {
    path: "/fr/i",
    component: _0ead9d06,
    name: "i___fr"
  }, {
    path: "/fr/inspire",
    component: _1acc9192,
    name: "inspire___fr"
  }, {
    path: "/",
    component: _8a48c322,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
