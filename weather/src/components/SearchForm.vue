<template>
  <div class="search-cont">
    <form @submit.prevent="submitForm">
      <button type="submit"><i class="fas fa-search-location"></i></button>
      <input
        type="text"
        v-model="searchCity"
        placeholder="Please write the city name in English"
      />
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
      if (this.searchCity === '') {
        alert('please wirte on the city name');
      } else {
        this.$store.dispatch('FETCH_TODAY_W', this.searchCity);
        this.$store.dispatch('FETCH_WEEK_W', this.searchCity);
      }

      this.searchCity = '';
    },
  },
};
</script>

<style></style>
