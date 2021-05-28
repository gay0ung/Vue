<template>
  <div class="search__inr">
    <div v-for="(result, type) in filterType()" :key="type">
      <ListForm :type="'search'" :listData="result" />
      <!-- <h3 class="search__title">{{ type }}</h3>
      <ul class="search__type__wrap">
        <li v-for="item in result" :key="item.id">
          <div
            class="search__poster"
            :style="{
              backgroundImage: `url(${checkImages(
                item.poster_path || item.profile_path,
              )})`,
            }"
          >
            <span v-if="!item.poster_path && !item.profile_path">
              {{ item.media_type === 'person' ? 'NO IMAGE' : 'NO POSTER' }}
            </span>
          </div>
          <b class="search__title">{{ item.title || item.name }}</b>
          <span v-if="item.known_for_department">
            {{ item.known_for_department }}
          </span>
        </li>
      </ul> -->
    </div>
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
      this.againData();
    }
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
    againData() {
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
