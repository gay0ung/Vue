<template>
  <div class="today-wrap">
    <form id="search-city" @submit.prevent="submitForm">
      <input
        type="text"
        v-model="searchCity"
        placeholder="Please write the city name in English."
      />

      {{ weatherData }}
    </form>
    <template v-if="weatherData">
      <div class="today-main">
        <h1 class="city-name">{{}}</h1>
        <div class="temp-minmax">
          <span class="hight">H {{}}℃</span>
          <span class="low">L {{}}℃</span>
        </div>
        <div class="temp-now">
          <p>{{}}℃</p>
          <p>{{}}</p>
        </div>
        <div class="weathe-img">
          <i>{{}}</i>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCity: '',
      weatherList: {
        HTemp: 0,
        LTemp: 0,
        NowTemp: 0,
        cityName: '',
        bgi: '',
        weather: '',
      },
      errMessage: '',
    };
  },
  computed: {
    weatherData() {
      return this.$store.state.todayDATA;
    },
  },
  create() {
    console.log(this.weatherList.lenght);
  },
  methods: {
    submitForm() {
      try {
        let searchCity = this.searchCity;
        let weatherList = this.weatherList;
        // let icon = this.bgi;

        if (searchCity == '') {
          alert('please wirte the city name');
        } else {
          this.$store.dispatch('FETCH_TODAYW', searchCity);
          // this.$store.dispatch('FETCH_ICON', icon);

          weatherList.HTemp = this.$store.state.todayDATA.main.temp_max;
          weatherList.LTemp = this.$store.state.todayDATA.main.temp_min;
          weatherList.NowTemp = this.$store.state.todayDATA.main.temp;
          weatherList.cityName = this.$store.state.todayDATA.name;
          weatherList.weather = this.$store.state.todayDATA.weather[0].main;
          weatherList.bgi = this.$store.state.todayDATA.weather[0].icon;
        }
      } catch (err) {
        this.errMessage = err.response.message;
        console.log(err.Response.message);
      } finally {
        this.cityName = '';
      }
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
