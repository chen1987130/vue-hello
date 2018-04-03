import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/page/hello'
import Index from '@/page/index'
import Content from '@/page/content'
import JQ from '@/page/jq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/content/:id',
      name: 'content',
      component: Content
    }, {
      path: '/jq',
      name: 'jq',
      component: JQ
    }
  ]
})
