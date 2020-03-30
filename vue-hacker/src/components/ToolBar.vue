<template>
  <header>
      <!-- a 와 같은 기능 -->
      <router-link to="/news">News</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/jobs">Jobs</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header {
        position: relative;
        padding:20px 30px;
        background:black;
        font-size:24px;
        border-bottom:8px solid lime;
    }
    header h1 {position: absolute; color:white; top:21px; right:30px; font-size:18px;}
    header a {color:white; text-decoration: none; padding-bottom:3px; }
    header a + a {margin-left:20px}
    header .active {
        color:coral;
        border-bottom:3px solid coral
    }
</style>