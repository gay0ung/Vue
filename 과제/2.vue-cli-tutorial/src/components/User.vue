<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    {{ helloToMixin }}
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          :name ="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import { dateFormat } from "../mixins/dateFormat"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data (){
    return {
      name:'Hoza',
      address: 'Seoul',
      phone: '1234-5677',
      hasDog: true,
      createdAt: null,
    }
  },
  computed: {
    helloToMixin(){
      return this.mixData + "안녕하세요!"
    }
  },
  created(){
    console.log('유저 컴포넌트');
    this.createdAt = new Date()
  },
  methods: {
    parents(user){
      //user = {name, address, phone, hasDog}
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
      console.log('부모가 받았어!');
    },
    // getDateAndTime(date){
    //   if(date !== null) {
    //     let hour = date.getHours()
    //     let minutes = date.getMinutes()
    //     let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    //     return `${fullDate} ${hour}:${minutes}`
    //   } else {
    //     return null
    //   }
    // }
  },
  mixins:[dateFormat]
}
</script>