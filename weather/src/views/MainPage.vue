<template>
  <div class="main-page">
    <SearchForm></SearchForm>
    <TodayForm></TodayForm>
    <WeekForm></WeekForm>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import TodayForm from '@/components/TodayForm.vue';
import WeekForm from '@/components/WeekForm.vue';

export default {
  components: {
    SearchForm,
    TodayForm,
    WeekForm,
  },
};
</script>

<style></style>
