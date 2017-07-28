<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Sample'
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
