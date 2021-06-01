<template>
  <div class="detail__wrap">
    <MovieDetailForm v-if="mediaInfo.type === 'movie'" />
    <TvDetailForm v-if="mediaInfo.type === 'tv'" />
    <PersonDetailForm v-if="mediaInfo.type === 'person'" />
  </div>
</template>

<script>
import MovieDetailForm from '@/components/detail/movieDetail/MovieDetailForm.vue';
import PersonDetailForm from '@/components/detail/personDetail/PersonDetailForm.vue';
import TvDetailForm from '@/components/detail/tvDetail/TvDetailForm.vue';
import { mapState } from 'vuex';

export default {
  components: { MovieDetailForm, TvDetailForm, PersonDetailForm },
  computed: {
    ...mapState(['mediaInfo']),
  },
};
</script>

<style></style>
