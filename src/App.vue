<template>
  <v-app toolbar fill-height>
    <v-navigation-drawer v-model="drawer">
      <myContentDrawer />
    </v-navigation-drawer>
    <v-toolbar class="primary indigo" fixed >
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="goHome" class="white--text">{{ $t("title") }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid pa-0>
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
    goHome (){
      window.location.hash = "/";
    }
  }
}
</script>

<style>
</style>
