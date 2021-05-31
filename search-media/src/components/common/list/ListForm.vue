<template>
  <div :class="`list__wrap ${type}`">
    <h3 class="list__wrap__title">{{ changeKO(type) }}</h3>
    <ul class="lists">
      <li class="list" v-for="item in listData" :key="item.id">
        <div
          class="list__image"
          :style="{
            backgroundImage: `url(${checkImages(
              item.poster_path || item.profile_path,
            )})`,
          }"
          @click.prevent="handleDetail"
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
import { checkImages } from '../../../utils/imageCheck.js';
export default {
  props: ['state', 'type', 'listData'],
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  updated() {
    this.handleResize();
  },
  beforeDestroy() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    checkImages(path) {
      return checkImages(path);
    },
    handleResize() {
      if (this.$el && this.$props.listData) {
        const listEl = this.$el.lastChild;
        const listEls = [...listEl.children];
        console.dir(listEls);

        const listHeight = Math.floor(listEls[0].clientWidth / 3) * 4;
        console.log();
        listEls.map(el => {
          return (el.firstChild.style.height = `${listHeight}px`);
        });
        console.log(this.$props.type);
      }
    },
    changeKO(type) {
      return type === 'movie' ? '영화' : type === 'tv' ? 'tv 프로그램' : '인물';
    },
    handleDetail() {
      console.log('detail');
    },
  },
};
</script>

<style lang="scss">
@import './listStyle.scss';
</style>
