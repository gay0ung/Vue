<template>
  <div :class="`list__wrap ${type}`">
    <h3 class="list__wrap__title">{{ changeKO(type) }}</h3>
    <div class="list__box">
      <ul class="lists" ref="listsEl">
        <li class="list" v-for="item in listData" :key="item.id">
          <div
            class="list__image"
            :style="{
              backgroundImage: `url(${checkImages(item)})`,
            }"
            @click="
              handleDetail({
                id: item.id,
                type: mType,
              })
            "
          ></div>
          <slot :item="item"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { checkImages } from '../../../utils/imageCheck.js';
export default {
  props: ['state', 'type', 'listData', 'mType', 'title'],

  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  updated() {
    this.handleResize();
  },
  beforeDestroy() {
    window.addEventListener('resize', this.handleResize);
  },
  computed: {},
  methods: {
    ...mapActions([
      'FETCH_DETAIL',
      'FETCH_RECOMMENDATIONS',
      'FETCH_SIMILAR',
      'FETCH_KEYWORDS',
      'FETCH_CREDITS',
      'FETCH_WATCH_PROVIDERS',
    ]),
    checkImages(item) {
      if (this.$props) {
        const type = this.$props.type;
        return type === 'similar' ||
          type === 'recommend' ||
          type === 'tv' ||
          type === 'movie' ||
          type === 'k-search'
          ? checkImages(item.backdrop_path)
          : checkImages(item.poster_path || item.profile_path);
      }
    },
    handleResize() {
      // listsEl
      if (!this.$el && !this.$props.listData) return false;

      const listBoxEl = this.$el.lastChild;
      const listEl = this.$el.lastChild.firstChild;
      const listEls = [...listEl.children];
      const listWidth = this.$el.clientWidth;
      const type = this.$props.type;
      const mType = this.$props.mType;

      const dataLen = this.$props.listData.length;
      const pageNum = Math.ceil(dataLen / (type === 'cast' ? 10 : 4));

      listBoxEl.style.width = `${listWidth}px`;
      if (type !== 'search' && type !== 'k-search') {
        listEl.style.width = `${listWidth * pageNum}px`;
      }

      return listEls.map(el => {
        el.firstChild.style.height = `${Math.floor(listEls[0].clientWidth / 3) *
          (type === 'cast' || mType === 'person' ? 4 : 2)}px`;
      });
    },
    changeKO(type) {
      if (type === 'search') {
        return this.$props.mType === 'movie'
          ? '영화'
          : this.$props.mType === 'tv'
          ? 'tv 프로그램'
          : '인물';
      }

      return type === 'k-search'
        ? this.title
        : type === 'cast'
        ? '출연진'
        : type === 'similar'
        ? '비슷한 장르'
        : '추천 목록';
    },
    handleDetail({ type, id }) {
      this.FETCH_DETAIL({ type, id });

      if (type === 'movie' || type === 'tv') {
        this.FETCH_RECOMMENDATIONS({ type, id });
        this.FETCH_SIMILAR({ type, id });
        this.FETCH_KEYWORDS({ type, id });
        this.FETCH_CREDITS({ type, id });
        this.FETCH_WATCH_PROVIDERS({ type, id });

        if (this.$route.name !== 'detail') {
          this.$router.push({ name: 'detail', path: `detail/${id}` });
        }
        this.$cookies.set('m-info', { type, id });
      } else {
        this.$router.push({ name: 'person', path: `person/${id}` });
        this.$cookies.set('p-info', { type, id });
      }
    },
  },
};
</script>

<style lang="scss">
@import './listStyle.scss';
</style>
