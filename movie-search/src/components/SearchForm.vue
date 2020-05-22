<template>
  <div>
    <form @submit.prevent="submitForm" class="search-form">
      <P>this is searchform page</P>
      <div>
        <input id="title" type="text" v-model="title" />
        <button class="search-btn" type="submit">search</button>
      </div>
      <div class="mv-content">
        <!-- {{ movieInfo }} -->
        {{ movieList }}
      </div>
    </form>
  </div>
</template>

<script>
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
      this.$store.dispatch('FetchList', this.title);
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
    movieList() {
      return this.$store.state.list;
    },
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
