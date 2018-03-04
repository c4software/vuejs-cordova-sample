<template>
  <v-app toolbar>
    <myToolbar />
    <v-content>
      <v-container pa-0 fluid fill-height align-content-center align-center>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import myToolbar from "@/components/MyToolbar"

export default {
  name: 'app',
  components: {myToolbar}
}
</script>

<style>
</style>
