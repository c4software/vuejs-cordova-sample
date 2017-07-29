<template>
  <div>
    <v-toolbar class="primary indigo" />
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-divider dark v-if="item.divider" :key="i"></v-divider>
        <v-list-tile :href="item.action" :key="i" v-else>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "drawer",
  data: function() {
    return {
      items: [
        { icon: 'home', text: 'Home', action: '#/' },
        { icon: 'vibration', text: 'Vibration', action: '#vibration' },
        { icon: 'flash_on', text: 'Flash', action: '#flash' },
        { icon: 'contacts', text: 'Contacts', action: '#contact' },
        { divider: true },
        { icon: 'help', text: 'See on Github', action: 'https://github.com/c4software/vuejs-cordova-sample' },
      ]
    }
  }
}
</script>

<style lang="css">
</style>
