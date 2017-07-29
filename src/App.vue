<template>
  <v-app toolbar fill-height>
    <v-navigation-drawer v-model="drawer" absolute clipped temporary floating>
      <myContentDrawer />
    </v-navigation-drawer>
    <v-toolbar class="primary indigo">
      <v-toolbar-side-icon dark @click="toggleOverlay"></v-toolbar-side-icon>
      <v-toolbar-title @click="goHome" class="white--text">{{ $t("title") }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import myContentDrawer from "@/components/Drawer"

export default {
  name: 'app',
  components: {myContentDrawer},
  data: function() {
    return {
      drawer: false
    }
  },
  methods: {
    toggleOverlay (){
      this.drawer = !this.drawer
    },
    goHome (){
      window.location.hash = "/";
    }
  }
}
</script>

<style>
</style>
