<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-on:renew="renewStr" v-bind:propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      str: "this is app header"
    };
  },
  components: {
    "app-header": AppHeader
  },
  methods: {
    renewStr() {
      this.str = "send it!";
    }
  }
};
</script>

<style>
</style>