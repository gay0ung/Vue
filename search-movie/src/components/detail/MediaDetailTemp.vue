<template>
  <div class="detail-info" :class="className">
    <!-- hero-img -->
    <div
      class="hero-img d-list"
      :style="{
        backgroundImage: `url(${checkBackDrop(detail.backdrop_path)}`,
      }"
    ></div>

    <!-- 주요 정보 -->
    <div class="main-info d-list">
      <div
        class="poster"
        :style="{
          backgroundImage: `url(${checkPoster(detail.poster_path)})`,
        }"
      ></div>
      <div class="contents">
        <h2 class="title">
          {{ media_info.type === 'movie' ? detail.title : detail.name }}
          <span v-if="detail.release_date"
            >({{
              media_info.type === 'movie'
                ? checkYears(detail.release_date)
                : checkYears(detail.first_air_date)
            }})</span
          >
        </h2>
        <strong class="title en">
          {{
            media_info.type === 'movie'
              ? detail.original_title
              : detail.original_name
          }}
        </strong>
        <ul class="genres">
          <li v-for="genre in detail.genres" :key="genre.id">
            <span>• {{ genre.name }}</span>
          </li>
        </ul>
        <div class="overview">
          <strong>줄거리</strong>
          <p v-if="detail.overview">{{ checkOverview(detail.overview) }}</p>
        </div>
        <div class="director">
          <strong>감독</strong>
        </div>
      </div>
    </div>

    <!-- 출연진 정보 -->
    <div class="cast d-list">
      <div class="list">
        <h3>{{ media_info.type === 'movie' ? '출연진' : '시리즈 출연진' }}</h3>
        <ListForm :cast="splitTheActors(credits.cast)" />
      </div>
    </div>

    <!-- tv프로그램인 경우 현재시리즈 & 전체 시리즈 -->
    <template v-if="media_info.type === 'tv'">
      <TvSeasonsList />
    </template>

    <!-- 추천목록 -->
    <div class="similar-wrap d-list">
      <div class="list listsimiler">
        <h3>
          비슷한 {{ media_info.type === 'movie' ? '영화' : 'TV 프로그램' }}
        </h3>
        <ListForm :similar="similar" />
      </div>

      <!-- 영화인 경우 키워드를 보여준다 -->
      <template v-if="media_info.type === 'movie'">
        <MovieKeywordList />
      </template>
    </div>
  </div>
</template>

<script>
import { checkPoster, checkBackDrop } from '@/utils/posterCheck.js';
import { checkTilte, checkOverview, splitTheActors } from '@/utils/filters.js';
import ListForm from '@/components/search/ListForm';
import TvSeasonsList from '@/components/detail/TvSeasonsList.vue';
import MovieKeywordList from '@/components/detail/MovieKeywordList.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ListForm,
    TvSeasonsList,
    MovieKeywordList,
  },
  data() {
    return {
      backDropUrl: '',
    };
  },
  computed: {
    ...mapState(['detail', 'recommend', 'credits', 'similar', 'media_info']),
    className() {
      return this.media_info.type;
    },
  },
  methods: {
    // image path
    checkPoster(path) {
      return checkPoster(path);
    },
    checkBackDrop(path) {
      return checkBackDrop(path);
    },

    // check contetns
    checkTilte(data) {
      return checkTilte(data);
    },
    checkOverview(text) {
      return checkOverview(text);
    },
    checkYears(date) {
      return date.substr(0, 4);
    },

    // 출연진목록 계산
    splitTheActors(data) {
      return splitTheActors(data);
    },
  },
};
</script>

<style></style>
