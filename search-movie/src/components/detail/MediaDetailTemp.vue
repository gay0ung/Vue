<template>
  <div class="detail-info" :class="className">
    <!-- hero-img -->
    <div
      class="hero-img"
      :style="{
        backgroundImage: `url(${chekcImages(detail.backdrop_path)}`,
      }"
    ></div>

    <div class="info-wrap">
      <!-- 주요 정보 -->
      <div class="main-info d-list">
        <div
          class="poster"
          :style="{
            backgroundImage: `url(${chekcImages(detail.poster_path)})`,
          }"
        ></div>
        <div class="contents">
          <h2 class="title">
            {{ mtype === 'movie' ? detail.title : detail.name }}
            <span v-if="detail.release_date"
              >({{
                mtype === 'movie'
                  ? checkYears(detail.release_date)
                  : checkYears(detail.first_air_date)
              }})</span
            >
          </h2>
          <strong class="title en">
            {{
              mtype === 'movie' ? detail.original_title : detail.original_name
            }}
          </strong>
          <ul class="genres">
            <li v-for="genre in detail.genres" :key="genre.id">
              <span>• {{ genre.name }}</span>
            </li>
          </ul>
          <div class="overview">
            <strong>줄거리</strong>
            <template v-if="detail.overview.length > 1">
              <p v-if="detail.overview">{{ checkOverview(detail.overview) }}</p>
            </template>
            <template v-else>
              <p>줄거리가 없습니다.</p>
            </template>
          </div>
          <div class="director">
            <template v-if="mtype === 'movie'">
              <strong>감독</strong>
              <p>{{ getDirector(mtype) }}</p>
            </template>
            <template v-else>
              <ul>
                <li>
                  <strong>극본</strong>
                  <p>{{ getDirector(mtype) }}</p>
                </li>
                <li>
                  <strong>연출</strong>
                  <p>{{ getDirector(mtype) }}</p>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>

      <!-- 출연진 정보 -->
      <div class="cast d-list">
        <div class="list">
          <h3>
            {{ mtype === 'movie' ? '출연진' : '시리즈 출연진' }}
          </h3>
          <ListForm :cast="splitTheActors()" />
        </div>
      </div>

      <!-- tv프로그램인 경우 현재시리즈 & 전체 시리즈 -->
      <template v-if="mtype === 'tv'">
        <TvSeasonsList />
      </template>

      <!-- 추천목록 -->
      <div class="similer d-list">
        <div class="list">
          <h3>비슷한 {{ mtype === 'movie' ? '영화' : 'TV 프로그램' }}</h3>
          <template v-if="similar.length > 0">
            <ListForm :similar="similar" />
          </template>
          <template v-else>
            <p>
              비슷한
              {{ mtype === 'movie' ? '영화' : 'TV 프로그램' }}가 없습니다.
            </p>
          </template>
        </div>
      </div>

      <!-- 영화인 경우 키워드를 보여준다 -->
      <template v-if="mtype === 'movie'">
        <MovieKeywordList />
      </template>
    </div>
  </div>
</template>

<script>
import { chekcImages } from '@/utils/posterCheck.js';
import { checkTilte } from '@/utils/filters.js';
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
  props: ['mtype'],
  computed: {
    ...mapState(['detail', 'recommend', 'credits', 'similar', 'mediaInfo']),
    className() {
      return this.mediaInfo.type;
    },
  },
  methods: {
    // image path
    chekcImages(path) {
      // if (path === undefined) return;
      return chekcImages(path);
    },

    // check contetns
    checkTilte(data) {
      return checkTilte(data);
    },
    checkOverview(text) {
      return text === '' ? '등록된 줄거리가 없습니다.' : text;
    },
    checkYears(date) {
      return date.substr(0, 4);
    },

    // 출연진목록 계산
    splitTheActors() {
      const { cast } = this.credits;

      return cast.filter((el, i) => i < 10);
    },

    getDirector(type) {
      if (this.credits.length < 0 || this.credits === undefined) return;
      const { crew } = this.credits;
      if (type === 'movie') {
        const { name, original_name } = crew.filter(
          el => el.job === 'Director',
        )[0];

        return name || original_name;
      } else {
        // crew.map(el => {
        //   // console.log(el.department);
        // });
        // let crews = [];
        // crew.filter(el => {
        //   // console.log(el.department);
        //   // if (
        //   //   el.department === 'Writing' ||
        //   //   el.department === 'Production' ||
        //   //   el.department === 'Production'
        //   // ) {
        //   //   crews.push(el);
        //   // }
        //   // el.department === 'Writing' && el.department === 'Production'
        // });
      }
    },
  },
};
</script>

<style></style>
