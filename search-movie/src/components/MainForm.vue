<template>
  <div class="main-page">
    <div
      class="wrapper trandy"
      v-if="(trandDaily && trandWeekly) !== undefined"
    >
      <div class="list trand-daily">
        <h3>지금 뜨는 콘텐츠</h3>
        <ListForm :dailyData="trandDaily" />
      </div>

      <div class="list trand-weekly">
        <h3>이번주 인기 콘텐츠</h3>
        <ListForm :weeklyData="trandWeekly" />
      </div>

      <!-- <div class="list my-list">
      <h3>내가 추가한 목록</h3>
      <ListForm />
    </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListForm from '@/components/search/ListForm.vue';

export default {
  components: {
    ListForm,
  },
  computed: {
    ...mapState(['trandDaily', 'trandWeekly']),
  },
};
</script>

<style></style>
