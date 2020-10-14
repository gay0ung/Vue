<template>
  <div>
    <h1>끝말잇기</h1>
    <p>{{ word }}</p>
    <form action="" @submit.prevent="onSubmitForm">
      <input
        type="text"
        placeholder="한글로 입력해 주세요."
        v-model="input"
        ref="answer"
      />
      <button type="submit">입력</button>
    </form>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: '장수',
      result: '',
      input: ' ',
    };
  },
  methods: {
    onSubmitForm() {
      const word = this.word;
      const input = this.input;
      console.log('works!');
      if (word[word.length - 1] === input[0]) {
        this.result = '정답🎉';
        this.word = this.input;
        this.input = '';
        this.$refs.answer.focus();
      } else {
        this.result = '땡😓';
        this.input = '';
        this.$refs.answer.focus();
      }
    },
  },
};
</script>

<style></style>
