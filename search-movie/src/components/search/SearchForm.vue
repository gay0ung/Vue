<template>
  <div class="Search-form">
    <form @submit.prevent="submitForm">
      <button @click.prevent="openSearchForm" :type="bType">search</button>
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

    openSearchForm(e) {
      const parentCN = e.target.parentNode.classList;
      console.log(e.target);
      if (parentCN.contains('on')) {
        parentCN.remove('on');
        this.bType = 'submit';
        return;
      }

      parentCN.add('on');
      this.bType = 'button';
    },
  },
};
</script>

<style></style>
