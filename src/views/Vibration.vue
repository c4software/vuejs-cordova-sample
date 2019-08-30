// Require Cordova plugin : cordova-plugin-vibration

<template>
  <v-container text-center>
    <v-btn @click="doVibrate">{{$t("startVibration")}}</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'vibration',
    methods: {
      doVibrate () {
        // Do vibration if available
        if (navigator.vibrate){
          // S.O.S in Morse ;)
          navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
        }else{
          this.$vuetifyMessageDialog.open("Attention", "[cordova-plugin-vibration] Is required to use this function", "Ok", "red")
        }
      }
    }
  }
</script>
