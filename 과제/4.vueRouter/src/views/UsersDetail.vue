<template>
  <div class="text-xs-center">
    <h1>usersDetail</h1>
    <P>유저 번호: {{ userId }}</P>
    <v-btn @click="edit" small>수정</v-btn>
    
  </div>
</template>
<script>
export default {
    computed: {
        userId() {
            return this.$route.params.id
        }
    },
    methods: {
        edit() {
            // this.$router.push({name:'users-edit'})
            this.$router.push({path:`${this.userId}/edit`})
        }
    }
}
</script>