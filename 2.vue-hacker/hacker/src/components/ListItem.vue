<template>
  <ol class="list">
    <li v-for="item in list" v-bind:key="item.id">
      <b>{{ item.time_ago }}</b>
      <!-- username -->
      <span>
        by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </span>
      <br />
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <router-link :to="`/item/${item.id}`">
        <span>({{ item.comments_count }})</span>
      </router-link>
    </li>
  </ol>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  created() {
    this.$store.dispatch("FETCH_LIST", this.$route.name);
    localStorage.setItem("nav", this.$route.name);
  }
};
</script>

<style>
</style>