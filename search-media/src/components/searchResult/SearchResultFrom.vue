<template>
  <div :class="`search__inr ${searchState}`">
    <template v-if="searchState === 'search' && searchDB">
      <ListForm
        v-for="(result, type) in filterType()"
        :key="type"
        :type="'search'"
        :mType="type"
        :listData="result"
      >
        <template #default="{item}">
          <b class="list__title">{{ item.title || item.name }}</b>
          <span v-if="item.known_for_department">
            {{ item.known_for_department }}
          </span>
        </template>
      </ListForm>
    </template>
    <template v-else-if="searchState === 'keyword' && mediaOfKeyword">
      <ListForm
        :type="'k-search'"
        :mType="'movie'"
        :title="keywordInfo.name"
        :listData="mediaOfKeyword"
      >
        <template #default="{item}">
          <b class="list__title">{{ item.title || item.name }}</b>
        </template>
      </ListForm>
    </template>
    <template v-else>
      <p class="search__none">
        <b>{{ searchState === 'search' ? inputValue : keywordInfo.name }}</b
        >을/를 검색한 결과가 없습니다.
      </p>
    </template>
  </div>
</template>

<script>
// media_type title poster_path name profile_path
import { mapActions, mapState } from 'vuex';
import { checkImages } from '../../utils/imageCheck.js';
import ListForm from '../common/list/ListForm.vue';

export default {
  components: { ListForm },
  data() {
    return {
      searchState: null,
    };
  },
  created() {
    if (!this.searchDB || !this.mediaOfKeyword) {
      this.getDataAgain();
    }
    this.filterType();
  },
  mounted() {
    console.log(this.$route);
    this.searchState = this.$route.query.state;
    this.filterType();
  },
  updated() {
    this.filterType();
  },

  computed: {
    ...mapState(['inputValue', 'searchDB', 'mediaOfKeyword', 'keywordInfo']),
  },
  methods: {
    ...mapActions(['SEARCH_DATA', 'FETCH_MEDIA_OF_KEYWORD']),
    getDataAgain() {
      this.SEARCH_DATA(this.inputValue);
      this.FETCH_MEDIA_OF_KEYWORD({
        type: this.keywordInfo.type,
        id: this.keywordInfo.id,
      });
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
