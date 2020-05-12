import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  // template를 실행하면 render함수가 실행한다.
  render: (h) => h(App),
}).$mount("#app");
