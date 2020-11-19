<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm">
      <div class="option-box">
        <select v-model="inputOption">
          <option v-for="(opt, idx) in options" :key="idx">
            {{ opt.textEn }}
          </option>
        </select>
      </div>
      <input type="text" v-model="inputValue" :placeholder="placeholder" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { saveToCookie } from '@/utils/cookies.js';
export default {
  data() {
    return {
      inputValue: null,
      inputOption: 'title',
      options: [
        {
          text: '제목',
          textEn: 'title',
        },
        {
          text: '감독',
          textEn: 'director',
        },
        {
          text: '키워드',
          textEn: 'keyword',
        },
        {
          text: '장르',
          textEn: 'genres',
        },
      ],
    };
  },
  computed: {
    placeholder() {
      return `${
        this.inputOption === 'title'
          ? '제목을'
          : this.inputOption === 'director'
          ? '감독을'
          : this.inputOption === 'keyword'
          ? '키워드를'
          : '장르를'
      } 입력해주세요`;
    },
  },
  methods: {
    ...mapMutations(['SET_VALUE']),
    ...mapActions(['FETCH_DATA']),
    submitForm() {
      if (this.inputValue) {
        saveToCookie('movie-title', this.inputValue);
        this.SET_VALUE(this.inputValue);
        this.FETCH_DATA(this.inputValue);

        this.inputValue = null;
        this.$router.push('/mList'); // 검색결과 페이지 이동.
      }
    },
  },
};
</script>

<style></style>
