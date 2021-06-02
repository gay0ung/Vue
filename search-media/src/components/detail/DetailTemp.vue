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
          <template v-if="watchProvidersDB">
            <div class="watch__provider">
              <div v-for="({ id, txt }, i) in providerData" :key="i">
                <strong>{{ txt }}</strong>
                <ul
                  v-if="watchProvidersDB[id] && watchProvidersDB[id].length > 0"
                >
                  <li
                    ref="logoEl"
                    v-for="(item, i) in watchProvidersDB[id]"
                    :key="i"
                    :style="{
                      backgroundImage: `url(${checkImages(item.logo_path)})`,
                    }"
                  ></li>
                </ul>
                <p v-if="watchProvidersDB === undefined">
                  {{ txt }}이 없습니다.
                </p>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="watch__provider">
              <div v-for="({ txt }, i) in providerData" :key="i">
                <strong>{{ txt }}</strong>
                <p>{{ txt }}이 없습니다.</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="detail__contents">
      <ListForm
        v-if="creditsDB"
        :mType="'person'"
        :type="'cast'"
        :listData="splitCast(creditsDB.cast)"
      >
        <template #default="{item}">
          <b class="list__title"> {{ item.character }}</b>
          <span>
            {{ item.title || item.name }}
          </span>
        </template>
      </ListForm>
      <slot name="tv"></slot>
      <div class="detail__keywords">
        <h3>키워드</h3>
        <ul class="keywords" v-if="keywordsDB && keywordsDB.length > 0">
          <li
            class="keyword"
            v-for="{ id, name } in keywordsDB"
            :key="`k-${id}`"
            @click.prevent="handleKeyword({ id, name })"
          >
            # {{ name }}
          </li>
        </ul>
        <p v-else>등록된 키워드가 없습니다.</p>
      </div>

      <ListForm
        v-if="similarDB && similarDB.length > 0"
        :mType="mType"
        :type="'similar'"
        :listData="similarDB"
      >
        <template #default="{item}">
          <b class="list__title">
            {{ item.title || item.name }}
          </b>
        </template>
      </ListForm>

      <ListForm
        v-if="recommendationsDB"
        :mType="mType"
        :type="'recommend'"
        :listData="recommendationsDB.slice(0, 20)"
      >
        <template #default="{item}">
          <b class="list__title">
            {{ item.title || item.name }}
          </b>
        </template>
      </ListForm>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import ListForm from '../common/list/ListForm.vue';
import { checkImages } from '../../utils/imageCheck.js';
import { splitReleaseDate } from '../../utils/filter.js';

export default {
  components: { ListForm },
  props: ['mType'],
  data() {
    return {
      providerData: [
        { id: 'flatrate', txt: '시청 가능한 플랫폼' },
        { id: 'buy', txt: '구매 가능한 플랫폼' },
      ],
    };
  },
  created() {
    if (!this.detailDB && this.mediaInfo) {
      this.getDataAgain();
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  updated() {
    if (!this.detailDB && this.mediaInfo) {
      this.getDataAgain();
    }
    this.handleResize();
    this.providerLogoStyle();
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
    ...mapMutations(['SET_KEYWORD_INFO']),
    ...mapActions([
      'FETCH_DETAIL',
      'FETCH_RECOMMENDATIONS',
      'FETCH_SIMILAR',
      'FETCH_KEYWORDS',
      'FETCH_MEDIA_OF_KEYWORD',
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
    setWathchProvider() {
      if (this.watchProvidersDB) console.log(this.watchProvidersDB);
    },
    checkImages(path) {
      return checkImages(path);
    },
    handleResize() {
      if (!this.$refs.detailImgEl) return false;
      this.providerLogoStyle();
      let { clientWidth, style } = this.$refs.detailImgEl;

      return (style.height = `${Math.floor(clientWidth / 9) * 14}px`);
    },
    splitReleaseDate(date) {
      return splitReleaseDate(date);
    },
    splitCast(cast) {
      return cast.slice(0, 20);
    },
    providerLogoStyle() {
      if (this && this.$refs.logoEl) {
        const logoEl = this.$refs.logoEl;
        const logoHeight = logoEl[0].clientHeight;
        console.dir();
        logoEl.map(el => {
          el.style.width = `${logoHeight}px`;
        });
      }
    },
    handleKeyword({ id, name }) {
      this.SET_KEYWORD_INFO({ id, name });
      this.FETCH_MEDIA_OF_KEYWORD({ id });

      this.$cookies.set('k-info', { id, name });
      this.$router.push({ name: 'search', query: { state: 'keyword' } });
    },
  },
};
</script>

<style lang="scss">
@import './detailStyle.scss';
</style>
