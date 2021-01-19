<template>
  <div class="media-detail" v-if="detail !== null">
    <template v-if="checkType() === 'person'">
      <PersonDetail :detailData="detail" />
    </template>
    <template v-if="checkType() === 'movie'">
      <MovieDetail :detailData="detail" />
    </template>
    <template v-if="checkType() === 'tv'">
      <TvDetail :detailData="detail" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PersonDetail from '@/components/detail/PersonDetail.vue';
import MovieDetail from '@/components/detail/MovieDetail.vue';
import TvDetail from '@/components/detail/TvDetail.vue';

export default {
  components: {
    PersonDetail,
    MovieDetail,
    TvDetail,
  },
  computed: {
    ...mapState(['detail']),
  },
  methods: {
    checkingVoteAverage(num) {
      return num;
    },
    checkType() {
      const type = this.$route.query.path;
      return type === 'person' ? 'person' : type === 'movie' ? 'movie' : 'tv';
    },
  },
};
</script>

<style></style>
