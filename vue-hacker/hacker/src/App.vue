<template>
  <div id="app">
    <!-- component이름 / 이안에 다 들어온다. -->
    <tool-bar />
    <router-view />
  </div>
</template>
<script>
import ToolBar from "./components/ToolBar";

export default {
  // 지역변수로 사용하기 위해서는 components로 등록 한다.
  components: { ToolBar } //지역 컴포넌트다.
};
</script>
<style>
body {
  font-family: "Playfair Display", serif;
  font-size: 18px;
  padding: 0;
  margin: 0;
}
a {
  color: black;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
p + p {
  margin-top: 20px;
}
#app {
  padding: 0 20px;
}
.content {
  padding: 30px 20px;
}
</style>
