<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="r-veiw"></router-view>
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
