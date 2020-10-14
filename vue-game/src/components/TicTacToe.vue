<template>
  <div>
    <h1>⚪ Tic Tac Toe ⚫</h1>
    <p id="turn">
      <span>'{{ turn }}'</span>님의 순서 입니다.
    </p>

    <!-- 오목판 -->
    <table>
      <tr v-for="(rowData, rowIndex) in ticTacToeData" :key="rowIndex">
        <td
          @click="onClickTd(rowIndex, cellIndex)"
          v-for="(cellData, cellIndex) in rowData"
          :key="cellIndex"
        >
          {{ cellData }}
        </td>
      </tr>
    </table>

    <p v-show="winner" id="winner">
      <span>'{{ winner }}'</span>님이 이겼습니다🎉
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  SET_WINNER,
  CLICK_CELL,
  CHANGE_TURN,
  RESET_GAME,
  NO_WINNER,
} from '../store/index.js';

export default {
  computed: {
    ...mapState(['winner', 'turn', 'ticTacToeData']),
  },
  methods: {
    onClickTd(rowIndex, cellIndex) {
      if (this.ticTacToeData[rowIndex][cellIndex]) return;

      this.$store.commit(CLICK_CELL, {
        row: rowIndex,
        cell: cellIndex,
      });

      let win = false;
      if (
        this.ticTacToeData[rowIndex][0] === this.turn &&
        this.ticTacToeData[rowIndex][1] === this.turn &&
        this.ticTacToeData[rowIndex][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.ticTacToeData[0][cellIndex] === this.turn &&
        this.ticTacToeData[1][cellIndex] === this.turn &&
        this.ticTacToeData[2][cellIndex] === this.turn
      ) {
        win = true;
      }
      if (
        this.ticTacToeData[0][0] === this.turn &&
        this.ticTacToeData[1][1] === this.turn &&
        this.ticTacToeData[2][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.ticTacToeData[0][2] === this.turn &&
        this.ticTacToeData[1][1] === this.turn &&
        this.ticTacToeData[2][0] === this.turn
      ) {
        win = true;
      }
      if (win) {
        // 이긴 경우: 3줄 달성
        this.$store.commit(SET_WINNER, this.turn);
        this.$store.commit(RESET_GAME);
      } else {
        // 무승부
        let all = true; // all이 true면 무승부라는 뜻
        this.ticTacToeData.forEach(row => {
          // 무승부 검사
          row.forEach(cell => {
            if (!cell) {
              all = false;
            }
          });
        });
        if (all) {
          // 무승부
          this.$store.commit(NO_WINNER);
          this.$store.commit(RESET_GAME);
        } else {
          this.$store.commit(CHANGE_TURN);
        }
      }
    },
  },
};
</script>

<style></style>
