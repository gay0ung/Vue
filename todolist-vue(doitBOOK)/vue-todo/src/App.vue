<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodo="addTodo" />
    <!-- v-on:addTodo="addTodo" App.vue에 있는 함수도 연결시켜 준다. -->
    <TodoList :propsdata="todoItems" />
    <!-- props로 propsdata를통해 값을 TodoList에 전달해준다. -->
    <TodoFooter v-on:removeAll="clearAll" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItmes.push(todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItmes = [];
    }
  },

  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #eee7e798;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>