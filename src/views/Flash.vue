// Require Cordova plugin : cordova-plugin-flashlight
// TODO Change the button title
<template>
  <div class="middle-centered">
    <v-btn v-on:click="toggle">{{ btnTitle }}</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'flash',
    mounted(){
      this.setBtnTitle()
    },
    beforeDestroy(){
      this.switchOff();
    },
    data: () => {
      return {
        btnTitle: ""
      }
    },
    methods: {
      pluginInstalled() {
        return (typeof(plugins) !== "undefined" && typeof(window.plugins.flashlight) !== "undefined");
      },
      toggle() {
        if (this.pluginInstalled()){
          window.plugins.flashlight.toggle();
        }
      },
      switchOff() {
        if (this.pluginInstalled()){
          window.plugins.flashlight.switchOff();
        }
      },
      setBtnTitle() {
        if (this.pluginInstalled()){
          // Test if flashlight is On ?
          if (window.plugins.flashlight.isSwitchedOn()){
            this.btnTitle = this.$t("flashlight.stop");
          }else{
            this.btnTitle = this.$t("flashlight.start");
          }
        }else{
          this.btnTitle = this.$t("flashlight.notAvailable");
        }
      }
    }
  }
</script>

<style scoped>
</style>
