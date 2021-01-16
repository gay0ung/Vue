<template>
  <div class="movie-detail-form">
    <div class="detail-main">
      <p class="message">검색결과 {{ searchDB.length }}</p>
      <div class="list-wrap">
        <!-- 사람,드라마, 영화 순으로 정리 하기 -->
        <div class="s-person" v-show="arrangingData().person.length !== 0">
          사람
          <ListForm />
        </div>
        <div class="s-movie" v-show="arrangingData().movie.length !== 0">
          영화
          <ListForm />
        </div>
        <div class="s-tv" v-show="arrangingData().tv.length !== 0">
          tv<ListForm />
        </div>
      </div>
    </div>
    <!-- {{ arrangingData() }} -->
    <!-- {{ searchDB }} -->
  </div>
</template>
movieDB.results
<script>
import { checkPoster } from '@/utils/mList';
import { mapState, mapActions } from 'vuex';
import ListForm from '@/components/search/ListForm';

export default {
  data() {
    return {};
  },
  created() {
    // this.checkingResult;
    // this.arrangingData();
  },
  components: {
    ListForm,
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
      console.log(arranged.tv.length);
      return arranged;
    },
  },
};
</script>

<style></style>
