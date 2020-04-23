import Vue from "vue"; // vue 생성자 가져옴
import VueRouter from "vue-router"; // 라우터 가져옴
import NewsView from "../views/NewsView.vue"; // 뉴스컴포넌트 가져옴
import AskView from "../views/AskView.vue"; // 에스크컴포넌트 가져옴
import JobsView from "../views/JobsView.vue"; //잡스컴포넌트 가져옴
import UserView from "../views/UserView.vue";
import CommentView from "../views/CommentView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: NewsView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView,
  },
  {
    path: "/item/:id", //책(코딩공작소-p.194) Dynamic Segment(동적 세그먼트) : 경로에서 사용되는 변수. 쿼리 문자열 방식보다 경로명이 좀더 깔끔해지는 효과 얻을 수 있음. (동적세그먼트는 ':'로 시작한다.)
    //(모든 사용자에 대해 동일한 레이아웃을 가지지만 다른 사용자 id로 렌더링 되어야 하는 User 컴포넌트가 있을 수 있다. vue-router에서 우리는 경로에서 동적 세그먼트를 사용하여 실행할 수 있다.)
    name: "comment",
    component: CommentView,
  },
];

export const router = new VueRouter({ routes });
