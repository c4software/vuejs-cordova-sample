<template>
  <div class="middle-centered">
    <div class="home">
      <img class="logo" src="../assets/cordova_256.png" />
      <img class="logo" src="../assets/vuejs.png" />
      <h4>{{$t("title")}}</h4>
      <v-btn @click.native.stop="openMenu">{{$t("showSample")}}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    openMenu: () => {
      // Not the best way… but i don’t wan’t vuex/store dependencie to this project!
      document.getElementsByClassName("toolbar__side-icon")[0].click();
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
