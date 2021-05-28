<template>
  <div :class="`list__wrap ${type}`">
    <h3 class="list__wrap__title"></h3>
    <ul class="lists">
      <li class="list" v-for="item in listData" :key="item.id">
        <div
          class="list__image"
          :style="{
            backgroundImage: `url(${checkImages(
              item.poster_path || item.profile_path,
            )})`,
          }"
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
  props: ['type', 'listData'],
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
      console.log('resizing');
      if (this.$el && this.$props.listData) {
        const listEl = this.$el.lastChild;
        const listEls = [...listEl.children];
        console.dir(listEls);
        if (this.$props.type === 'person') {
          console.log('사람');
        } else {
          const listHeight = Math.floor(listEls[0].clientWidth / 3) * 4;
          console.log();
          listEls.map(el => {
            return (el.firstChild.style.height = `${listHeight}px`);
          });
          console.log(this.$props.type);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import './listStyle.scss';
</style>
