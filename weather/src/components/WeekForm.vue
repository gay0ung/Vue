<template>
  <div class="week-cont" @mousewheel.prevent="scrollHorizon">
    <!-- v-for로 해준다. -->
    <ul>
      <li v-for="item in weekList" :key="item.id">
        <p class="week-date">{{ todayWeek(item.dt_txt) }}</p>
        <img
          :src="
            `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
          "
        />
        <p class="week-temp">{{ Math.round(item.main.temp) }}℃</p>
        <p class="week-DS">{{ item.weather[0].description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { splitDate } from '../utils/filtersDate.js';
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    weekList() {
      return this.$store.state.weekDATA.list;
    },
  },
  methods: {
    todayWeek(today) {
      return splitDate(today);
    },
    scrollHorizon(e) {
      const scrollH = document.querySelector('.week-cont');

      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      scrollH.scrollLeft -= delta * 50;
    },
  },
};
</script>

<style scope>
li {
  list-style: none;
}
</style>
