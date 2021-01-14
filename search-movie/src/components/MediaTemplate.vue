<template>
  <div class="trandy-wrap">
    <div class="trand-daily">
      <form @submit.prevent="postDetail">
        <h3>지금 뜨는 콘텐츠</h3>
        <div class="slide-wrap">
          <ul class="daily-list">
            <li
              v-for="daily in trandDaily"
              :key="daily.id"
              @click.prevent="clickDetail(daily.id, daily.media_type)"
            >
              <img :src="checkPoster(daily.poster_path)" alt="" />
              <h4>{{ daily.title }}</h4>
            </li>
          </ul>
        </div>
      </form>
    </div>

    <div class="trand-weekly">
      <form @submit.prevent="postDetail">
        <h3>이번주 인기 콘텐츠</h3>
        <div class="slide-wrap">
          <ul class="weekly-list">
            <li
              v-for="weekly in trandWeekly"
              :key="weekly.id"
              @click.prevent="clickDetail(weekly.id, weekly.media_type)"
            >
              <img :src="checkPoster(weekly.poster_path)" alt="" />
              <h4>{{ weekly.title }}</h4>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { checkPoster } from '@/utils/mList.js';
// import { saveToCookie } from '@/utils/cookies.js';
export default {
  data() {
    return {
      path: this.$route.path,
    };
  },
  created() {
    this.checkTranding();
  },
  computed: {
    ...mapState(['trandDaily', 'trandWeekly']),
  },
  methods: {
    ...mapMutations(['SET_ID']),
    ...mapActions([
      'FETCH_TRANDING_DAILY',
      'FETCH_TRANDING_WEEKLY',
      'FETCH_DETAILE',
    ]),
    // 현재 페이지 어디인지 확인
    checkTranding() {
      const path = this.path;

      if (path === '/main') {
        this.FETCH_TRANDING_DAILY({ type: 'all', time: 'day' });
        this.FETCH_TRANDING_WEEKLY({ type: 'all', time: 'week' });
      } else if (path === '/tv') {
        this.FETCH_TRANDING_DAILY({ type: 'tv', time: 'day' });
        this.FETCH_TRANDING_WEEKLY({ type: 'tv', time: 'week' });
      } else {
        this.FETCH_TRANDING_DAILY({ type: 'movie', time: 'day' });
        this.FETCH_TRANDING_WEEKLY({ type: 'movie', time: 'week' });
      }
    },
    // postDetail() {},
    clickDetail(id, type) {
      console.log(type);
      this.FETCH_DETAILE({ type: type, id: id });

      this.$router.push({
        name: 'Detail',
        query: { path: type === 'tv' ? 'tv' : 'movie' },
      }); // 검색결과 페이지 이동.
    },
    checkPoster(path) {
      return checkPoster(path);
    },
  },
};
</script>

<style></style>
