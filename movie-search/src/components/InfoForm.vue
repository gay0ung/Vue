<template>
  <form class="form" v-if="movieList">
    <ul class="movie-container">
      <li class="movie-list" v-for="(item, index) in movieList" :key="index">
        <img
          class="poster"
          v-if="item.posters"
          :src="item.posters.split('|')[0]"
        />
        <!-- 포스터가 없을경우 이미지 집어 넣기 -->
        <!-- <img v-else  /> -->
        <div class="info-wrap" v-if="item.posters">
          <p class="plot">줄거리: {{ item.plots.plot[0].plotText }}</p>
          <span>director : {{ directorNm(item.directors.director[0]) }}</span>
          <span class="more-btn">detail > </span>
        </div>
        <div class="txt-box">
          <strong class="title-ko">{{ replaceTitle(item.title) }}</strong>
          <span class="title-en">{{ item.titleEng }}</span>
          <span class="date">{{ repRlsDateReplace(item.repRlsDate) }}</span>
        </div>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputQuery: this.$store.state.inputQuery,
      options: this.$store.state.option,

      // posters: this.$store.state.movieData.posters,
      //title: this.$store.state.movieData.title, // 영화 제목
      //director: this.$store.state.movieData.directorNm, // 감독 이름
      // plot: this.$store.state.movieData.plots.plot[0].plotText, // 줄거리
      //releaseDts: '', // 개봉날짜
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    this.$store.dispatch('FETCH_LIST', `${this.options}=${this.inputQuery}`);
  },
  methods: {
    replaceTitle(title) {
      // 제목에 !HS !HE 나오는 문제를 해결함
      return title.replace(/!HS|\s!HE\s/gi, '');
    },
    // 개봉날짜
    repRlsDateReplace(date) {
      return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    },
    directorNm(director) {
      return director.directorNm.replace(/!HS|\s!HE\s/gi, '');
    },
  },
};
</script>
<style></style>
