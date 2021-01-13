<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="inputValue"
        placeholder="제목, 키워드, 인물을 입력해주세요"
      />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { saveToCookie } from '@/utils/cookies.js';
// import { evnetBus } from '../../main.js';

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
      const path = this.$route.path;
      console.log(path);
      this.BEFORE_PATH(path.replace('/', ''));

      if (this.inputValue) {
        saveToCookie('title', this.inputValue);
        this.SET_VALUE(this.inputValue);

        path === '/main'
          ? this.FETCH_DATA({ type: 'multi', title: this.inputValue })
          : path === '/tv'
          ? this.FETCH_DATA({ type: 'tv', title: this.inputValue })
          : this.FETCH_DATA({ type: 'movie', title: this.inputValue });

        this.inputValue = '';

        this.$router.push('/sList');
      }
    },
  },
};
</script>

<style></style>
