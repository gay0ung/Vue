<template>
  <ol class="list">
    <li v-for="item in list" v-bind:key="item.id">
      <b>{{ item.time_ago }}</b>
      <span> by {{ item.user }}</span
      ><br />
      <a v-bind:href="item.url"
        >{{ item.title }}<i>({{ item.comments_count }})</i></a
      >
    </li>
  </ol>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  created() {
    this.$store.dispatch("FETCH_LIST", "ask");
  },
};
</script>

<style></style>
