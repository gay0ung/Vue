<template>
  <div class="today-cont">
    <div class="tday-inner">
      <section class="td-1">
        <h1 class="city-name">
          <i class="fas fa-map-marker-alt"></i>{{ cityName
          }}<span class="coun"> . {{ countryName }}</span>
        </h1>
        <div class="weathe-img">
          <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" />
        </div>
        <div class="w-ds">
          <p class="">{{ mainDS }}</p>
        </div>
      </section>
      <section class="td-2">
        <p class="temp-now">{{ mathTemp(nowTemp) }}℃</p>
        <div class="temp-minmax">
          <p class="hight"><span>H</span>{{ mathTemp(maxTemp) }}℃</p>
          <p class="low"><span>L</span> {{ mathTemp(minTemp) }}℃</p>
          <p class="feels"><span>Feels</span>{{ mathTemp(feelsTemp) }}℃</p>
        </div>
      </section>
      <p class="todayIs">
        {{ today.hours }} {{ today.today }}
        <span class="week">{{ today.week }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: {},
    };
  },
  created() {
    this.loadedLocation();
    setInterval(this.getDate, 1000);
  },
  computed: {
    setUser() {
      return this.$store.state.user;
    },
    // 나라, 도시 이름
    cityName() {
      return this.$store.state.todayDATA.name;
    },
    countryName() {
      return this.$store.state.todayDATA.sys.country;
    },

    // 온도
    maxTemp() {
      return this.$store.state.todayDATA.main.temp_max;
    },
    minTemp() {
      return this.$store.state.todayDATA.main.temp_min;
    },
    feelsTemp() {
      return this.$store.state.todayDATA.main.feels_like;
    },
    nowTemp() {
      return this.$store.state.todayDATA.main.temp;
    },

    // 날씨 정보
    mainDS() {
      return this.$store.state.todayDATA.weather[0].main;
    },
    icon() {
      return this.$store.state.todayDATA.weather[0].icon;
    },
  },

  methods: {
    // 위치 정보 수락
    askForLocation() {
      navigator.geolocation.getCurrentPosition(this.handleGeoSucces, () =>
        console.log("Can't acces geo location.."),
      );
    },

    // 수락 했을 경우
    handleGeoSucces(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let location = [latitude, longitude];
      const obj = {
        latitude,
        longitude,
      };
      localStorage.setItem('positon', JSON.stringify(obj));

      this.$store.dispatch('GET_USER_LOCATION', location);
      localStorage.setItem('city_name', JSON.stringify(this.$store.state.user));
    },

    // 로딩 했을때
    loadedLocation() {
      const loadedLocation = localStorage.getItem('positon');
      const loadedCityN = localStorage.getItem('city_name');

      if (loadedLocation !== null && loadedCityN !== null) {
        const parsedLocation = JSON.parse(loadedLocation);
        const parsedCityN = JSON.parse(loadedCityN);

        const position = [parsedLocation.latitude, parsedLocation.longitude];
        this.$store.dispatch('GET_USER_LOCATION', position);
        this.$store.dispatch('FETCH_TODAY_W', parsedCityN);
        this.$store.dispatch('FETCH_WEEK_W', parsedCityN);
      } else {
        this.askForLocation();
      }
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
        today: `${month} / ${date}`,
        week: `${week[day]}`,
      };

      this.today = timeObj;
    },
    mathTemp(temp) {
      return Math.round(temp);
    },
  },
};
</script>
