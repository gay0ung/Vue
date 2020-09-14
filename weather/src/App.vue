<template>
  <div id="app">
    <AppHeader></AppHeader>
    <MainPage></MainPage>
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import MainPage from '@/views/MainPage.vue';

export default {
  components: {
    AppHeader,
    MainPage,
  },
};
</script>

<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/style.css');
</style>
