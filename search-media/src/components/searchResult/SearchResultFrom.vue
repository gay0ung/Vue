<template>
  <div class="search__inr">
    검색 결과
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.state.inputValue);
  },
};
</script>

<style></style>
