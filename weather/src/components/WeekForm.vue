<template>
  <div class="week-cont" @mousewheel.prevent="scrollHorizon">
    <div id="scroll" v-if="scroll">
      <i class="scroll-icon"><span></span></i>
      <span>scroll</span>
    </div>
    <!-- 5시간 단위 날씨 -->
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
    return {
      scroll: true,
    };
  },
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
      // e ? (this.scroll = false) : (this.scroll = true);
      // console.log(e);

      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      scrollH.scrollLeft -= delta * 50;
    },
  },
};
</script>
