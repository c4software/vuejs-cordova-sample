<template>
  <div id="map"></div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';

  export default {
    name: 'localisation',
    mounted: () => {
      this.map = L.map('map').setView([47.47121, -0.55198], 5);
      L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    }
  }
</script>

<style scoped>
  #map{
    height: calc(100vh - 64px);
    z-index: 1;
  }
</style>
