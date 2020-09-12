<template>
  <div class="week-cont">
    <h2>weeks weather</h2>
    <!-- v-for로 해준다. -->
    <ul>
      <li v-for="item in weekList" :key="item.id">
        <p class="todayIs">요일</p>
        <p>{{ todayWeek(item.dt_txt) }}</p>

        <img
          :src="
            `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
          "
        />
        <p class="week-temp">{{ mathTemp(item.main.temp) }}℃</p>
        <p class="week-DS">{{ item.weather[0].main }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
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
      let day = new Date().getDate();
      const dayArr = today.split(' ');
      const dd = dayArr[0].split('-')[2];
      let time = Number(dayArr[1].substring(0, 2));
      const amPm = time >= 12 ? 'pm' : 'am';

      const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      let date = new Date(today).getDay();

      day = String(day);
      time = `${time === 0 ? 12 : time % 12 ? time % 12 : time}${amPm}`;
      return day === dd ? time : `${week[date]} ${time}`;
    },
    mathTemp(temp) {
      return Math.round(temp);
    },
    // dhm(ms) {
    //   let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    //   let daysms = ms % (24 * 60 * 60 * 1000);
    //   let hours = Math.floor(daysms / (60 * 60 * 1000));
    //   let hoursms = ms % (60 * 60 * 1000);
    //   let minutes = Math.floor(hoursms / (60 * 1000));
    //   let minutesms = ms % (60 * 1000);
    //   let sec = Math.floor(minutesms / 1000);
    //   return `${days} : ${hours} : ${minutes} : ${sec}`;
    // },
  },
};
</script>

<style scope>
li {
  list-style: none;
}
</style>
