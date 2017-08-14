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
  mounted: function () {
    // Listen for event openDrawer (triggered by other component, like the button in the home)
    document.addEventListener("openDrawer", this.openDrawer);
  },
  beforeDestroy: function () {
    // If the component is unmount, unlisten the event.
    document.removeEventListener("openDrawer", this.openDrawer);
  },
  data: function() {
    return {
      drawer: false
    }
  },
  methods: {
    openDrawer (){
      this.drawer = true;
    },
    goHome (){
      window.location.hash = "/";
    }
  }
}
</script>

<style>
</style>
