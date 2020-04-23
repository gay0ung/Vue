<template>
  <ol class="list">
    <li v-for="item in list" v-bind:key="item.id">
      <b>{{ item.time_ago }}</b>
      <span>by {{ item.user }}</span>
      <br />
      <a v-bind:href="item.url" target="blank">{{ item.title }}</a>
      <router-link :to="`/item/${item.id}`">
        <span>( {{ item.comments_count }} )</span>
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
    this.$store.dispatch("FETCH_LIST", "news");
  }
};
</script>

<style>
.list li {
  padding-left: 10px;
  list-style-type: none;
}
.list li + li {
  margin-top: 20px;
}
.list li > a {
  text-decoration: none;
  font-size: 22px;
}
.list li > b {
  font-style: normal;
  font-size: 12px;
  color: #999;
}
.list li span {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #999;
}
.list li i {
  font-style: normal;
  font-size: 12px;
  color: cornflowerblue;
}
</style>
