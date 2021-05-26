<template>
  <div class="search__form">
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="inputValue"
        placeholder="영화, Tv프로그램, 인물을 입력해주세요"
      />
      <button :type="btnType" @click.prevent="showSearchForm">
        <fa-icon :icon="['fas', 'search']" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

const SHOW = 'show';
export default {
  data() {
    return {
      inputValue: null,
      btnType: 'button',
    };
  },

  created() {},

  methods: {
    ...mapMutations(['SET_VALUE']),
    submitForm() {
      if (this.inputValue) {
        this.SET_VALUE(this.inputValue);
        this.$cookies.set('s-query', this.inputValue);

        this.inputValue = null;

        if (this.$route.path !== '/search') {
          this.$router.push('/search');
        }
      }
    },

    showSearchForm() {
      const formEl = this.$el.firstChild;
      const inputEl = this.$el.firstChild[0];

      switch (formEl.classList.contains(SHOW)) {
        case true:
          if (this.inputValue) {
            if (this.$route.path !== '/search') {
              formEl.classList.add(SHOW);
              this.$router.push('/search');
            } else {
              formEl.classList.add(SHOW);
            }
          } else {
            formEl.classList.remove(SHOW);
            this.inputValue = null;
          }
          return;
        case false:
          formEl.classList.add(SHOW);
          setTimeout(() => inputEl.focus(), 800);
          this.btnType = 'submit';
          return;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss"></style>
