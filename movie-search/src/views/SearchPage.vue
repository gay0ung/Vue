<template>
  <div>
    <SearchForm></SearchForm>
    <GenreSearchForm></GenreSearchForm>
  </div>
</template>

<script>
import SearchForm from '@/components/search/SearchForm.vue';
import GenreSearchForm from '@/components/search/GenreSearchForm.vue';
export default {
  components: {
    SearchForm,
    GenreSearchForm,
  },
};
</script>

<style></style>
