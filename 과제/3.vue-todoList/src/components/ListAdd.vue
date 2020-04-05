<template>
    <div>
       <!-- 텍스트 필드 -->
        <v-textarea
          outlined
          v-model="memo"
          label="투두리스트를 입력해주세요."
          value=""
        ></v-textarea>
       <!-- 추가 버튼 -->
       <v-btn v-if="mode ==='add'" @click="ListAdd">리스트 추가</v-btn>
       <v-btn v-else @click="ListEdit">리스트 수정</v-btn>
    </div>
</template>

<script>
import { eventBus } from "../main"
export default {
    data() {
        return {
            memo:null,
            index:null,
            mode:'add'
        }
    },
    created(){
        eventBus.$on('listEdit',( memo, index) =>{
            this.memo = memo
            this.index = index
            this.mode ='edit'
        })
    },
    methods: {
        ListAdd(){
            if(this.memo === null) {
                alert("할일을 입력해주세요")
            } else {
                this.$emit("ListAdd", this.memo)
                this.memo = null
            }  
        },
        ListEdit(){
            if(this.memo === null) {
                alert("할일을 입력해주세요")
            } else {
                this.$emit("ListEdit", this.memo, this.index)
                this.memo = null
                this.mode = 'add'
            }  
        }
    }
 }
</script>