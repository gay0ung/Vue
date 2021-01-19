<template>
  <div class="search-result-form">
    <div class="result-wrap">
      <!-- <p class="message">검색결과 {{ searchDB.length }}</p> -->

      <template v-if="path.path === 'search'">
        <!-- 사람,드라마, 영화 순으로 정리 하기 -->
        <div class="s-person" v-if="arrangingData().person.length !== 0">
          <strong>사람</strong>
          <ListForm
            :searchData="arrangingData().person"
            :slideWidth="slideWidth(arrangingData().person.length)"
          />
        </div>
        <div class="s-movie" v-if="arrangingData().movie.length !== 0">
          <strong>영화</strong>
          <ListForm
            :searchData="arrangingData().movie"
            :slideWidth="slideWidth(arrangingData().movie.length)"
          />
        </div>
        <div class="s-tv" v-if="arrangingData().tv.length !== 0">
          <strong>TV 프로그램</strong>
          <ListForm
            :searchData="arrangingData().tv"
            :slideWidth="slideWidth(arrangingData().tv.length)"
          />
        </div>
      </template>

      <!-- keyword로 검색했을 경우 -->
      <template v-else>
        <div
          class="s-movie"
          v-if="kMediaList.length !== 0 && path.type === 'movie'"
        >
          <strong
            ><sapn>{{ path.name }}</sapn> 검색 결과</strong
          >
          <ListForm
            :searchData="kMediaList"
            :slideWidth="slideWidth(kMediaList.length)"
          />
        </div>
        <!-- <div class="s-tv" v-else-if="arrangingData().tv.length !== 0">
          <strong>TV 프로그램</strong>
          <ListForm
            :searchData="arrangingData().tv"
            :slideWidth="slideWidth(arrangingData().tv.length)"
          />
        </div> -->
      </template>
    </div>
    {{ kMediaList }}
  </div>
</template>
movieDB.results
<script>
import { checkPoster } from '@/utils/posterCheck.js';
import { checkYears, checkTilte } from '@/utils/filters.js';
import { slideWidth } from '@/utils/style.js';
import { mapState, mapActions } from 'vuex';
import ListForm from '@/components/search/ListForm';

export default {
  data() {
    return {
      path: this.$route.query,
    };
  },
  created() {
    // <i class="fas fa-star"></i> 즐겨찾기 했을 경우
  },
  components: {
    ListForm,
  },
  computed: {
    ...mapState(['searchDB', 'kMediaList', 'kMediaList']),
  },
  methods: {
    ...mapActions(['FETCH_DETAILE']),
    checkPoster(path) {
      return checkPoster(path);
    },
    checkYears(date) {
      return checkYears(date);
    },
    checkTilte(data) {
      return checkTilte(data);
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
    // 검색된 갯수에 따른 ul태그의 넓이 css
    slideWidth(length) {
      return slideWidth(length);
    },

    keywordsResult() {},
  },
};
</script>
