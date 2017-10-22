<template>
  <div>
    <v-toolbar class="primary indigo" />
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-divider dark v-if="item.divider" :key="i"></v-divider>
        <v-list-tile :to="item.action" :key="i" v-else>
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
        { icon: 'home', text: this.$t("drawer.home"), action: '/' },
        { icon: 'vibration', text: this.$t('drawer.vibration'), action: 'vibration' },
        { icon: 'camera', text: this.$t('drawer.camera'), action: 'camera' },
        { icon: 'flash_on', text: this.$t('drawer.flash'), action: 'flash' },
        { icon: 'gps_fixed', text: this.$t('drawer.localisation'), action: 'localisation' },
        { icon: 'nfc', text: this.$t('drawer.nfc'), action: 'nfc' }
      ]
    }
  }
}
</script>
