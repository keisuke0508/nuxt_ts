import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6754d49c = () => interopDefault(import('../pages/calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _1801a184 = () => interopDefault(import('../pages/drag_and_drop.vue' /* webpackChunkName: "pages/drag_and_drop" */))
const _1e79338a = () => interopDefault(import('../pages/graph.vue' /* webpackChunkName: "pages/graph" */))
const _52c6fbfc = () => interopDefault(import('../pages/picker.vue' /* webpackChunkName: "pages/picker" */))
const _344c390e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendar",
    component: _6754d49c,
    name: "calendar"
  }, {
    path: "/drag_and_drop",
    component: _1801a184,
    name: "drag_and_drop"
  }, {
    path: "/graph",
    component: _1e79338a,
    name: "graph"
  }, {
    path: "/picker",
    component: _52c6fbfc,
    name: "picker"
  }, {
    path: "/",
    component: _344c390e,
    name: "index"
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
