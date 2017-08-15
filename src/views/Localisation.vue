// Require Cordova Plugin : cordova-plugin-geolocation

<template>
  <div>
    <div id="map"></div>
    <div v-if="loading" class="loading elevation-2">
      <div>
        <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
        <br><br>
        <div>{{$t("getPosition")}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import {nativeAlert} from "../libs/";

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
    data() {
      return {loading: true}
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
      getUserLocation() {
        // Retrieve the current user location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            let user_position = [position.coords.latitude, position.coords.longitude];
            L.marker(user_position).addTo(this.map);
            this.map.setView(user_position, 18);
            this.loading = false;
          }, () => {
            this.loading = false;
            nativeAlert(this.$t("positionNotAvailable", this.$t("localisation")));
          });
        }
      }
    }
  }
</script>

<style scoped>
  #map{
    height: calc(100vh - 64px);
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
