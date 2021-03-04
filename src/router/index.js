import Vue from 'vue'
import Router from 'vue-router'

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('Home')
    },
    {
      path: '/collection',
      name: 'collection',
      component: load('Collection')
    }
  ]
})
