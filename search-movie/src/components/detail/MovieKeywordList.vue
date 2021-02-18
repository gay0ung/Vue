<template>
  <div class="keyword d-list">
    <h3>키워드</h3>
    <template v-if="keywords !== undefined && keywords.length > 0">
      <ul>
        <li v-for="keyword in keywords" :key="keyword.id">
          <button
            type="button"
            @click.prevent="getSimilerMedia(keyword.id, keyword.name)"
          >
            #{{ keyword.name }}
          </button>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>키워드가 없습니다.</p>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['keywords', 'mediaInfo']),
  },
  methods: {
    ...mapActions(['FETCH_KEYWORDS_MEDIA_LIST']),
    getSimilerMedia(id, keyword) {
      console.log('this work!');
      const { type } = this.mediaInfo;
      this.FETCH_KEYWORDS_MEDIA_LIST({
        id: id,
        type: type === 'movie' ? 'movies' : type,
      });

      this.$router.push({
        name: 'sList',
        query: { path: 'keyword', name: keyword },
      });
    },
  },
};
</script>

<style></style>
