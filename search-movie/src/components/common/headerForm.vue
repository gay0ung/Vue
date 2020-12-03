<template>
  <div class="app-header">
    <h1 class="h-logo"><router-link to="/">YOUNGFLIX</router-link></h1>
    <nav>
      <ul class="h-nav">
        <li><router-link to="/tv">TV프로그램</router-link></li>
        <li><router-link to="/movie">영화</router-link></li>
      </ul>
    </nav>
    <SearchForm></SearchForm>
  </div>
</template>

<script>
import SearchForm from '@/components/search/SearchForm.vue';
export default {
  components: {
    SearchForm,
  },
};
</script>

<style></style>
