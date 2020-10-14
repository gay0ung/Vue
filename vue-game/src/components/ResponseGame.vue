<template>
  <div class="response-wrap">
    <div id="screen" :class="state" @click="onClickScreen">
      {{ message }}
    </div>
    <div class="time-state" v-if="result.length">
      <p>평균 시간 : {{ average }}ms</p>
      <button type="button" @click="onReset" :class="state"></button>
    </div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
  data() {
    return {
      result: [],
      state: 'waiting',
      message: '클릭해서 시작하세요',
    };
  },
  computed: {
    average() {
      return this.result.reduce((a, b) => a + b, 0) / this.result.length || 0;
    },
  },
  methods: {
    onReset() {
      this.result = [];
    },

    onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = '초록색이 되면 클릭 하세요!';
        timeout = setTimeout(() => {
          this.state = 'now';
          this.message = '지금 클릭!';
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
      } else if (this.state === 'ready') {
        clearTimeout(timeout);
        this.state = 'waiting';
        this.message = '너무 빨라요.. 초록색이 되면 다시 클릭 하세요!';
      } else if (this.state === 'now') {
        endTime = new Date();
        this.state = 'waiting';
        this.message = '클릭해서 시작하세요.';
        this.result.push(endTime - startTime);
      }
    },
  },
};
</script>

<style></style>
