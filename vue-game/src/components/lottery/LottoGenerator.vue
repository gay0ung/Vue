<template>
  <div class="lotto-wrap">
    <p id="result-num">당첨 숫자</p>
    <div id="result">
      <LottoBall
        v-for="ball in winBalls"
        :key="ball"
        :number="ball"
      ></LottoBall>
    </div>
    <p id="bonus-num">보너스</p>
    <i class="fas fa-plus" v-show="bonus"></i>
    <div id="bonus">
      <LottoBall v-show="bonus" :number="bonus" id="bonus"></LottoBall>
    </div>

    <button type="buttom" v-if="redo" @click="onClickBTN">한 번 더!</button>
  </div>
</template>

<script>
import LottoBall from './LottoBall.vue';
import { getWinNumbers } from '../utils/Lotto.js';

const timeouts = [];
export default {
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  components: {
    LottoBall,
  },
  methods: {
    onClickBTN() {
      console.log();
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }

      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    },
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    timeouts.forEach(t => {
      clearTimeout(t);
    });
  },
};
</script>

<style></style>
