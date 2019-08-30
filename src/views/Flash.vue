// Require Cordova plugin : cordova-plugin-flashlight

<template>
  <v-container text-center>
    <v-btn @click="toggle">{{ btnTitle }}</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'flash',
    mounted(){
      // Set the ButtonTitle according the plugin state
      this.setBtnTitle()
    },
    beforeDestroy(){
      // When the view is destroyed turnoff the flashlight
      this.switchOff();
    },
    data: () => {
      return {
        btnTitle: ""
      }
    },
    methods: {
      pluginInstalled() {
        // Check if the cordova Flashlight is available
        return (typeof(plugins) !== "undefined" && typeof(window.plugins.flashlight) !== "undefined");
      },
      toggle() {
        if (this.pluginInstalled()){
          // Toggle the flashlight state
          window.plugins.flashlight.toggle(this.setBtnTitle);
        }
      },
      switchOff() {
        if (this.pluginInstalled()){
          // Turn off the flashlight led
          window.plugins.flashlight.switchOff();
        }
      },
      setBtnTitle() {
        // Manage the button title state
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
