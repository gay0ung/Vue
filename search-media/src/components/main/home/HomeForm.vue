<template>
  <MainTemp :mType="'home'"> </MainTemp>
</template>

<script>
import { mapActions } from 'vuex';
import MainTemp from '../MainTemp.vue';

export default {
  data() {
    return {};
  },
  created() {
    console.log();
  },
  components: { MainTemp },
  methods: {
    ...mapActions(['FETCH_TRENDING']),
  },
};
</script>

<style></style>
