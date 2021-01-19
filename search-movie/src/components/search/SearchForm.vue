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
// import { saveToCookie } from '@/utils/cookies.js';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  created() {},

  computed: {},
  methods: {
    ...mapMutations(['SET_VALUE', 'BEFORE_PATH']),
    ...mapActions(['FETCH_DATA']),
    submitForm() {
      // const path = this.$route.path;

      if (this.inputValue) {
        // saveToCookie('title', this.inputValue);
        this.SET_VALUE(this.inputValue);

        this.FETCH_DATA({ type: 'multi', title: this.inputValue });

        this.inputValue = '';
        // if (path === '/sList') {
        //   null;
        // } else {
        //   this.$router.push({
        //     name: 'sList',
        //     query: {
        //       path: 'search',
        //     },
        //   });
        // }
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
