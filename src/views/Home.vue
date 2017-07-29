<template>
  <div class="home">
    <img src="../assets/cordova_256.png" />
    <img src="../assets/vuejs.png" />
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
  .home > img{
    display: inline;
    width: 90px;
    padding: 10px;
  }
</style>
