<template>
  <div class="week-wrap">
    <h2>weeks weather</h2>
    <!-- v-for로 해준다. -->
    <ul>
      <li>
        <p class="todayIs">요일</p>
        <a href="">
          <i class="week-temp">아이콘</i>
          <p class="week-temp">온도</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
li {
  list-style: none;
}
</style>
