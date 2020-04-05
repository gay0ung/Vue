<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-title>
        <v-list-title-content>이름</v-list-title-content>
        <v-list-title-content class="align-end">
          {{ name }}
          </v-list-title-content>
      </v-list-title>
      <v-list-title>
        <v-list-title-content>주소</v-list-title-content>
        <v-list-title-content class="align-end">
          {{ address }}
          </v-list-title-content>
      </v-list-title>
      <v-list-title>
        <v-list-title-content>전화번호</v-list-title-content>
        <v-list-title-content class="align-end">
          {{ phone }}
          </v-list-title-content>
      </v-list-title>
      <v-list-title>
        <v-list-title-content>반려견유무</v-list-title-content>
        <v-list-title-content class="align-end">
          {{ hasDog }}
          </v-list-title-content>
      </v-list-title>
      <v-list-title>
        <v-list-title-content>수정일자:</v-list-title-content>
        <v-list-title-content class="align-end">
          {{ getDateAndTime(editedDate) }}
          </v-list-title-content>
      </v-list-title>
    </v-list>
  </div>
</template>
<script>
import { eventBus } from "../main"
import { dateFormat } from '../mixins/dateFormat'
export default {
  data() {
    return {
      editedDate : null
    }
  },
  props: ["name", "address", "phone", "hasDog"],
  computed : {
    hasDogKr() {
      return this.hasDog === ture ? '있음' : '없음' 
    }
  },
  created() {
    console.log('유저 디테일 컴포넌트');
    eventBus.$on('userWasEdited', (date) => {
      this.editedDate = date
    })  
  },
  methods: {
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
  mixins: [dateFormat]
}
</script>