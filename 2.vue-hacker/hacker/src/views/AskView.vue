<template>
  <ol class="list">
    <li v-for="item in list" v-bind:key="item.id">
      <b>{{ item.time_ago }}</b>
      <span>by {{ item.user }}</span>
      <br />
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <router-link :to="`/item/${item.id}`">
        <span>({{ item.comments_count }})</span>
      </router-link>
    </li>
  </ol>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios.get("https://api.hnpwa.com/v0/ask/1.json").then(res => {
      this.list = res.data;
    });
  }
};
</script>

<style></style>
