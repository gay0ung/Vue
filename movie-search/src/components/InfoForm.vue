<template>
  <div class="wrap info">
    <form class="" v-if="movieList" @submit.prevent="submitForm">
      <ul class="movie-container">
        <li class="movie-list" v-for="(item, index) in movieList" :key="index">
          <a href="" @click.prevent="movedDetail">
            <img
              class="poster"
              v-if="item.posters"
              :src="item.posters.split('|')[0]"
            />
            <!-- 포스터가 없을경우 이미지 집어 넣기 -->
            <img
              v-else
              class="noImages"
              src="../images/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif"
            />
            <div class="info-wrap">
              <p class="plot">{{ item.plots.plot[0].plotText }}</p>
              <span class="more-btn">detail > </span>
            </div>
          </a>
          <!-- v-if="item.posters" -->
          <div class="txt-box">
            <strong class="title-ko">{{ replaceTitle(item.title) }}</strong>
            <span class="title-en">{{ item.titleEng }}</span>
            <span class="directorNm"
              >director : {{ directorNm(item.directors.director[0]) }}</span
            >
          </div>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputQuery: this.$store.state.inputQuery,
      options: this.$store.state.option,
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
    submitForm() {
      if (this.inputQuery) {
        this.$store.commit('SET_TITLE', this.inputQuery);
      }
    },
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
    movedDetail() {
      this.$router.push('/mDetail');
    },
  },
};
</script>
<style></style>
