<template>
  <div class="search-cont">
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="searchCity"
        placeholder="Please write on the city name in English."
      />
      <button type="submit">search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCity: '',
    };
  },
  created() {},
  computed: {},
  methods: {
    submitForm() {
      try {
        if (this.searchCity === '') {
          alert('please wirte the city name');
        } else {
          console.log(`입력 이름: ${this.searchCity}`);
          this.$store.dispatch('FETCH_TODAY_W', this.searchCity);
          this.$store.dispatch('FETCH_WEEK_W', this.searchCity);
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
