<template>
  <div class="detail movie">
    <h1>영화보여지는곳</h1>

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
        poster가 보여질 것이다.
      </div>
      <div class="contents">
        <h2 class="title">
          {{ detailData.title }}
          <span>({{ checkYears(detailData.release_date) }})</span>
        </h2>
        <strong class="title en">
          {{ checkTilte(detailData.original_title) }}
        </strong>
        <ul class="genres">
          <li v-for="genre in detailData.genres" :key="genre.id">
            <span>#{{ genre.name }}</span>
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
        <ul>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="recommendations">
      <div class="similer-movie">
        <h3>비슷한 영화</h3>
        <ListForm :recommend="recommend" />
      </div>
      <div class="keyword">
        <h3>키워드</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { checkPoster, checkBackDrop } from '@/utils/posterCheck.js';
import { checkTilte, checkOverview } from '@/utils/filters.js';

import ListForm from '@/components/search/ListForm';
import { mapState } from 'vuex';

export default {
  // https://developers.themoviedb.org/3/movies/get-similar-movies
  // 클릭했을경우 비슷한 영화 추천해주는
  props: ['detailData'],
  components: {
    ListForm,
  },
  computed: {
    ...mapState(['recommend']),
  },
  methods: {
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
  },
};
</script>

<style></style>
