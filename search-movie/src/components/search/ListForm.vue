<template>
  <div class="slide-wrap">
    <transition name="slides">
      <ul class="slides" :style="{ width: slideWidth }">
        <li
          v-for="(media, idx) in searchData ||
            dailyData ||
            weeklyData ||
            recommend ||
            cast ||
            seasons ||
            similar"
          :key="idx"
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

    <div class="controls" @click="slideHandler">
      <button type="button" id="prev">prev</button>
      <button type="button" id="next">next</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { checkPoster } from '@/utils/posterCheck.js';
// import { setItem } from '@/utils/localStorage.js';

export default {
  data() {
    return {
      save: true,
      slideActive: '',
      curPage: 1,
    };
  },
  props: [
    'searchData',
    'dailyData',
    'weeklyData',
    'slideWidth',
    'recommend',
    'cast',
    'seasons',
    'similar',
  ],
  created() {},
  computed: {
    ...mapState(['searchDB']),
  },
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
    checkLength() {},
    slideHandler(e) {
      const tagID = e.target.id;

      const slides = this.$el.children[0], // ul
        slide = Array.from(slides.children); //li

      const slidesWidth = slides.clientWidth,
        slideLen = slide.length;

      const pageNum = Math.round(slideLen / 5); // 1페이지당 5개li
      const slideWidth = slidesWidth / pageNum;

      if (tagID === 'next') {
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

      tagID === 'next'
        ? (this.slideActive = 'next')
        : (this.slideActive = 'prev');
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
