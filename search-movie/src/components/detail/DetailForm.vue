<template>
  <div class="media-detail">
    <!-- 영화인경우 -->
    <template
      v-if="beforePath === '/movie' || this.$route.query.path === 'movie'"
    >
      영화보여지는곳
      <div class="hero-image">
        <img :src="checkPoster(detail.backdrop_path)" width="30%" />
      </div>
      <div class="poster">
        <img :src="checkPoster(detail.poster_path)" width="30%" />
      </div>
      <div class="sort-of-media">
        <h3 class="title">{{ detail.title }}</h3>
        <p class="title en">{{ detail.original_title }}</p>
        <!-- <span class="release-date">{{
          detail.release_date.substring(0, 4)
        }}</span> -->
        <span>{{ checkingVoteAverage(detail.vote_average) }}</span>
        <ul class="genres">
          <li v-for="genre in detail.genres" :key="genre.id">
            {{ genre.name }}
          </li>
        </ul>
      </div>
      <div class="media-contents">
        <p class="overview">
          {{ detail.overview }}
        </p>
      </div>
    </template>
    <!-- tv인 경우 -->
    <template v-else>
      티비 프로그램
      <!--  tv 인 경우에는 에피소드 id가 있으면 for문으로 보여준다. -->
    </template>

    {{ detail }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { checkPoster } from '@/utils/mList.js';

export default {
  data() {
    return {
      currentPath: '',
    };
  },
  created() {
    // https://developers.themoviedb.org/3/movies/get-similar-movies
    // 클릭했을경우 비슷한 영화 추천해주는
  },

  computed: {
    ...mapState(['detail', 'beforePath']),
  },
  methods: {
    checkPoster(path) {
      return checkPoster(path);
    },
    checkingVoteAverage(num) {
      return num;
    },
  },
};
</script>

<style></style>
