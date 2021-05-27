<template>
  <MainTemp :mType="'movie'">
    <template>
      <SlideForm :title="'오늘의 트렌딩'" />
      <SlideForm :title="'이번주 트렌딩'" />
    </template>
  </MainTemp>
</template>

<script>
import SlideForm from '../../slide/SlideForm.vue';
import MainTemp from '../MainTemp.vue';

export default { components: { MainTemp, SlideForm } };
</script>
