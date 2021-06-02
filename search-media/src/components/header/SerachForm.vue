<template>
  <div class="search__form">
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="inputQuery"
        placeholder="영화, Tv프로그램, 인물을 입력해주세요"
      />
      <button type="submit">
        <fa-icon :icon="['fas', 'search']" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

const SHOW = 'show';
export default {
  data() {
    return {
      inputQuery: null,
    };
  },

  computed: {
    ...mapState(['inputValue']),
  },

  methods: {
    ...mapActions(['SEARCH_DATA']),
    ...mapMutations(['SET_VALUE']),
    submitForm(e) {
      const formEl = e.target;
      const inputEl = formEl[0];

      if (formEl.classList.contains(SHOW)) {
        this.$route.name === 'search'
          ? formEl.classList.add(SHOW)
          : formEl.classList.remove(SHOW);
      }

      formEl.classList.add(SHOW);
      setTimeout(() => inputEl.focus(), 800);

      if (this.inputQuery) {
        this.SEARCH_DATA(this.inputQuery);
        this.SET_VALUE(this.inputQuery ?? this.inputValue);

        this.$cookies.set('s-query', this.inputQuery);

        this.inputQuery = null;

        if (
          this.$route.name !== 'search' ||
          this.$route.query.state === 'keyword'
        )
          this.$router.push({ name: 'search', query: { state: 'search' } });
      }
    },
  },
};
</script>

<style lang="scss"></style>
