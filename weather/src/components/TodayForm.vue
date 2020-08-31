<template>
  <div class="today-wrap">
    <form id="search-city" @submit.prevent="">
      <div class="today-main">
        <h1 class="city-name">{{ todayList.name }}</h1>
        <div class="temp-minmax">
          <span class="hight">H {{ todayList.main.temp_max }}℃</span>
          <span class="low">L {{ todayList.main.temp_min }}℃</span>
          <span class="feels">😵{{ todayList.main.feels_like }}</span>
        </div>
        <div class="temp-now">
          <p>{{ todayList.main.temp }}℃</p>
          <p>{{ todayList.weather[0].description }}</p>
        </div>
        <div class="weathe-img">
          <i>{{ todayList.weather[0].icon }}</i>
        </div>
      </div>
    </form>
    {{ weatherData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayList: [],
      errMessage: '',
    };
  },
  computed: {
    // weatherData() {
    //   return this.$store.state.todayDATA;
    // },
  },
  create() {
    this.weatherData;
  },

  methods: {
    weatherData() {
      this.todayList = this.$store.state.todayDATA;
      console.log(this.todayList);
    },
  },
};
</script>

<style scoped>
.today-wrap {
  background-color: beige;
}
i {
  outline: 1px solid green;
  display: block;
  width: 100px;
  height: 100px;
}
</style>
