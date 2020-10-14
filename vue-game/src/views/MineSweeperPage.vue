<template>
  <div>
    <MineForm></MineForm>
    <p>{{ timer }}</p>
    <TableComponent></TableComponent>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import MineForm from '@/components/mine-swiper/MineForm.vue';
import TableComponent from '@/components/mine-swiper/TableComponent.vue';

import { mapState } from 'vuex';
import { INCREMENT_TIMER } from '../store/index.js';

let interval; // 메모리 누수를 막기 위해서 처음에 정의 해준다.

export default {
  components: {
    MineForm,
    TableComponent,
  },
  computed: {
    ...mapState(['timer', 'result', 'halted']),
  },
  methods: {},
  watch: {
    // 통제된 환경에서는 사용해도 된다.
    halted(value) {
      if (value === false) {
        // false 일때 게임 시작
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    },
  },
};
</script>

<style></style>
