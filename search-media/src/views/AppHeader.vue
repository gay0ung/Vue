<template>
  <header :class="`header__wrap ${headerStyle()}`">
    <HeaderForm></HeaderForm>
  </header>
</template>

<script>
import HeaderForm from '@/components/header/HeaderForm.vue';
export default {
  components: { HeaderForm },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    headerStyle() {
      const curRoute = this.$route.name;
      return curRoute === 'home' || curRoute === 'movie' || curRoute === 'tv'
        ? ''
        : 'dark';
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const curRoute = this.$route.name;
      if (curRoute === 'home' || curRoute === 'movie' || curRoute === 'tv') {
        scrollY > 0
          ? this.$el.classList.add('dark')
          : this.$el.classList.remove('dark');
      }
    },
  },
};
</script>

<style></style>
