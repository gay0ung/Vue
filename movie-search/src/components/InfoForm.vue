<template>
  <div class="wrap info">
    <form class="" v-if="movieList" @submit.prevent="submitForm">
      <ul class="movie-container">
        <li class="movie-list" v-for="(item, index) in movieList" :key="index">
          <a @click.prevent="movedDetail">
            <img
              class="poster"
              v-if="item.posters"
              :src="isPoster(item.posters)"
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
import {
  replaceName,
  repRlsDateReplace,
  splitPoster,
  specialStrRemove,
} from '@utils/filters.js';

//import { saveItemToCookie, saveDirectorToCookie } from '@/utils/cookies.js';
export default {
  data() {
    return {
      getvalue: this.$store.state.getvalue,
      seleted: this.$store.state.seleted,
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    const listCount = 'listCount=100&';
    this.$store.dispatch(
      'FETCH_LIST',
      `${listCount}${this.seleted}=${this.getvalue}`,
    );
  },
  methods: {
    replaceTitle(name) {
      return replaceName(name);
    },
    isPoster(posters) {
      return splitPoster(posters);
    },
    spcCharRemove(list) {
      return specialStrRemove(list);
    },

    // 해당 영화를 클릭했을때 해당 관련상세페이지로 간다.
    submitForm(item) {
      const keyword = this.spcCharRemove(item.keyword);
      const genre = this.spcCharRemove(item.genre);

      this.$store.commit('SET_DEITEM', item); // 클릭한 영화 배열 저장.
      let KEYWORD = 'keyword';
      if (KEYWORD) {
        this.$store.commit('SET_KEYWORD', `${KEYWORD}=${keyword}`);
      } else {
        let GENRE = 'genre';
        this.$store.commit(`SET_KEYWORD`, `${GENRE} = ${genre}`);
      }
    },
    // 개봉날짜
    repRlsDateReplace(date) {
      return repRlsDateReplace(date);
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
