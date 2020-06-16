<template>
  <div class="genre-wrap">
    <div class="genre-btn">
      <button
        @click="selected('genre', item)"
        v-for="(item, index) in genres"
        :key="index"
      >
        {{ item }}
      </button>
    </div>
    <h3>영화 장르를 선택해 주세요.</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        '로맨스',
        '스릴러',
        '애니메이션',
        '공포',
        '드라마',
        '판타지',
        '액션',
        'SF',
      ],
    };
  },
  methods: {
    selected(select, item) {
      this.$store.commit('SET_TITLE', item);
      this.$store.commit('SET_OPTION', select);

      this.$router.push('/movieInfo');
    },
  },
};
</script>

<style></style>
