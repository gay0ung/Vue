<template>
  <header>
    <h1>{{propsdata}}</h1>
    <button @click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["propsdata"],
  methods: {
    sendEvent() {
      console.log("send!!");
      // 이벤트가 상위폴더로 전달된다.
      this.$emit("renew");
    }
  }
};
</script>

<style>
</style>