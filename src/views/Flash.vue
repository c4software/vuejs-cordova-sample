// Require Cordova plugin : cordova-plugin-flashlight
<template>
  <div class="middle-centered">
    <v-btn light v-on:click="toggle">
      {{$t("startFlash")}}
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'flash',
    beforeDestroy(){
      this.switchOff();
    },
    methods: {
      "toggle": () => {
        if (typeof(plugins) !== "undefined" && typeof(window.plugins.flashlight) !== "undefined"){
          window.plugins.flashlight.toggle();
        }
      },
      "switchOff": () => {
        if (typeof(plugins) !== "undefined" && typeof(window.plugins.flashlight) !== "undefined"){
          window.plugins.flashlight.switchOff();
        }
      }
    }
  }
</script>

<style scoped>
</style>
