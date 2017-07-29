<template>
  <div class="home">
    <img class="logo" src="../assets/cordova_256.png" />
    <img class="logo" src="../assets/vuejs.png" />
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'VueJS Cordova Sample'
    }
  }
}
</script>

<style scoped>
  .home{
    text-align: center;
  }
  img.logo{
    display: inline;
    width: 90px;
    padding: 10px;
  }
</style>
