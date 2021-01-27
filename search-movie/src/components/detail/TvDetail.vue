<template>
  <div class="detail tv" v-if="detailData !== []">
    <!-- 주요 정보 -->
    <div
      class="hero-img"
      :style="{
        backgroundImage: `url(${checkBackDrop(detailData.backdrop_path)}`,
      }"
    ></div>
    <div class="main-info">
      <div class="poster">
        <img :src="checkPoster(detailData)" alt="" width="100%" />
      </div>
      <div class="contents">
        <h2 class="title">
          {{ detailData.name }}
          <span>({{ checkYears(detailData.first_air_date) }})</span>
        </h2>
        <strong class="title en">
          {{ detailData.original_name }}
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
        <div class="director">
          <strong>감독</strong>
        </div>
      </div>
    </div>
    <!-- 출연진 정보 -->
    <div class="cast">
      <div>
        <h3>시리즈 출연진</h3>
        <ListForm
          :cast="credits.cast"
          :calWidth="calculatedSlideWidth(credits.cast.length)"
        />
      </div>
    </div>

    <!-- 현재시리즈 & 전체 시리즈 -->
    <div class="seasons-wrap">
      <h3>현재 시즌</h3>
      <div class="last_episode_to_air">
        <div class="poster">
          poster가 보여질 곳
          <!--  detailData.last_episode_to_air. -->
        </div>
        <ul>
          <li>
            <strong
              >시즌 {{ detailData.last_episode_to_air.season_number }}</strong
            >
          </li>
        </ul>
      </div>
      <div class="all-seasons">
        <h4>전체 시리즈</h4>
        <ListForm
          :seasons="detailData.seasons"
          :calWidth="calculatedSlideWidth(detailData.seasons.length)"
        />
      </div>
    </div>

    <!-- 추천 목록 -->
    <div class="similar-wrap">
      <div class="similer tv">
        <h3>비슷한 TV프로그램</h3>
        <ListForm
          :similar="similar"
          :calWidth="calculatedSlideWidth(similar.length)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { checkPoster, checkBackDrop } from '@/utils/posterCheck.js';
import { checkTilte, checkOverview } from '@/utils/filters.js';
import { calculatedSlideWidth } from '@/utils/style.js';
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
    calculatedSlideWidth(length) {
      return calculatedSlideWidth(length);
    },
    getSimilerMedia(id, keyword) {
      const type = this.$route.query.path;

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
  },
};
</script>

<style></style>
