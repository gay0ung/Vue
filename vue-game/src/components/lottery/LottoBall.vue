<template>
  <div class="ball" :style="styleObj">{{ number }}</div>
</template>

<script>
export default {
  name: 'LottoBall',
  props: {
    number: Number,
  },
  computed: {
    styleObj() {
      let background;
      this.number <= 10
        ? (background = 'rgba(252, 92, 101,1.0)')
        : this.number <= 20
        ? (background = 'rgba(253, 150, 68,1.0)')
        : this.number <= 30
        ? (background = 'rgba(254, 211, 48,1.0)')
        : this.number <= 40
        ? (background = 'rgba(38, 222, 129,1.0)')
        : (background = 'rgba(43, 203, 186,1.0)');

      return { background };
    },
  },
};
</script>

<style></style>
