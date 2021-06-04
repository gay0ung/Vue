<template>
  <div class="header__inr">
    <h1 class="h__logo"><router-link to="/home">YOUNG FLIX</router-link></h1>
    <nav class="h__nav">
      <ul ref="ulEl" @click.prevent="handleClicked">
        <li>
          <router-link id="movie" to="/movie">영화</router-link>
        </li>
        <li>
          <router-link id="tv" to="/tv">tv프로그램</router-link>
        </li>
      </ul>
    </nav>
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from './SerachForm';

export default {
  components: { SearchForm },
  data() {
    return {
      curRoute: null,
    };
  },

  updated() {
    // this.handleClicked();
  },
  mounted() {
    // this.handleClicked();
  },
  methods: {
    handleClicked() {
      const CHECKED = 'checked';
      const ulEl = this.$refs.ulEl;
      const liEls = [...ulEl.children];
      return liEls.map(el =>
        this.$route.name === el.firstChild.id
          ? el.firstChild.classList.add(CHECKED)
          : el.firstChild.classList.remove(CHECKED),
      );
    },
  },
};
</script>

<style lang="scss">
@import './headerStyle.scss';
</style>
