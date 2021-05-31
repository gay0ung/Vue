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
  data() {
    return {
      curRoute: null,
    };
  },
  mounted() {
    this.backgroundColor();
  },
  updated() {
    this.backgroundColor();
  },
  methods: {
    backgroundColor() {
      let curRoute = this.curRoute;
      curRoute = this.$route.name;

      if (curRoute === 'home' || curRoute === 'movie' || curRoute === 'tv') {
        window.document.body.style.backgroundColor = '#0D0D0D';
      } else {
        window.document.body.style.backgroundColor = '#ffffff';
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
@import './components/main/mainStyle.scss';
</style>
