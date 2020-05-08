<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="Type what you have to do"
      @keyup.enter="addTodo"
    />
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        // trim() -> 문자열 좌우에서 공백을 제거하는 함수

        // App.vue와 연결하기 위해 (이벤트 전달 받기 위해) 사용
        this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: center;
}
</style>