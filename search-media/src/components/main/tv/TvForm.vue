<template>
  <MainTemp :mType="'tv'">
    <template>
      <SlideForm :title="'다음주 방송 예정'" :data="tvOnTheAirDB" />
    </template>
  </MainTemp>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SlideForm from '../../common/slide/SlideForm.vue';
import MainTemp from '../MainTemp.vue';

export default {
  components: { MainTemp, SlideForm },
  data() {
    return {};
  },
  created() {
    this.getOnTheAir();
  },

  computed: {
    ...mapState(['tvOnTheAirDB']),
  },
  methods: {
    ...mapActions(['FETCH_ONTHEAIR']),
    getOnTheAir() {
      this.FETCH_ONTHEAIR();
    },
  },
};
</script>
