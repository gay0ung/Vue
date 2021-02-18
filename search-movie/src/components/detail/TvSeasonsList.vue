<template>
  <div class="seasons-wrap d-list">
    <div class="last_episode_to_air ">
      <h3>{{ detail.in_production ? '현재 시즌' : '지난 시즌' }}</h3>
      <div class="last-s-wrap">
        <div
          v-if="lastSeasons.poster_path !== null"
          class="poster"
          :style="{
            backgroundImage: `url(${chekcImages(lastSeasons.poster_path)})`,
          }"
        ></div>
        <div class="last-contents">
          <strong>{{ lastSeasons.name }}</strong>
          <span>{{
            `${lastAirDate.year} | ${lastSeasons.episode_count} 화`
          }}</span>
          <p>
            {{
              `${detail.name}의 ${lastSeasons.season_number}번째 시즌이 ${lastAirDate.year}년 ${lastAirDate.month}월 ${lastAirDate.day}일에 방영되었습니다.`
            }}
          </p>
          <button class="epi-btn">에피소드 보기</button>
        </div>
      </div>
    </div>
    <div class="list all-seasons">
      <h4>전체 시리즈</h4>
      <ListForm :seasons="seasons" />
    </div>
  </div>
</template>

<script>
import ListForm from '@/components/search/ListForm';
import { mapState } from 'vuex';
import { chekcImages } from '@/utils/posterCheck.js';

export default {
  components: { ListForm },
  data() {
    return {
      lastSeasons: null,
      lastAirDate: this.splitDate,
    };
  },
  mounted() {
    this.getLastSeasons();
    this.splitDate();
  },
  beforeUpdate() {
    this.getLastSeasons();
    this.splitDate();
  },
  computed: {
    ...mapState(['detail', 'seasons']),
  },
  methods: {
    chekcImages(path) {
      return chekcImages(path);
    },
    getLastSeasons() {
      let seasons = this.seasons;

      this.lastSeasons = seasons.slice(-1)[0];
    },

    splitDate() {
      let date = this.lastSeasons.air_date;
      const splitStr = date.split('-');
      let airDate = {
        year: splitStr[0],
        month: splitStr[1],
        day: splitStr[2],
      };

      this.lastAirDate = airDate;
    },
  },
};
</script>

<style></style>
