<template>
  <div class="app-header">
    <div class="header-wrap">
      <h1 class="w-logo" v-html="logoSplit()"></h1>
      <SearchForm></SearchForm>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
export default {
  data() {
    return {
      logo: '',
    };
  },
  created() {
    // this.logoSplit();
  },
  components: {
    SearchForm,
  },
  methods: {
    logoSplit() {
      let logo = 'weather'.split('');
      let newEl = [];
      // console.log(logo);
      console.log(document.innerHtml);
      logo.map(str => {
        if (str === 'a') {
          newEl.push(`<span class="newStr" id="aA">${str}</span>`);
        } else {
          newEl.push(`<span class="newStr">${str}</span>`);
        }
      });
      return newEl.join('');
    },
  },
};
</script>

<style></style>
