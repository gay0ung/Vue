<template>
  <form class="form">
    <ul>
      <li>
        <i class="poster">포스터가 나올자리{{ posters }}</i>
        <b class="title">제목: {{ title }}</b>
        <!-- <span>개봉날짜: {{ releaseDts }}</span> -->
        <!-- <span>감독명: {{ director }}</span> -->
        <!-- <span>줄거리: {{ plot }}</span> -->
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      posters: '',
      title: this.$store.state.movieData.title, // 영화 제목
      //director: this.$store.state.movieData.directorNm, // 감독 이름
      plot: '', // 줄거리
      releaseDts: '', // 개봉날짜
    };
  },
  computed: {
    movieResult() {
      return this.$store.state.movieData;
    },
  },
  methods: {
    // releaseDts: this.releaseDts,
    // plot: this.plot,
    // movieId: this.movieId,
  },
};
</script>
<style>
.form > * {
  text-align: center;
}
li > * {
  display: block;
}
.poster {
  margin-bottom: 40px;
}
b,
span {
  margin-bottom: 20px;
}
</style>
