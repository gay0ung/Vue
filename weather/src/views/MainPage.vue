<template>
  <div class="main-page">
    <TodayForm></TodayForm>
    <WeekForm></WeekForm>
  </div>
</template>

<script>
import TodayForm from '@/components/TodayForm.vue';
import WeekForm from '@/components/WeekForm.vue';

export default {
  components: {
    TodayForm,
    WeekForm,
  },
};
</script>

<style></style>
