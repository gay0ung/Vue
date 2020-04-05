import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => import (/* webpackChunkName: "about" */ './views/About.vue')
const Users = () => import (/* webpackChunkName: "users" */ './views/Users.vue')
const UsersDetail = () => import (/* webpackChunkName: "users-detail" */ './views/UsersDetail.vue')
const UsersEdit = () => import (/* webpackChunkName: "users-edit" */ './views/UsersEdit.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', //주소
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      children: [{
          path: ":id",
          name: "users-detail",
          component: UsersDetail
        },
        {
          path: ":id/edit",
          name: "users-edit",
          component: UsersEdit
        }
      ]
    },
    {
      path:'/redirect-me', 
      redirect:{name: 'users'}
    },
    {
      path:'/*', //--> 모든  path중 하나도 걸리지 않으면..이곳에서 redirect된다.
      redirect:{name: 'home'}
    }
  ]
})
