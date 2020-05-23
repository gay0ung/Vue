<template>
  <div>
    <form @submit.prevent="submitForm" class="search-form">
      <P>this is searchform page</P>
      <div>
        <input
          id="title"
          type="text"
          v-model="title"
          placehoder="제목을 입력해주세요."
        />
        <button class="search-btn" type="submit">search</button>
      </div>
      <div class="mv-content">
        {{ movieInfo }}
      </div>
    </form>
  </div>
</template>

<script>
// import { FETCH_TITLE } from '@/store/index.js';

export default {
  data() {
    return {
      title: '', // 영화제목
      movieInfo: '', // 결과물내용
    };
  },
  methods: {
    submitForm() {
      console.log('폼제출');
      this.$store.dispatch('FETCH_LIST', this.title);
      // const TITLE = {
      //   title: this.title,
      // };
      // const response = searchMovie(TITLE);
      // console.log(response.data);
      // this.movieInfo = response;
      // this.initForm();
      console.log(this.title);
    },

    initForm() {
      this.title = '';
    },
  },
  computed: {
    // FETCH_TITLE() {
    //   return this.$store.state.list;
    // },
  },
};
</script>

<style>
form {
  text-align: center;
}
.mv-content {
  margin-top: 50px;
}
h2 {
  font-size: 30px;
}
</style>
