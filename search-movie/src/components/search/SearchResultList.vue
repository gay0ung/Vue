<template>
  <div class="movie-detail-form">
    <div class="detail-main">
      <p class="message">검색결과 {{ searchDB.length }}</p>
      <div class="list-wrap"></div>
      <ul class="list-wrap">
        <li
          v-for="(media, idx) in searchDB"
          :key="idx"
          @click.prevent="clickDetail(media.id, media.media_type)"
        >
          <img :src="checkPoster(media.poster_path)" />
          <span v-show="media.adult === true">19</span>
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
  data() {
    return {
      // beforePath: '',
    };
  },
  created() {
    // this.checkingResult;
    this.arrangingData();
  },
  computed: {
    ...mapState(['searchDB', 'beforePath']),
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
    // 영화,tv,인물 끼리 정렬
    arrangingData() {
      const searchDB = this.searchDB;

      let arranged = {
        tv: [],
        movie: [],
        person: [],
      };

      searchDB.map(data => {
        data.media_type === 'tv'
          ? arranged.tv.push(data)
          : data.media_type === 'movie'
          ? arranged.movie.push(data)
          : arranged.person.push(data);
      });

      return arranged;
    },
  },
};
</script>

<style></style>
