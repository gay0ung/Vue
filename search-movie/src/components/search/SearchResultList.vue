<template>
  <div class="movie-detail-form">
    <div class="detail-main">
      <p class="message">{{ checkingResult(searchDB.length) }}</p>
      <ul class="list-wrap">
        <li
          v-for="(movie, idx) in searchDB"
          :key="idx"
          @click.prevent="clickDetail(movie.id, movie.media_type)"
        >
          <img :src="checkPoster(movie.poster_path)" />
          <span v-show="movie.adult === true">19</span>
        </li>
      </ul>
    </div>

    {{ searchDB }}
  </div>
</template>
movieDB.results
<script>
import { checkPoster } from '@/utils/mList';
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    // this.checkingResult;
  },
  computed: {
    ...mapState(['searchDB']),
  },
  methods: {
    ...mapActions(['FETCH_DETAILE']),
    checkingResult(len) {
      console.log(len);
    },
    checkPoster(path) {
      return checkPoster(path);
    },
    checkYears(date) {
      return date.substring(0, 4);
    },
    checkTilte(data) {
      return data.title === data.original_title ? null : data.original_title;
    },
    clickDetail(id, type) {
      this.FETCH_DETAILE({ type: type, id: id });
      this.$router.push('/sDetail');
    },
  },
};
</script>

<style></style>
