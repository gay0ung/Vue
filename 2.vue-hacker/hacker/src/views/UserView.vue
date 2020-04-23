<template>
  <div class="user_profile">
    <strong>User name: {{userInfo.id}}</strong>
    <b>Write : {{ userInfo.created }}</b>
    <b>Karma : {{ userInfo.Karma }}</b>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch("FETCH_USER", this.$route.params.id);
  }
};
</script>

<style>
.user_profile strong {
  color: blue;
}
.user_profile > * {
  display: block;
  margin: 10px 0;
  font-weight: bold;
  font-size: 30px;
}
</style>