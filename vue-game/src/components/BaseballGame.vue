<template>
  <div>
    <h1>숫자야구</h1>
    <p>{{ result }}</p>
    <form action="" @submit.prevent="onSubmitForm">
      <input
        v-model="value"
        ref="answer"
        minlength="4"
        maxlength="4"
        placeholder="4자리숫자를 입력해 주세요."
      />
      <button>입력</button>
    </form>
    <p>시도: {{ tries.length }}</p>
    <ul>
      <li v-for="(t, idx) in tries" :key="idx">
        {{ t.try }}
        {{ t.result }}
      </li>
    </ul>

    <div>
      <h3>게임방법</h3>
      <ul>
        <li>사용되는 숫자는 0에서 9까지 서로 다른 숫자이다.</li>
        <li>숫자는 맞지만 위치가 틀렸을 때는 볼.</li>
        <li>숫자와 위치가 전부 맞으면 스트라이크.</li>
        <li>숫자와 위치가 전부 틀리면 아웃.</li>
      </ul>

      <h4>예시</h4>
      <p>예상한 숫자가 2,1,6,7 일때</p>
      <ul>
        <li>
          830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서
          빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7다.
        </li>
        <li>6572 - 6,7가 있지만 위치가 다르므로 2볼.</li>
        <li>
          1267 - 숫자는 전부 맞지만 위치는 6,7만 맞고 나머지 둘은 다르므로
          2스트라이크 2볼.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRandom } from '../utils/randomMath.js';
export default {
  data() {
    return {
      answer: this.randomNum(),
      tries: [], // 시도 과정
      value: '', //입력
      result: '', // 결과
    };
  },
  methods: {
    onSubmitForm() {
      if (this.value === this.answer.join('')) {
        // 정답일경우에
        this.tries.push({
          try: this.value,
          result: '홈런',
        });
        this.result = '홈런';

        // 전부 초기화 시켜준다.
        alert('한번더 하시겠습니까?');
        this.answer = this.randomNum();
        this.value = '';
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        // 정답이 틀릴경우
        if (this.tries.length >= 9) {
          this.result = `정답은 ${this.answer.join(',')}
          였습니다.!`;
          //초기화
          alert('10번 넘게 시도 했지만 실패! 한번더 하시겠습니까?');
          this.answer = this.randomNum();
          this.value = '';
          this.tries = [];
          this.$refs.answer.focus();
        }

        let strike = 0;
        let ball = 0;
        const answerArr = this.value.split('').map(v => parseInt(v));

        for (let i = 0; i < 4; i += 1) {
          if (answerArr[i] === this.answer[i]) {
            strike++;
          } else if (this.answer.includes(answerArr[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `strike: ${strike} | ball : ${ball}`,
        });
        this.value = '';
        this.$refs.answer.focus();
      }
    },
    randomNum() {
      return getRandom();
    },
  },
};
</script>

<style></style>
