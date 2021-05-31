<template>
  <MainTemp :mType="'movie'">
    <template>
      <SlideForm :title="'개봉 예정'" :data="movieUpcomingDB" />
    </template>
  </MainTemp>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SlideForm from '../../common/slide/SlideForm.vue';
import MainTemp from '../MainTemp.vue';

export default {
  components: { MainTemp, SlideForm },
  created() {
    this.getUpcoming();
  },

  computed: {
    ...mapState(['movieUpcomingDB']),
  },
  methods: {
    ...mapActions(['FETCH_UPCOMING']),
    getUpcoming() {
      this.FETCH_UPCOMING();
    },
  },
};
</script>
