<template>
  <v-app toolbar fill-height>
    <myToolbar />
    <main>
      <v-container fluid pa-0>
        <router-view></router-view>
      </v-container>
    </main>
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
