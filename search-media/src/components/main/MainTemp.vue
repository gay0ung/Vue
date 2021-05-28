<template>
  <div :class="`main__inr ${mType}`">
    <div class="hero__wrap" v-if="randomData">
      <div
        class="hero__img"
        :style="{
          backgroundImage: `url(${checkImages(randomData.backdrop_path)})`,
        }"
      >
        <div class="hero__cover"></div>
      </div>
      <div class="hero__content">
        <strong>{{ randomData.title || randomData.name }}</strong>
        <p>{{ randomData.overview }}</p>
      </div>
    </div>
    <div class="main__contents">
      <SlideForm :title="'오늘의 인기 목록'" :data="trandDaily" />
      <SlideForm :title="'이번주 인기 목록'" :data="trandWeekly" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { checkImages } from '../../utils/imageCheck';
import SlideForm from '../common/slide/SlideForm.vue';
export default {
  props: ['mType'],
  components: {
    SlideForm,
  },
  data() {
    return {
      randomData: null,
    };
  },
  created() {
    this.getTrendingData(this.$props.mType);
    this.randomMedia();
  },
  mounted() {
    this.randomMedia();
  },
  updated() {
    this.randomMedia();
  },
  computed: {
    ...mapState(['trandDaily', 'trandWeekly']),
  },
  methods: {
    ...mapActions(['FETCH_TRENDING']),
    getTrendingData(type) {
      this.FETCH_TRENDING({
        type: `${type === 'home' ? 'all' : type}`,
        time: 'day',
        commitType: 'SET_TRENDING_DAILY',
      });
      this.FETCH_TRENDING({
        type: `${type === 'home' ? 'all' : type}`,
        time: 'week',
        commitType: 'SET_TRENDING_WEEKLY',
      });
    },
    randomMedia() {
      if (this.trandWeekly) {
        const randomNum = Math.floor(Math.random() * 21);
        const trandWeekly = this.trandWeekly;
        this.randomData = trandWeekly[randomNum];
      }
    },
    checkImages(path) {
      return checkImages(path);
    },
  },
};
</script>

<style></style>
