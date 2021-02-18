<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm">
      <button @click.prevent="openSearchForm" :type="bType">
        <font-awesom-icon :icon="['fas', 'search']" />
      </button>
      <input
        type="text"
        v-model="inputValue"
        placeholder="영화, Tv프로그램, 인물을 입력해주세요"
        ref="input"
      />
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      inputValue: '',
      bType: 'button',
    };
  },
  methods: {
    ...mapActions(['FETCH_DATA']),
    ...mapMutations(['SET_VALUE']),
    submitForm() {
      if (this.inputValue) {
        this.SET_VALUE(this.inputValue);
        this.FETCH_DATA(this.inputValue);

        this.inputValue = '';

        if (this.$route.name !== 'sList')
          this.$router.push({ name: 'sList', query: { path: 'search' } });
      }
    },

    openSearchForm() {
      const searchForm = this.$el.classList;

      if (searchForm.contains('on')) {
        searchForm.remove('on');
        this.bType = 'submit';

        return;
      }

      setTimeout(() => {
        this.$refs.input.focus();
      }, 2000);

      searchForm.add('on');
      this.bType = 'button';

      return;
    },
  },
};
</script>

<style></style>
