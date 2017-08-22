// Require Cordova plugin : cordova-plugin-camera

<template>
  <div class="middle-centered">
    <div class="text-center">
      <img v-if='imagePath !== ""' v-bind:src="imagePath">
      <v-btn v-on:click="takePicture">{{$t("takePhoto")}}</v-btn>
    </div>
  </div>
</template>
<script>
  import {nativeAlert} from "../libs/index";

  export default {
    name: 'camera',
    data() {
      return {
        imagePath: ""
      }
    },
    methods: {
      // Use the camera plugin to capture image
      takePicture() {
        if (navigator.camera) {
          navigator.camera.getPicture(this.setPicture, {}, {});
        }else{
          // If the navigator.camera is not available display generic error to the user.
          this.error();
        }
      },
      // Set the picture path in the data of the vue
      // this action will automatically update the view.
      setPicture(imagePath){
        this.imagePath = imagePath;
      },
      error(){
        nativeAlert(this.$t("error"));
      }
    }
  }
</script>

<style scoped>
  img{
    width: 50%;
    display: block;
    margin: auto;
  }
</style>
