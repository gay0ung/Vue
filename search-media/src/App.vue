<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
