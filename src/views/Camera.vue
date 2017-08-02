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
      takePicture() {
        if (navigator.camera) {
          navigator.camera.getPicture(this.setPicture, {}, {});
        }else{
          this.error();
        }
      },
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
