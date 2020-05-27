<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
      <input
        type="text"
        id="title-input"
        v-model="title"
        placeholder="영화 제목을 입력해주세요"
      />
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
      //director: '', // 감독 이름
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch('SEARCH', this.title);
        console.log('search');

        this.$router.push('/movieInfo');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.form {
  text-align: center;
}
#title-input {
  width: 60%;
}
</style>
