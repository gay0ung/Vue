<template>
  <div class="media-detail">
    클릭했을때 상세페이지
    {{ detail }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['detail']),
  },
};
</script>

<style></style>
