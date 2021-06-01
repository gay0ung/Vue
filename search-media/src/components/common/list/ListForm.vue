<template>
  <div :class="`list__wrap ${type}`">
    <h3 class="list__wrap__title">{{ changeKO(type) }}</h3>
    <ul class="lists" ref="listsEl">
      <li class="list" v-for="item in listData" :key="item.id">
        <div
          class="list__image"
          :style="{
            backgroundImage: `url(${checkImages(
              item.poster_path || item.profile_path,
            )})`,
          }"
          @click="handleDetail({ id: item.id, type: item.media_type })"
        ></div>
        <b class="list__title">{{ item.title || item.name }}</b>
        <span v-if="item.known_for_department">
          {{ item.known_for_department }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { checkImages } from '../../../utils/imageCheck.js';
export default {
  props: ['state', 'type', 'listData'],

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
  methods: {
    ...mapActions([
      'FETCH_DETAIL',
      'FETCH_RECOMMENDATIONS',
      'FETCH_SIMILAR',
      'FETCH_KEYWORDS',
      'FETCH_CREDITS',
      'FETCH_WATCH_PROVIDERS',
    ]),
    checkImages(path) {
      return checkImages(path);
    },
    handleResize() {
      // listsEl
      if (!this.$el && !this.$props.listData) return false;

      const listEl = this.$el.lastChild;
      const listEls = [...listEl.children];
      console.dir(listEls);

      return listEls.map(el => {
        el.firstChild.style.height = `${Math.floor(listEls[0].clientWidth / 3) *
          4}px`;
      });
    },
    changeKO(type) {
      return type === 'movie' ? '영화' : type === 'tv' ? 'tv 프로그램' : '인물';
    },
    handleDetail({ type, id }) {
      console.log('detail');

      this.FETCH_DETAIL({ type, id });
      if (type !== 'person') {
        this.FETCH_RECOMMENDATIONS({ type, id });
        this.FETCH_SIMILAR({ type, id });
        this.FETCH_KEYWORDS({ type, id });
        this.FETCH_CREDITS({ type, id });
        this.FETCH_WATCH_PROVIDERS({ type, id });
        this.$router.push({ path: `detail/${id}` });
      } else {
        this.$router.push({ path: `person/${id}` });
      }

      this.$cookies.set('m-info', { type, id });
    },
  },
};
</script>

<style lang="scss">
@import './listStyle.scss';
</style>
