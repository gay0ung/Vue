<template>
  <div class="slide__wrap">
    <h3>{{ title }}</h3>
    <div class="slide__box">
      <ul class="slides">
        <li v-for="item in data" :key="item.id">
          <div
            class="slide__poster"
            :style="{
              backgroundImage: `url(${checkImages(item.poster_path)})`,
            }"
          ></div>
          <b class="slide__title">{{ item.name || item.title }}</b>
        </li>
      </ul>
    </div>
    <div class="slide__controls" @click="handleClick">
      <button type="button" id="prev">
        <fa-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button type="button" id="next">
        <fa-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import { checkImages } from '../../../utils/imageCheck.js';
export default {
  props: ['data', 'title'],
  data() {
    return { pageNum: 0 };
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
  methods: {
    checkImages(path) {
      return checkImages(path);
    },
    handleResize() {
      if (this.$el && this.$props.data) {
        const slides = this.$el.children[1].firstChild;
        const dataNum = this.$props.data.length;

        const pageTotal = dataNum / 5;
        slides.style.width = `${this.$el.clientWidth * pageTotal}px`;
        // slides.style.height = `${slides.clientHeight}px`;
        const slide = [...slides.children];

        slide.map(li => {
          li.firstChild.style.height = `${Math.floor(slide[0].clientWidth / 3) *
            4}px`;
        });
      }
    },
    handleClick(e) {
      // if (this.$el && this.$props.data) {

      // }
      // const slidesWidth = this.$el.children[1].clientWidth;
      // const lastPage = this.$props.data.length / 4;

      // console.dir(this.$el.children[1].firstChild.clientHeight);
      // let curPage = this.pageNum;
      // console.dir(this.$el.children[2]);
      // console.log(slidesWidth);
      console.log(e.target);
      // console.log(lastPage);
      // if (
      //   e.target.parentElement.id === 'next' ||
      //   e.target.parentElement.parentElement.id === 'next'
      // ) {
      //   console.log('이후');
      //   if (curPage >= lastPage) return false;
      //   this.$el.children[1].style.left = `${slidesWidth * curPage}px`;
      //   curPage++;
      // }

      // if (curPage === 0) return false;

      // console.log('이후');
      // this.$el.children[1].style.left = `${slidesWidth * curPage}px`;
      // curPage--;
    },
  },
};
</script>

<style lang="scss">
@import './slideStyle.scss';
</style>
