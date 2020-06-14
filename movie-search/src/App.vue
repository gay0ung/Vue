<template>
  <div id="app">
    <AppHeaderPage></AppHeaderPage>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeaderPage from './views/AppHeaderPage';

export default {
  components: {
    AppHeaderPage,
  },
};
</script>

<style>
@import url('./css/reset.css');
@import url('./css/style.css');
</style>
