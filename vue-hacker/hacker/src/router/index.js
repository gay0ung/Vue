import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // 주소창에 입력해야하는 이름
    name: "home", //식별하기위한 이름.
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
  }
];
export const router = new VueRouter({ routes });
