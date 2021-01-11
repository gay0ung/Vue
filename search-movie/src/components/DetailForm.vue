<template>
  <div class="media-detail">
    클릭했을때 상세페이지
    {{ detail }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { eventBus } from '../main.js';

export default {
  data() {
    return {
      currentPath: '',
    };
  },
  created() {
    // console.log(this.path);
    eventBus.$on('current-path', path => {
      console.log(path);
      this.currentPath = path;
    });
  },

  computed: {
    ...mapState(['detail']),
  },
  methods: {
    // 영화에서 searchResult했을때 클릭하면 /type을 직접 넣어주고 tv일경우도 그렇게 해준다.
    //
  },
};
</script>

<style></style>
