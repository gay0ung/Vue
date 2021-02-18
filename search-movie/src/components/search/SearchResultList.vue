<template>
  <div class="search-result-page">
    <div class="wrapper result">
      <template v-if="query.path === 'search'">
        <!-- 인물 -->
        <div class="list s-person" v-if="arrangingData().person.length !== 0">
          <strong
            >사람 <span>({{ arrangingData().person.length }})</span></strong
          >
          <ListForm :searchData="arrangingData().person" />
        </div>
        <!-- 영화 -->
        <div class="list s-movie" v-if="arrangingData().movie.length !== 0">
          <strong
            >영화 <span>({{ arrangingData().movie.length }})</span></strong
          >
          <ListForm :searchData="arrangingData().movie" />
        </div>
        <!-- tv -->
        <div class="list s-tv" v-if="arrangingData().tv.length !== 0">
          <strong
            >TV 프로그램 <span>({{ arrangingData().tv.length }})</span></strong
          >
          <ListForm :searchData="arrangingData().tv" />
        </div>
      </template>

      <!-- keyword로 검색했을 경우 -->
      <template v-else-if="query.path === 'keyword'">
        <div
          class="list s-movie"
          v-if="kMediaList.length !== 0 && mediaInfo.type === 'movie'"
        >
          <strong>
            <span>'{{ query.name }}'</span> 검색 결과 ({{
              kMediaList.length
            }})</strong
          >
          <ListForm :keywordData="kMediaList" />
        </div>
      </template>
    </div>
  </div>
</template>
movieDB.results
<script>
import { mapState, mapActions } from 'vuex';
import ListForm from '@/components/search/ListForm';

export default {
  data() {
    return {
      query: this.$route.query,
    };
  },
  components: {
    ListForm,
  },
  computed: {
    ...mapState(['searchDB', 'kMediaList', 'kMediaList', 'mediaInfo']),
  },
  methods: {
    ...mapActions(['FETCH_DETAILE']),
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
