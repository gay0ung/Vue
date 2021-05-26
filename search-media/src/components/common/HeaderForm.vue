<template>
  <div class="header__inr">
    <h1 class="h__logo"><router-link to="/home">YOUNG FLIX</router-link></h1>
    <nav class="h__nav">
      <ul>
        <li>
          <router-link to="/movie">영화</router-link>
        </li>
        <li>
          <router-link to="/tv">tv프로그램</router-link>
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
};
</script>

<style lang="scss">
@import './headerStyle.scss';
</style>
