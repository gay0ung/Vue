<template>
  <div class="today-cont">
    <div class="tday-inner" v-if="todayData && weatherMain && weatherInfo">
      <section class="td-1">
        <h1 class="city-name">
          <i class="fas fa-map-marker-alt"></i>{{ todayData.name
          }}<span class="coun"> . {{ todayData.sys.country }}</span>
        </h1>
        <div class="weathe-img">
          <img
            :src="
              `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`
            "
          />
        </div>
        <div class="w-ds">
          <p class="">{{ weatherInfo.main }}</p>
        </div>
      </section>
      <section class="td-2">
        <p class="temp-now">{{ Math.round(weatherMain.temp) }}℃</p>
        <div class="temp-minmax">
          <p class="hight">
            <span>Max</span>{{ Math.round(weatherMain.temp_max) }}℃
          </p>
          <p class="low">
            <span>Min</span> {{ Math.round(weatherMain.temp_min) }}℃
          </p>
          <p class="feels">
            <span>Feels</span>{{ Math.round(weatherMain.feels_like) }}℃
          </p>
        </div>
      </section>
      <p class="todayIs">
        {{ date.hours }} _ {{ date.today }}
        <span class="week">{{ date.week }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: {},
    };
  },
  async created() {
    try {
      await this.askForLocation();
      setInterval(this.getDate, 1000);
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    todayData() {
      return this.$store.state.todayDATA;
    },
    weatherMain() {
      return this.$store.state.wMain;
    },
    weatherInfo() {
      return this.$store.state.wInfo;
    },
    weatherWind() {
      return this.$store.state.wind;
    },
  },

  methods: {
    // 위치 정보 수락
    askForLocation() {
      navigator.geolocation.getCurrentPosition(this.geoLocation, () =>
        console.log("Can't acces geo location.."),
      );
    },

    // 수락 했을 경우
    geoLocation(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.$store.dispatch('FETCH_TODAY_W', `lat=${latitude}&lon=${longitude}`);
      this.$store.dispatch('FETCH_WEEK_W', `lat=${latitude}&lon=${longitude}`);
    },

    getDate() {
      const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const month = today.getMonth() + 1;
      const date = today.getDate();
      const day = today.getDay();
      let timeObj = {
        hours: `${hours % 12 ? hours % 12 : 12}:${
          minutes < 10 ? `0${minutes}` : minutes
        } ${hours >= 12 ? 'pm' : 'am'}`,
        today: `${month} . ${date}`,
        week: `${week[day]}`,
      };
      this.date = timeObj;
    },
  },
};
</script>
