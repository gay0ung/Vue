<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm">
      <button type="submit"><i class="fas fa-search"></i></button>
      <input
        type="text"
        v-model="inputValue"
        placeholder="제목, 키워드, 인물을 입력해주세요"
      />
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { saveToCookie } from '@/utils/cookies.js';

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

      this.BEFORE_PATH(path.replace('/', ''));

      if (this.inputValue) {
        saveToCookie('title', this.inputValue);
        this.SET_VALUE(this.inputValue);

        this.FETCH_DATA({ type: 'multi', title: this.inputValue });
        // this.FETCH_DATA({ type: 'person', title: this.inputValue });

        this.inputValue = '';
        if (path === '/sList') {
          null;
        } else {
          this.$router.push('/sList');
        }
      }
    },
  },
};
</script>

<style></style>
