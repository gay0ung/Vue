<template>
  <div class="movie-detail-form">
    <div class="detail-main">
      <p class="message">{{ checkingResult(searchDB.length) }}</p>
      <ul class="list-wrap">
        <li
          v-for="(item, idx) in searchDB"
          :key="idx"
          @click.prevent="clickDetail(item.id, item.media_type)"
        >
          <img :src="checkPoster(item.poster_path)" />
          <span v-show="item.adult === true">19</span>
        </li>
      </ul>
      <!-- <img :src="checkPoster(searchDB.poster_path)" alt="" />
      <h3 class="md-title-ko">{{ searchDB.title }}</h3>
      <span class="years">({{ checkYears(searchDB.release_date) }})</span>
    
      <strong class="md-title-en">{{ checkTilte(searchDB) }}</strong> -->
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
