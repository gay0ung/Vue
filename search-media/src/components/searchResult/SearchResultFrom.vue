<template>
  <div class="search__inr">
    <ListForm
      v-for="(result, type) in filterType()"
      :key="type"
      :state="'search'"
      :type="type"
      :listData="result"
    />
  </div>
</template>

<script>
// media_type title poster_path name profile_path
import { mapActions, mapState } from 'vuex';
import { checkImages } from '../../utils/imageCheck.js';
import ListForm from '../common/list/ListForm.vue';

export default {
  components: { ListForm },
  created() {
    if (!this.searchDB) {
      this.getDataAgain();
    }
    this.filterType();
  },
  mounted() {
    this.filterType();
  },
  updated() {
    this.filterType();
  },

  computed: {
    ...mapState(['inputValue', 'searchDB']),
  },
  methods: {
    ...mapActions(['SEARCH_DATA']),
    getDataAgain() {
      this.SEARCH_DATA(this.inputValue);
    },
    filterType() {
      const serachResult = this.searchDB;

      if (this.searchDB) {
        const filterArr = serachResult.reduce((a, b) => {
          const key = b.media_type;

          if (!a[key]) a[key] = [];
          a[key].push(b);
          return a;
        }, {});

        return filterArr;
      }
    },
    checkImages(path) {
      return checkImages(path);
    },
  },
};
</script>

<style lang="scss">
@import './searchResultStyle.scss';
</style>
