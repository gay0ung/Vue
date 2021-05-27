<template>
  <div :class="`main__inr ${mType}`">
    <div class="hero__wrap">
      <div
        class="hero__img"
        :style="{ backgroundImage: `url(${randomImages()})` }"
      >
        <div class="hero__cover"></div>
      </div>
      <div class="hero__content">
        <strong>제목</strong>
        <p>줄거리</p>
      </div>
    </div>
    <div class="main__contents">
      <SlideForm :title="'오늘의 트렌딩'" :data="trandDaily" />
      <SlideForm :title="'이번주 트렌딩'" :data="trandWeekly" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SlideForm from '../slide/SlideForm.vue';
export default {
  props: ['mType'],
  components: {
    SlideForm,
  },
  created() {
    this.getTrendingData(this.$props.mType);
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
    randomImages() {},
  },
};
</script>

<style></style>
