<template>
  <MainTemp :mType="'tv'">
    <template>
      <SlideForm :title="'오늘의 트렌딩'" />
    </template>
  </MainTemp>
</template>

<script>
import SlideForm from '../../slide/SlideForm.vue';
import MainTemp from '../MainTemp.vue';

export default {
  data() {
    return {};
  },
  components: { MainTemp, SlideForm },
};
</script>
