<template>
  <div class="wrap detail">
    <form>
      <!-- main -->
      <div class="main">
        <form class="main-wrap clear">
          <h5>main</h5>
          <div class="de-poster">
            <img class="poster" :src="movieList.posters.split('|')[0]" />
            <!-- 포스터가 없을경우 이미지 집어 넣기 -->
          </div>
          <div class="detail-box">
            <strong class="title-ko">{{
              replaceTitle(movieList.title)
            }}</strong>

            <span class="title-en">{{ movieList.titleEng }}</span>

            <div class="etc">
              <span class="genre bar">{{ movieList.genre }}</span
              ><span class="date bar">
                {{ repRlsDateReplace(movieList.repRlsDate) }} 개봉
              </span>
              <span class="rating">{{ movieList.runtime }}분</span>
              <i v-if="movieList.rating" class="rating"
                >,{{ movieList.rating }}</i
              >
            </div>

            <div class="director-box">
              <span class="directorNm-ko bar">감독</span>
              <span>{{ directorNm(movieList.directors.director[0]) }}</span>
            </div>

            <span class="directorNm-en">
              {{ movieList.directors.director.directorEnNm }}</span
            >
          </div>
          <p class="de-plot">{{ movieList.plots.plot[0].plotText }}</p>
        </form>

        <!-- stils cut -->
        <form class="stils-cut">
          slide가 들어올 자리
          <div>
            <img :src="movieList.stlls.split('|')[0]" />
          </div>
        </form>

        <!-- staffs & actors -->
        <form class="actors">
          <h5>staffs / actors</h5>
          <div>
            <ul>
              <li v-for="(item, index) in movieList" :key="index">
                {{ item.actor }}
              </li>
            </ul>
          </div>
        </form>
      </div>
    </form>
  </div>
</template>

<script>
// import {
//   replaceTitle,
//   repRlsDateReplace,
//   directorNm,
//   movedDetail,
// } from '@/components/infoForm.vue';

export default {
  data() {
    return {
      inputQuery: '',
      options: this.$store.state.option,
      movieList: this.$store.state.movieList[0],
      actors: this.$store.state.movieList[0].actors,
    };
  },
  computed: {
    // movieList() {
    //   return this.$store.state.movieList;
    // },
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
