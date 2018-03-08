// Require Cordova Plugin : cordova-plugin-geolocation

<template>
  <v-container fill-height fluid>
    <div id="map"></div>
    <loader v-if="isLoading" />
  </v-container>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import {nativeAlert} from "../libs/";
  import Loader from "@/components/Loader"

  // Fix for icon problem with webpack
  // See https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-261904061
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  export default {
    name: 'localisation',
    components: {Loader},
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      // Init the leaflet map
      this.map = L.map('map').setView([47.47121, -0.55198], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      this.getUserLocation();
    },
    beforeDestroy(){
      // Destroy the map object on leave
      if(!(this.map === undefined)){
        this.map.remove();
      }
    },
    methods: {
      stopLoading(){
        this.isLoading = false;
      },
      getUserLocation() {
        // Retrieve the current user location
        if (navigator.geolocation) {
          // If the geolocation is available
          navigator.geolocation.getCurrentPosition((position) => {
            // Get the current user position, and create a marker on the map.
            // Pssst, look at the position object there is a lot of more information
            let user_position = [position.coords.latitude, position.coords.longitude];
            L.marker(user_position).addTo(this.map);

            // Set the view on the user position at a correct zoom level
            this.map.setView(user_position, 18);
            this.stopLoading();
          }, () => {
            // If the geolocation plugin not answer or if we reach the timeout
            this.stopLoading();
            nativeAlert(this.$t("positionNotAvailable", this.$t("localisation")));
          });
        }else{
          // If the browser is not compatible
          nativeAlert(this.$t("positionNotAvailable", this.$t("localisation")));
          this.stopLoading();
        }
      }
    }
  }
</script>

<style scoped>
  .container{
    padding: 0;
  }
  #map{
    height: calc(100vh - 50px);
    width: 100%;
    z-index: 1;
  }

  .loading {
    position: absolute;
    width: 150px;
    height: 150px;
    bottom: 50vh;
    top: 50vh;
    z-index: 200;
    margin: auto;
    background-color: white;
    border-radius: 5px;
    left: calc(50% - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
</style>
