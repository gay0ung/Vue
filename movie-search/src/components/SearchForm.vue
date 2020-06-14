<template>
  <div class="wrap search">
    <!-- <form class="bgImg"><div></div></form> -->
    <form class="form" @submit.prevent="submitForm">
      <select v-model="selected">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          >{{ option.text }}</option
        >
        <input type="text" />
      </select>
      <input
        type="text"
        id="title-input"
        v-model="inputQuery"
        :placeholder="placeholder"
      />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>

<script>
// import { searchMovie } from '@/api/index.js';
export default {
  data() {
    return {
      inputQuery: '',
      title: '', // 영화 제목
      selected: 'title',
      options: [
        {
          text: 'title',
          value: 'title',
        },
        {
          text: 'director',
          value: 'director',
        },
        {
          text: 'keyword',
          value: 'keyword',
        },
      ],
    };
  },
  computed: {
    placeholder() {
      return ` Please enter a ${this.selected}`;
    },
  },
  methods: {
    submitForm() {
      // query를 받을경우에만 처리, 빈값을 경우에는 이동 하지 않는다.
      if (this.inputQuery) {
        // store에 inputQuery값 저장
        this.$store.commit('SET_TITLE', this.inputQuery);

        this.$store.commit('SET_OPTION', this.selected);

        this.title = '';

        this.$router.push('/movieInfo');

        console.log('search');
      }
    },
  },
};
</script>

<style></style>
