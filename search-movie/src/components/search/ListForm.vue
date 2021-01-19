<template>
  <div class="slide-wrap" v-if="searchDB">
    <ul class="slide-inr" :style="{ width: slideWidth }">
      <li
        v-for="(media, idx) in searchData ||
          dailyData ||
          weeklyData ||
          recommend ||
          cast ||
          seasons ||
          similar"
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
  props: [
    'searchData',
    'dailyData',
    'weeklyData',
    'slideWidth',
    'recommend',
    'cast',
    'seasons',
    'similar',
  ],
  computed: {
    ...mapState(['searchDB']),
  },
  methods: {
    ...mapActions([
      'FETCH_DETAILE',
      'FETCH_RECOMMENDATIONS',
      'FETCH_KEYWORDS_LIST',
      'FETCH_CREDITS_LIST',
      'FETCH_SIMILAR_LIST',
      'FETCH_PERSON_CREDITS',
    ]),
    checkPoster(data) {
      return checkPoster(data);
    },
    mediaDetail(id, type) {
      let typeObj = { type: type, id: id };
      console.log(type, id);
      this.FETCH_DETAILE(typeObj);

      if (type === 'movie' || type === 'tv') {
        this.FETCH_RECOMMENDATIONS(typeObj);
        this.FETCH_KEYWORDS_LIST(typeObj);
        this.FETCH_CREDITS_LIST(typeObj);
        this.FETCH_SIMILAR_LIST(typeObj);
      }

      if (type === 'person') {
        this.FETCH_PERSON_CREDITS(id);
      }

      this.$router.push({
        name: 'Detail',
        query: {
          path: type === 'tv' ? 'tv' : type === 'movie' ? 'movie' : 'person',
        },
      });
    },
  },
};
</script>

<style></style>
