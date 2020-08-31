<template>
  <form action="" @submit.prevent="submitForm">
    <input
      type="text"
      v-model="searchCity"
      placeholder="Please write the city name in English."
    />
    <button type="submit">click</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchCity: '',
    };
  },
  created() {
    // this.searchCity = 'seoul';
    this.$store.dispatch('FETCH_TODAYW', 'seoul');
  },
  methods: {
    submitForm() {
      try {
        let searchCity = this.searchCity;
        // let icon = this.bgi;
        console.log(searchCity);
        if (searchCity === '') {
          alert('please wirte the city name');
        } else {
          this.$store.dispatch('FETCH_TODAYW', searchCity);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.searchCity = '';
      }
    },
  },
};
</script>

<style></style>
