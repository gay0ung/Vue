<template>
  <div :class="`detail__inr ${mType}`">
    <div class="detail__hero__wrap">
      <div class="hero__img">
        <div class="hero__cover"></div>
      </div>
      <div class="hero__content">
        <div class="detail__img"></div>
        <div class="hero__info__box">
          <h2 class="detail__title">
            title || name
            <span class="years">release_date || first_air_date</span>
          </h2>
          <strong class="detail__title__en">
            original_title || original_name
          </strong>
          <ul class="genres">
            <li>
              <span>• genre.name</span>
            </li>
          </ul>
          <div class="overview">
            <strong>줄거리</strong>
            <p>overview</p>
            <!-- TODO: 줄거리 없을 경우 -->
          </div>
          <div class="director">
            <strong>감독</strong>
            <p>감독이름</p>
          </div>
        </div>
        {{ mediaInfo }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  props: ['mType'],
  created() {
    if (!this.detailDB && this.mediaInfo) {
      this.getDataAgain();
    }
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
        // console.log(typeof this.mediaInfo);

        this.FETCH_DETAIL({ type, id });
        this.FETCH_RECOMMENDATIONS({ type, id });
        this.FETCH_SIMILAR({ type, id });
        this.FETCH_KEYWORDS({ type, id });
        this.FETCH_CREDITS({ type, id });
        this.FETCH_WATCH_PROVIDERS({ type, id });
      }
    },
  },
};
</script>

<style></style>
