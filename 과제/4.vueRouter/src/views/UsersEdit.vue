<template>
  <div class="text-xs-center">
      <h1>UsersEdit</h1>
      {{userId}}
  </div>
</template>

<script>
export default {
    computed: {
        userId() {
            return this.$route.params.id
        }
    },
}
</script>