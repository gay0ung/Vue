<template>
  <div class="movie-list-form">
    <p class="total-result">
      '{{ inputValue }}' 검색결과 : {{ movieDB.total_results }}
    </p>
    <ul class="movieList">
      <li class="movie" v-for="(movie, idx) in movieDB.results" :key="idx">
        <a @click.prevent="detailePage(movie.title)">
          <img :src="checkPoster(movie.poster_path)" alt="영화 포스터" />
          <p class="s-summary">{{ movie.overview }}</p>
          <span class="director">감독</span>
        </a>
        <div class="movie-info-box">
          <h4 class="title-ko">{{ movie.title }}</h4>
          <span class="adult" v-show="movie.adult === true">19세</span>
          <span class="title-en">{{ movie.original_title }}</span>
          <span class="date">{{ movie.release_date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { checkPoster } from '../utils/mList';

export default {
  computed: {
    ...mapState(['inputValue', 'movieDB']),
  },
  methods: {
    ...mapActions(['FETCH_DETAILE']),
    detailePage(title) {
      this.FETCH_DETAILE(title);
      this.$router.push('/mDetail');
    },
    checkPoster(path) {
      return checkPoster(path);
    },
  },
};
</script>

<style></style>
