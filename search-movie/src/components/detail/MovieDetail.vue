<template>
  <div class="detail movie" v-if="detailData !== []">
    <h1>영화보여지는곳</h1>

    <!-- 주요 정보 -->
    <div class="main-info">
      <div
        class="hero-img"
        :style="{
          backgroundImage: checkBackDrop(detailData.backdrop_path),
        }"
      >
        back drop image가 보여질 것이다.
      </div>
      <div class="poster">
        <img :src="checkPoster(detailData)" alt="" width="100%" />
      </div>
      <div class="contents">
        <h2 class="title">
          {{ detailData.title }}
          <span>({{ detailData.release_date.substr(0, 4) }})</span>
        </h2>
        <strong class="title en">
          {{ checkTilte(detailData.original_title) }}
        </strong>
        <ul class="genres">
          <li v-for="genre in detailData.genres" :key="genre.id">
            <span>• {{ genre.name }}</span>
          </li>
        </ul>
        <div class="overview">
          <strong>줄거리</strong>
          <p>{{ checkOverview(detailData.overview) }}</p>
        </div>
      </div>
    </div>
    <!-- 출연진 정보 -->
    <div class="cast">
      <div>
        <h3>감독</h3>
      </div>
      <div>
        <h3>출연진</h3>
        <ListForm
          :cast="splitTheActors(credits.cast)"
          :slideWidth="`calc(100%*2)`"
        />
      </div>
    </div>
    <!-- 추천목록 -->
    <div class="similar-wrap">
      <div class="similer movie">
        <h3>비슷한 영화</h3>
        <ListForm :similar="similar" :slideWidth="slideWidth(similar.length)" />
      </div>
      <div class="keyword">
        <h3>키워드</h3>
        <ul>
          <li v-for="keyword in keywords" :key="keyword.id">
            <button
              type="button"
              @click.prevent="getSimilerMedia(keyword.id, keyword.name)"
            >
              #{{ keyword.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { checkPoster, checkBackDrop } from '@/utils/posterCheck.js';
import { checkTilte, checkOverview, splitTheActors } from '@/utils/filters.js';
import { slideWidth } from '@/utils/style.js';
import ListForm from '@/components/search/ListForm';
import { mapActions, mapState } from 'vuex';

export default {
  props: ['detailData'],
  components: {
    ListForm,
  },
  created() {},
  computed: {
    ...mapState(['recommend', 'keywords', 'credits', 'similar']),
  },
  methods: {
    ...mapActions(['FETCH_KEYWORDS_MEDIA_LIST']),
    checkPoster(path) {
      return checkPoster(path);
    },
    checkBackDrop(path) {
      return checkBackDrop(path);
    },

    checkTilte(data) {
      return checkTilte(data);
    },
    checkOverview(text) {
      return checkOverview(text);
    },
    checkYears(date) {
      return date.substr(0, 4);
    },
    slideWidth(length) {
      return slideWidth(length);
    },
    getSimilerMedia(id, keyword) {
      const type = this.$route.query.path;
      console.log(id);
      console.log(type);

      this.FETCH_KEYWORDS_MEDIA_LIST({
        id: id,
        type: type === 'movie' ? 'movies' : type,
      });

      this.$router.push({
        name: 'sList',
        query: {
          path: 'keyword',
          name: keyword,
          type,
        },
      });
    },
    // 출연진목록 계산
    splitTheActors(data) {
      return splitTheActors(data);
    },
  },
};
</script>

<style></style>
