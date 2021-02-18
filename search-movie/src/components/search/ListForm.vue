<template>
  <div class="slide-wrap">
    <ul class="slides" :style="{ width: slideWarpWidth }">
      <li
        v-for="(item, idx) in searchData ||
          dailyData ||
          weeklyData ||
          cast ||
          seasons ||
          similar ||
          keywordData"
        :key="idx"
        :style="{ width: slideWidth }"
      >
        <div
          class="slide-poster"
          :style="{
            backgroundImage: `url(${checkingPathType(item)})`,
          }"
          @click.prevent="
            mediaDetail($event, {
              id: item.id,
              type: item.media_type !== undefined ? item.media_type : 'movie',
              title: item.title !== undefined ? item.title : item.name,
            })
          "
        >
          <transition>
            <button type="button" class="favorite" key="save">
              <font-awesom-icon class="fav" :icon="['far', 'star']" />
            </button>
          </transition>
        </div>

        <div class="slide-info">
          <strong>{{ item.character }}</strong>
          <p>{{ item.title || item.name }}</p>
        </div>
      </li>
    </ul>

    <div class="controls" @click="slideHandler" v-if="btnShow">
      <button type="button" class="prev">
        <font-awesom-icon
          :icon="['fas', 'chevron-left']"
          :style="slidBtnStyle"
        />
      </button>
      <button type="button" class="next">
        <font-awesom-icon
          :icon="['fas', 'chevron-right']"
          :style="slidBtnStyle"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import { chekcImages, checkProfileImg } from '@/utils/posterCheck.js';

export default {
  data() {
    return {
      save: false,
      // page관련
      curPage: 1,
      pageNum: 0,
      btnShow: true,
      // slideStyle
      slideWarpWidth: '',
      slideWidth: '',
      slidBtnStyle: {
        width: '100%',
        heigth: '100%',
        'font-size': '3.3em',
      },
    };
  },

  mounted() {
    this.slideWdithCheck();
  },
  beforeUpdate() {
    this.slideWdithCheck();
  },
  props: [
    'searchData',
    'dailyData',
    'weeklyData',
    'cast',
    'seasons',
    'similar',
    'keywordData',
  ],

  methods: {
    ...mapActions([
      'FETCH_DETAILE',
      'FETCH_KEYWORDS_LIST',
      'FETCH_CREDITS_LIST',
      'FETCH_SIMILAR_LIST',
      'FETCH_PERSON_CREDITS',
    ]),
    ...mapMutations(['SET_ID']),

    chekcImages(data) {
      return chekcImages(data);
    },
    checkProfileImg(path) {
      return checkProfileImg(path);
    },
    checkingPathType(data) {
      const dataList = this.$props;
      let existData = '';

      for (let name in dataList) {
        if (dataList[name] !== undefined) {
          existData = name;
        }
      }

      switch (existData) {
        case 'cast':
          return this.checkProfileImg(data.profile_path);

        case 'seasons':
          return this.chekcImages(data.poster_path);

        default:
          return data.backdrop_path === null
            ? this.chekcImages(data.poster_path)
            : this.chekcImages(data.backdrop_path);
      }
    },

    // 상세페이지이동
    mediaDetail(e, listObj) {
      const { type, id, title } = listObj;
      const { tagName } = e.target;

      if (tagName !== 'DIV') return;
      console.log(title);
      this.FETCH_DETAILE({ type, id });

      if (type === 'movie' || type === 'tv') {
        this.FETCH_KEYWORDS_LIST({ type, id }); // 키워드리스트
        this.FETCH_CREDITS_LIST({ type, id }); // 관계자들 목록
        this.FETCH_SIMILAR_LIST({ type, id }); // 비슷한 장르 추천
      }

      if (type === 'person') {
        this.FETCH_PERSON_CREDITS(id);
      }

      this.SET_ID({ type, id });
      console.log(type);

      if (this.$route.path !== '/sDetail')
        this.$router.push({
          name: 'detail',
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

      let pages = 0;
      let ggrandParentCN = this.$el.offsetParent.classList[0];

      const pagesForm = NUM => {
        pages = Math.ceil(itemLen / NUM);
        this.pageNum = pages;
        this.slideWarpWidth = `${parentWidth * pages}px`;
        this.slideWidth = `${(parentWidth * pages) / (NUM * pages)}px`;
      };

      switch (ggrandParentCN) {
        case 'similer':
          pagesForm(8);
          break;
        case 'cast':
          pagesForm(7);
          break;
        case 'seasons-wrap':
          pagesForm(10);
          break;
        case undefined:
          pagesForm(5);
          break;
      }
    },

    slideHandler(e) {
      const tagID = e.target.parentElement.classList;

      const slides = this.$el.children[0]; // ul
      const slidesWidth = slides.clientWidth;

      const pageNum = this.pageNum;
      const slideWidth = slidesWidth / pageNum;
      console.dir();
      if (e.target.tagName === 'PATH') return;

      if (tagID.contains('next')) {
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

<style lang="scss">
@import './slide.scss';

.slides-enter-active {
  transition: left ease 0.4s;
}
</style>
