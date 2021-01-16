<template>
  <ul class="list-wrap">
    <li
      v-for="(media, idx) in searchDB"
      :key="idx"
      @click.prevent="clickDetail(media.id, media.media_type)"
    >
      <img :src="checkPoster(media.poster_path)" />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['searchDB', 'beforePath']),
  },
};
</script>

<style></style>
