<template>
  <div class="slide-wrap" v-if="searchDB" @click="slideHandler">
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
          <button type="button" class="fav-btn">
            <i>★</i>
          </button>
        </div>
      </li>
    </ul>
    <div class="controls">
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
  created() {
    this.clonedSlide();
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
    clonedSlide() {
      // 슬라이드 구현하기
      console.log(this.$el);
      // const slideUl = this.$el.firstChild, //ul
      //   slideLi = slideUl.children; // li

      // const slideLen = slideLi.length, // li갯수
      //   totalWidth = slideUl.clientWidth; // ul의 총넓이

      // let startNum = 0;

      // let division = Math.round(slideLen / 5),
      //   slideWidth = totalWidth / division;

      // // 첫번째페이지와 마지막 페이지 영화 복사
      // const firstPage = Array.from(slideLi).splice(0, 5),
      //   lastPage = Array.from(slideLi).splice(5 * (division - 1), 5);

      // const clonedFirst = firstPage.map(el => el.cloneNode(true)),
      //   clonedLast = lastPage.map(el => el.cloneNode(true));

      // clonedFirst.map(el => slideUl.appendChild(el));
      // clonedLast
      //   .reverse()
      //   .map(el => slideUl.insertBefore(el, slideUl.firstElementChild));

      // slideUl.style.left = `${-slideWidth * (startNum + 1)}px`;

      // let curIndex = 5;
      // let curSlide = Array.from(slideLi).splice(curIndex, 5);
      // curSlide.map(el => el.classList.add('slide_active'));
      // console.log(curSlide);
    },
    slideHandler() {
      // 이전,다음 버튼 구현하기
      // const parent = e.target.parentElement;
      // if (!parent.classList.contains('controls')) return;
      // // nextPage
      // const NEXT = e.target.id === 'next',
      //   PREV = e.target.id === 'prev';
      // console.log(NEXT, PREV);
      // if (NEXT) {
      //   if (curIndex <= 5 * division) {
      //     setTimeout(() => {
      //       slideUl.style.transition = '0ms';
      //       slideUl.style.left = `${-slideWidth * (startNum + 1)}px`;
      //     }, 300);
      //   }
      // }
    },
  },
};
</script>

<style></style>
