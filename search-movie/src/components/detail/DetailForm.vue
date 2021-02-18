<template>
  <div class="detail-page">
    <template v-if="mediaInfo.type === 'person'">
      <PersonDetail />
    </template>
    <template v-if="mediaInfo.type === 'movie'">
      <MediaDetailTemp />
    </template>
    <template v-if="mediaInfo.type === 'tv'">
      <MediaDetailTemp />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PersonDetail from '@/components/detail/PersonDetail.vue';
import MediaDetailTemp from '@/components/detail/MediaDetailTemp.vue';

export default {
  components: {
    PersonDetail,
    MediaDetailTemp,
  },
  computed: {
    ...mapState(['mediaInfo']),
  },
  methods: {},
};
</script>

<style lang="scss">
@import './detail.scss';
</style>
