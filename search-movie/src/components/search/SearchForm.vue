<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm">
      <button type="submit"><i class="fas fa-search"></i></button>
      <input
        type="text"
        v-model="inputValue"
        placeholder="영화, Tv프로그램, 인물을 입력해주세요"
      />
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  created() {},

  computed: {},
  methods: {
    ...mapActions(['FETCH_DATA']),
    ...mapMutations(['SET_VALUE']),
    submitForm() {
      if (this.inputValue) {
        this.SET_VALUE(this.inputValue);
        this.FETCH_DATA(this.inputValue);

        this.inputValue = '';

        this.$router.push({
          name: 'sList',
          query: {
            path: 'search',
            name: '',
            type: '',
          },
        });
      }
    },
  },
};
</script>

<style></style>
