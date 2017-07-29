<template>
  <v-app toolbar fill-height>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar class="primary indigo">
      <v-toolbar-side-icon dark></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">VueJS Cordova Sample</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
