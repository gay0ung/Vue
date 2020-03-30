import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'



// router기능을 사용하기위해 .
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: NewsView

  },
  {
    path: "/news",
    name: "news",
    component: NewsView

  },
  {
    path: "/ask",
    name: "ask",
    component: AskView
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView
  },
]

export const router = new VueRouter({ routes });

