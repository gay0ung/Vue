<template>
  <div class="movie-detail-form">
    <div class="detail-main">
      <img :src="checkPoster(movieDT.poster_path)" alt="" />
      <h3 class="md-title-ko">{{ movieDT.title }}</h3>
      <span class="years">({{ checkYears(movieDT.release_date) }})</span>
      <span v-show="movieDT.adult === true">19</span>
      <strong class="md-title-en">{{ checkTilte(movieDT) }}</strong>
    </div>
    {{ checkTilte(movieDT) }}
    {{ movieDT }}
  </div>
</template>
movieDB.results
<script>
import { checkPoster } from '../utils/mList';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['movieDT']),
  },
  methods: {
    checkPoster(path) {
      return checkPoster(path);
    },
    checkYears(date) {
      return date.substring(0, 4);
    },
    checkTilte(data) {
      return data.title === data.original_title ? null : data.original_title;
    },
  },
};
</script>

<style></style>
