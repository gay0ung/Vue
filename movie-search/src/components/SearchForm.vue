<template>
  <div>
    <form action="" @submit.prevent="submitForm">
      this is searchform page
      <input type="text" v-model="title" />
      <button type="submit">search</button>
    </form>
  </div>
</template>

<script>
// import { searchMovie } from '@/api/index.js';
export default {
  data() {
    return {
      title: '', // 영화 제목
      director: '', // 감독 이름
    };
  },
  methods: {
    async submitForm() {
      try {
        const movieData = {
          title: this.title,
          director: this.director,
        };
        await this.$store.dispatch('SEARCH', movieData);
        console.log('search');

        this.$router.push('/movieInfo');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
