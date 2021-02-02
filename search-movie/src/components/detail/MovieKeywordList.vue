<template>
  <div class="list keyword">
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
    ...mapState(['keywords']),
  },
  methods: {
    ...mapActions(['FETCH_KEYWORDS_MEDIA_LIST']),
    getSimilerMedia(id) {
      console.log('this work!');
      const type = this.$route.query.path;

      this.FETCH_KEYWORDS_MEDIA_LIST({
        id: id,
        type: type === 'movie' ? 'movies' : type,
      });

      this.$router.push({ name: 'sList' });
    },
  },
};
</script>

<style></style>
