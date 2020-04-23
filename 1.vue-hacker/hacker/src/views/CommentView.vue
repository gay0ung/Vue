<template>
  <div class="commentBox">
    <b>by {{ comments.user }}</b>
    <span>- {{ comments.time_ago }}</span>
    <h1>{{ comments.title }}</h1>
    <span v-html="comments.content" class="askContent"></span>
    <ol class="list">
      <li v-for="item in commentContents" v-bind:key="item.id">
        <!-- {{ item}} -->
        <b>by {{ item.user }}</b>
        <span v-html="item.content"></span>
        <!--{{}}안에는 문자열로 들어감. 따라서 html태그명까지 적힌 그대로 출력됨. 따라서, html코드들이 적용되어서 출력되게 하려면 v-html디렉티브를 사용해야 한다. -->
        <!-- <span>{{ item.content }}</span> -->
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    comments() {
      //댓글듯 감싸고 있는 상위부분.
      return this.$store.state.commentlist;
    },
    commentContents() {
      //댓글들
      return this.$store.state.commentlist.comments;
    }
  },
  created() {
    const commIdNum = this.$route.params.id;
    this.$store.dispatch("FETCH_COMMENT", commIdNum);
  }
};
</script>

<style>
.commentBox {
  padding-top: 50px;
  background-color: rgb(250, 241, 223);
}
.commentBox > b {
  margin-left: 50px;
  color: #353434;
}
.commentBox > span {
  color: #353434;
}
.commentBox > h1 {
  margin-left: 50px;
  color: #353434;
}
.commentBox > .askContent > p {
  padding: 0 40px;
}

.commentBox > ol {
  margin: 0 50px;
  color: #353434;
}
</style>