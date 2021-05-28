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
  // created() {},
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

      if (this) {
        if (curRoute !== 'home' && curRoute !== 'movie' && curRoute !== 'tv') {
          return (window.document.firstElementChild.style.backgroundColor =
            '#fffff');
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
@import './components/main/mainStyle.scss';
</style>
