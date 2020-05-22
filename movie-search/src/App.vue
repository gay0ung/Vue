<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-link to=""> movieinfo</router-link>
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>
<style>
@import url('./css/common.css');
</style>
