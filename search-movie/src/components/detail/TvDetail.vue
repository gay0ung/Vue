<template>
  <div class="detail tv" v-if="detailData !== []">
    <div
      class="hero-img"
      :style="{
        backgroundImage: `url(${checkBackDrop(detailData.backdrop_path)})`,
      }"
    ></div>

    <!-- 주요 정보 -->
    <div class="main-info">
      <div
        class="poster"
        :style="{
          backgroundImage: `url(${checkPoster(detailData.poster_path)})`,
        }"
      ></div>
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
      <div class="list">
        <h3>시리즈 출연진</h3>
        <ListForm :cast="credits.cast" />
      </div>
    </div>

    <!-- 현재시리즈 & 전체 시리즈 -->
    <div class="seasons-wrap">
      <div class="last_episode_to_air">
        <h3>{{ detailData.in_production ? '현재 시즌' : '지난 시즌' }}</h3>
        <div class="last-s-wrap">
          <div
            class="poster"
            :style="{
              backgroundImage: `url(${checkPoster(lastSesons.poster_path)})`,
            }"
          ></div>
          <ul>
            <li>
              <strong>{{ lastSesons.name }}</strong>
              <span>{{
                `${lastAirDate.year} | ${lastSesons.episode_count} 화`
              }}</span>
              <p>
                {{
                  `${detailData.name}의 ${lastSesons.season_number}번째 시즌이 ${lastAirDate.year}년 ${lastAirDate.month}월 ${lastAirDate.day}일에 방영되었습니다.`
                }}
              </p>
              <button>에피소드</button>
            </li>
          </ul>
        </div>
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
      <div class="list similer tv">
        <h3>비슷한 TV프로그램</h3>
        <ListForm :similar="similar" />
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

// tv 시리즈 중에 in_production : false이면  seasons에서 마지막 시리즈 poster_path와 name을 가져오고 , last_air_date도 가져온다.

// tv 시리즈 중에 in_rpoduction: true이면 last_air_date, seasons에서 마지막 시리즈 poster_path와 name을 가져온다.
export default {
  props: ['detailData'],
  components: {
    ListForm,
  },
  data() {
    return {
      lastSesons: {},
      lastAirDate: this.splitDate,
    };
  },
  mounted() {
    this.getLastSeasons();
    this.splitDate();
  },
  beforeUpdate() {
    this.getLastSeasons();
    this.splitDate();
  },
  computed: {
    ...mapState(['recommend', 'keywords', 'credits', 'similar']),
  },
  methods: {
    ...mapActions(['FETCH_KEYWORDS_MEDIA_LIST']),
    // checking image
    checkPoster(path) {
      return checkPoster(path);
    },
    checkBackDrop(path) {
      return checkBackDrop(path);
    },

    // checking contnets
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

    getLastSeasons() {
      let seasons = this.detailData.seasons;

      this.lastSesons = seasons.slice(-1)[0];
    },
    splitDate() {
      let date = this.lastSesons.air_date;
      const splitStr = date.split('-');
      let airDate = {
        year: splitStr[0],
        month: splitStr[1],
        day: splitStr[2],
      };

      this.lastAirDate = airDate;
    },

    // 선택한 미디어와 비슷한 장르 추천해주기
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
