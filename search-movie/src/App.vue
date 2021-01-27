<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="view-page"></router-view>
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

<style>
@import url('./assets/css/style.css');
</style>
