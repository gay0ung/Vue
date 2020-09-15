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
    {{ getUserCity }}
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
  computed: {
    getUserCity() {
      return this.$store.state.userCity;
    },
  },
  methods: {
    submitForm() {
      if (this.searchCity === '') {
        alert('please wirte on the city name');
      } else {
        this.$store.dispatch('FETCH_TODAY_W', `q=${this.searchCity}`);
        this.$store.dispatch('FETCH_WEEK_W', `q=${this.searchCity}`);
      }

      this.searchCity = '';
    },
  },
};
</script>

<style></style>
