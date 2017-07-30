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
        { icon: 'home', text: this.$t("home"), action: '#/' },
        { icon: 'vibration', text: this.$t('vibration'), action: '#vibration' },
        { icon: 'camera', text: this.$t('camera'), action: '#camera' },
        { icon: 'flash_on', text: this.$t('flash'), action: '#flash' },
        { icon: 'contacts', text: this.$t('contacts'), action: '#contacts' },
        { icon: 'gps_fixed', text: this.$t('localisation'), action: '#localisation' },
        { divider: true },
        { icon: 'help', text: this.$t('see_on_github'), action: 'https://github.com/c4software/vuejs-cordova-sample' },
      ]
    }
  }
}
</script>

<style lang="css">
</style>
