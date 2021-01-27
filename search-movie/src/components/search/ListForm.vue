<template>
  <div class="slide-wrap">
    <transition name="slide">
      <ul class="slides" :style="slideWrapStyle">
        <li
          v-for="(media, idx) in searchData ||
            dailyData ||
            weeklyData ||
            recommend ||
            cast ||
            seasons ||
            similar"
          :key="idx"
          :style="slideStyle"
        >
          <img
            :src="checkPoster(media)"
            alt=""
            @click.prevent="mediaDetail(media.id, media.media_type)"
          />

          <div class="slide-info">
            <h4>{{ media.title || media.name }}</h4>
            <transition>
              <button type="button" v-if="save" key="save">
                <i>{{ save ? '★' : '☆' }}</i>
              </button>
            </transition>
          </div>
        </li>
      </ul>
    </transition>

    <div class="controls" @click="slideHandler" v-if="btnShow">
      <button type="button" id="prev">prev</button>
      <button type="button" id="next">next</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { checkPoster } from '@/utils/posterCheck.js';

export default {
  data() {
    return {
      save: true,
      curPage: 1,
      btnShow: true,
      slideWidth: 0,
      itemWidth: 0,
      slideWrapStyle: {
        width: `${this.slideWidth}px`,
      },
      slideStyle: {
        width: `${this.itemWidth}px`,
      },
    };
  },
  created() {},
  beforeUpdate() {
    this.slideWdithCheck();
  },
  props: [
    'searchData',
    'dailyData',
    'weeklyData',
    'recommend',
    'cast',
    'seasons',
    'similar',
  ],
  computed: {},
  methods: {
    ...mapActions([
      'FETCH_DETAILE',
      'FETCH_RECOMMENDATIONS',
      'FETCH_KEYWORDS_LIST',
      'FETCH_CREDITS_LIST',
      'FETCH_SIMILAR_LIST',
      'FETCH_PERSON_CREDITS',
    ]),

    checkPoster(data) {
      return checkPoster(data);
    },
    mediaDetail(id, type) {
      let typeObj = { type: type, id: id };

      this.FETCH_DETAILE(typeObj);

      if (type === 'movie' || type === 'tv') {
        this.FETCH_RECOMMENDATIONS(typeObj);
        this.FETCH_KEYWORDS_LIST(typeObj);
        this.FETCH_CREDITS_LIST(typeObj);
        this.FETCH_SIMILAR_LIST(typeObj);
      }

      if (type === 'person') {
        this.FETCH_PERSON_CREDITS(id);
      }

      this.$router.push({
        name: 'Detail',
        query: {
          path:
            type === 'tv'
              ? 'tv'
              : type === 'movie' || type === undefined
              ? 'movie'
              : 'person',
        },
      });
    },
    slideWdithCheck() {
      let parentWidth = this.$el.clientWidth;
      let itemLen = 0;

      for (let data in this.$props) {
        if (this.$props[data] !== undefined) {
          itemLen = this.$props[data].length;
        }
      }

      let pages = Math.ceil(itemLen / 5);
      console.log(pages);
      this.slideWidth = parentWidth * pages;
      console.log(parentWidth, this.slideWidth);
    },
    slideHandler(e) {
      const tagID = e.target.id;

      const slides = this.$el.children[0], // ul
        slide = Array.from(slides.children); //li

      const slidesWidth = slides.clientWidth,
        slideLen = slide.length;

      const pageNum = Math.ceil(slideLen / 5); // 1페이지당 5개li
      const slideWidth = slidesWidth / pageNum;

      if (tagID === 'next') {
        // 마지막 페이지 인 경우
        if (this.curPage === pageNum) {
          slides.style.left = `0px`;
          this.curPage = 1;
          return;
        }
        slides.style.left = `${-slideWidth * this.curPage}px`;
        this.curPage++;
      } else {
        if (this.curPage === 1) {
          slides.style.left = `${-slideWidth * (pageNum - 1)}px`;
          this.curPage = pageNum;
          return;
        }

        slides.style.left = `${-slideWidth * (this.curPage - 2)}px`;
        this.curPage--;
      }
    },
  },
};
</script>

<style>
@import url('../../assets/css/slide.css');
.slides-enter-active {
  transition: left ease 0.4s;
}
/* .slide-leave-active {
  transition: all ease 0.4s;
} */
</style>
