<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm" :ref="searchForm">
      <button @click.prevent="openSearchForm" :type="bType">
        <font-awesom-icon :icon="['fas', 'search']" :style="iconStyle" />
      </button>
      <input
        type="text"
        v-model="inputValue"
        placeholder="영화, Tv프로그램, 인물을 입력해주세요"
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
      iconStyle: {
        color: 'white',
        width: '100%',
        height: '60%',
      },
    };
  },
  created() {},

  computed: {},
  methods: {
    ...mapActions(['FETCH_DATA']),
    ...mapMutations(['SET_VALUE']),
    submitForm() {
      if (this.inputValue) {
        this.SET_VALUE(this.inputValue);
        this.FETCH_DATA(this.inputValue);

        this.inputValue = '';

        this.$router.push({
          name: 'sList',
          query: {
            path: 'search',
            name: '',
            type: '',
          },
        });
      }
    },

    openSearchForm() {
      const searchForm = this.$el.classList;
      console.log(searchForm);

      if (searchForm.contains('on')) {
        searchForm.remove('on');
        this.bType = 'submit';
        return;
      }

      searchForm.add('on');
      this.bType = 'button';
      return;
    },
  },
};
</script>

<style></style>
