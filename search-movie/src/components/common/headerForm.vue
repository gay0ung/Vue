<template>
  <div class="app-header">
    <h1 class="h-logo"><router-link to="/">YOUNGFLIX</router-link></h1>
    <nav>
      <ul class="h-nav">
        <li><router-link to="/tv">TV프로그램</router-link></li>
        <li><router-link to="/movie">영화</router-link></li>
      </ul>
    </nav>
    <div class="search-genres">
      <button class="genres-btn" @click="openTheList">장르별검색</button>
      <ul class="genres-wrap">
        <li v-for="(genre, i) in getGenreList()" :key="i">
          <button @click="selectedGenre(genre)">{{ genre.name }}</button>
        </li>
      </ul>
    </div>
    <SearchForm></SearchForm>
  </div>
</template>

<script>
import SearchForm from '@/components/search/SearchForm.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    SearchForm,
  },
  created() {
    this.FETCH_GENRES_LIST('movie');
    this.FETCH_GENRES_LIST('tv');
  },
  computed: {
    ...mapState(['mGenreList', 'tGenreList']),
  },

  methods: {
    ...mapActions(['FETCH_GENRES_LIST', 'FETCH_MEDIA_ALL_LIST']),
    getGenreList() {
      const genreList = [...this.tGenreList, ...this.mGenreList];
      return genreList;
    },
    selectedGenre(genre) {
      console.log(genre.id);
      this.FETCH_MEDIA_ALL_LIST('movie');
    },
    openTheList(e) {
      let genreCN = e.target.nextSibling.classList;
      genreCN.contains('on') ? genreCN.remove('on') : genreCN.add('on');
    },
  },
};
</script>

<style></style>
