<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in propsdata" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span
          class="removeBtn"
          type="button"
          @click="removeTodo(todoItem, index)"
        >
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItem.splice(index, 1);
      /*
        removeItem()
        -로컬스토리지의 데이터를 삭제한다.

        splice(index, 1)
        - 특정 인덱스에서 부여한 숫자만큼의 인덱스를 삭제한다.
      
       */
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #16a085;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #e74c3c;
}
</style>