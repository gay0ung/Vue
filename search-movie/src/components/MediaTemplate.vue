<template>
  <div class="trandy-wrap">
    <div class="trand-daily">
      <h3>지금 뜨는 콘텐츠</h3>
      <ListForm :dailyData="trandDaily" />
    </div>

    <div class="trand-weekly">
      <h3>이번주 인기 콘텐츠</h3>
      <ListForm :weeklyData="trandWeekly" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ListForm from '@/components/search/ListForm.vue';
// import { saveToCookie } from '@/utils/cookies.js';

export default {
  data() {
    return {
      path: this.$route.path,
    };
  },
  created() {
    this.checkTranding();
  },
  components: {
    ListForm,
  },
  computed: {
    ...mapState(['trandDaily', 'trandWeekly']),
  },
  methods: {
    ...mapActions(['FETCH_TRANDING_DAILY', 'FETCH_TRANDING_WEEKLY']),
    // 현재 페이지 어디인지 확인
    checkTranding() {
      // 현재 뜨는 콘텐츠 || 인기 콘텐츠 데이터를 받기 위해서.
      const path = this.path;

      if (path === '/main') {
        this.FETCH_TRANDING_DAILY({ type: 'all', time: 'day' });
        this.FETCH_TRANDING_WEEKLY({ type: 'all', time: 'week' });
      } else if (path === '/tv') {
        this.FETCH_TRANDING_DAILY({ type: 'tv', time: 'day' });
        this.FETCH_TRANDING_WEEKLY({ type: 'tv', time: 'week' });
      } else {
        this.FETCH_TRANDING_DAILY({ type: 'movie', time: 'day' });
        this.FETCH_TRANDING_WEEKLY({ type: 'movie', time: 'week' });
      }
    },

    addYourFavList(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
