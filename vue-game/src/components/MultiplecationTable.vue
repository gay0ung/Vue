<template>
  <div>
    <h1>구구단</h1>
    <p>{{ first }} x {{ second }} ?</p>
    <form action="" @submit.prevent="onSubmitFrom">
      <input type="number" v-model="value" ref="answer" />
      <button type="submit">정답보기</button>
    </form>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: null,
      result: null,
    };
  },
  methods: {
    onSubmitFrom() {
      const first = this.first;
      const second = this.second;
      const value = Number(this.value);

      if (first * second === value) {
        this.result = '정답입니다🎉';

        (this.first = Math.ceil(Math.random() * 9)),
          (this.second = Math.ceil(Math.random() * 9)),
          (this.value = '');
        this.$refs.answer.focus();
      } else {
        this.result = '다시 도전해 보세요!..😓';
        this.value = '';
        this.$refs.answer.focus();
      }
    },
  },
};
</script>

<style></style>
