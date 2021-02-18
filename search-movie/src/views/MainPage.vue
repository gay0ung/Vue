<template>
  <MainForm />
</template>

<script>
import MainForm from '@/components/MainForm.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    MainForm,
  },
  created() {
    this.getRouteType(this.$route.params.type);
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) this.getRouteType(this.$route.params.type);
    },
  },
  methods: {
    ...mapActions(['FETCH_TRANDING_DAILY', 'FETCH_TRANDING_WEEKLY']),
    getRouteType(rType) {
      // console.log(rType);
      switch (rType) {
        case 'main':
          this.FETCH_TRANDING_DAILY({ type: 'all', time: 'day' });
          this.FETCH_TRANDING_WEEKLY({ type: 'all', time: 'week' });
          break;

        case 'tv':
          this.FETCH_TRANDING_DAILY({ type: 'tv', time: 'day' });
          this.FETCH_TRANDING_WEEKLY({ type: 'tv', time: 'week' });
          break;

        case 'movie':
          this.FETCH_TRANDING_DAILY({ type: 'movie', time: 'day' });
          this.FETCH_TRANDING_WEEKLY({ type: 'movie', time: 'week' });
          break;
      }
    },
  },
};
</script>

<style></style>
