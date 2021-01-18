<template>
  <div class="slide-wrap">
    <ul class="slide-inr" :style="{ width: slideWidth }">
      <li
        v-for="(media, idx) in searchData ||
          dailyData ||
          weeklyData ||
          recommend"
        :key="idx"
      >
        <img
          :src="checkPoster(media)"
          alt=""
          @click.prevent="mediaDetail(media.id, media.media_type)"
        />
        <div class="slide-info">
          <h4>{{ media.title || media.name }}</h4>
          <button type="button" class="fav-btn">
            <i class="far fa-star"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { checkPoster } from '@/utils/posterCheck.js';

export default {
  created() {},
  props: ['searchData', 'dailyData', 'weeklyData', 'slideWidth', 'recommend'],
  computed: {
    ...mapState(['searchDB', 'beforePath']),
  },
  methods: {
    ...mapActions(['FETCH_DETAILE', 'FETCH_RECOMMENDATIONS']),
    checkPoster(data) {
      return checkPoster(data);
    },
    mediaDetail(id, type) {
      // 출연진
      this.FETCH_DETAILE({ type: type, id: id });
      this.FETCH_RECOMMENDATIONS({ type: type, id: id });

      this.$router.push({
        name: 'Detail',
        query: {
          path: type === 'tv' ? 'tv' : type === 'movie' ? 'movie' : 'person',
        },
      }); // 검색결과 페이지 이동.
    },
  },
};
</script>

<style></style>
