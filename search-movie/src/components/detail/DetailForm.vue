<template>
  <div class="detail-page">
    <template v-if="media_info.type === 'person'">
      <PersonDetail />
      <!-- <MediaDetailTemp :detailData="detail" /> -->
    </template>
    <template v-if="media_info.type === 'movie'">
      <!-- <MovieDetail :detailData="detail" /> -->
      <MediaDetailTemp />
    </template>
    <template v-if="media_info.type === 'tv'">
      <!-- <TvDetail /> -->
      <MediaDetailTemp />
    </template>
    <!-- {{ detail }} -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PersonDetail from '@/components/detail/PersonDetail.vue';
// import MovieDetail from '@/components/detail/MovieDetail.vue';
// import TvDetail from '@/components/detail/TvDetail.vue';
import MediaDetailTemp from '@/components/detail/MediaDetailTemp.vue';

export default {
  components: {
    PersonDetail,
    // MovieDetail,
    // TvDetail,
    MediaDetailTemp,
  },
  computed: {
    ...mapState(['media_info']),
  },
  methods: {},
};
</script>

<style lang="scss">
@import './detail.scss';
</style>
