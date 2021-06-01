<template>
  <div :class="`detail__inr ${mType}`">
    <div class="detail__hero__wrap" v-if="detailDB">
      <div
        class="hero__img"
        :style="{
          backgroundImage: `url(${checkImages(detailDB.backdrop_path)})`,
        }"
      >
        <div class="hero__cover"></div>
      </div>
      <div class="hero__content">
        <div
          class="detail__img"
          :style="{
            backgroundImage: `url(${checkImages(detailDB.poster_path)})`,
          }"
          ref="detailImgEl"
        ></div>
        <div class="hero__info__box">
          <h2 class="detail__title">
            {{ detailDB.title || detailDB.name }}
            <span class="years">
              ({{
                splitReleaseDate(
                  detailDB.release_date || detailDB.first_air_date,
                )
              }})
            </span>
          </h2>
          <strong class="detail__title__en">
            {{ detailDB.original_title || detailDB.original_name }}
          </strong>
          <ul class="genres">
            <li v-for="{ name, id } in detailDB.genres" :key="`g-${id}`">
              • {{ name }}
            </li>
          </ul>
          <div class="director">
            <strong>감독</strong>
            <p>감독이름</p>
          </div>
          <div class="overview">
            <strong>줄거리</strong>
            <p v-if="detailDB.overview">{{ detailDB.overview }}</p>
            <p v-else>등록된 줄거리가 없습니다.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="detail__contents">
      <ListForm
        v-if="creditsDB"
        :type="'cast'"
        :listData="splitCast(creditsDB.cast)"
      ></ListForm>
    </div>
    <slot name="tv"></slot>
    <slot name="movie"></slot>
    {{ detailDB }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ListForm from '../common/list/ListForm.vue';
import { checkImages } from '../../utils/imageCheck.js';
import { splitReleaseDate } from '../../utils/filter.js';

export default {
  components: { ListForm },
  props: ['mType'],
  created() {
    if (!this.detailDB && this.mediaInfo) {
      this.getDataAgain();
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  updated() {
    this.handleResize();
  },
  beforeDestroy() {
    window.addEventListener('resize', this.handleResize);
  },
  computed: {
    ...mapState([
      'mediaInfo',
      'detailDB',
      'recommendationsDB',
      'similarDB',
      'keywordsDB',
      'creditsDB',
      'watchProvidersDB',
    ]),
  },
  methods: {
    ...mapActions([
      'FETCH_DETAIL',
      'FETCH_RECOMMENDATIONS',
      'FETCH_SIMILAR',
      'FETCH_KEYWORDS',
      'FETCH_CREDITS',
      'FETCH_WATCH_PROVIDERS',
    ]),
    getDataAgain() {
      if (this.mediaInfo) {
        const { type, id } = this.mediaInfo;

        this.FETCH_DETAIL({ type, id });
        this.FETCH_RECOMMENDATIONS({ type, id });
        this.FETCH_SIMILAR({ type, id });
        this.FETCH_KEYWORDS({ type, id });
        this.FETCH_CREDITS({ type, id });
        this.FETCH_WATCH_PROVIDERS({ type, id });
      }
    },
    checkImages(path) {
      return checkImages(path);
    },
    handleResize() {
      console.log(this.$refs.detailImgEl);
      if (!this.$refs.detailImgEl) return false;

      let { clientWidth, style } = this.$refs.detailImgEl;

      return (style.height = `${Math.floor(clientWidth / 3) * 4}px`);
    },
    splitReleaseDate(date) {
      return splitReleaseDate(date);
    },
    splitCast(cast) {
      return cast.slice(0, 20);
    },
  },
};
</script>

<style lang="scss">
@import './detailStyle.scss';
</style>
