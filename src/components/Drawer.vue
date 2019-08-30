<template>
  <div>
    <v-toolbar class="indigo" flat/>

    <v-list-item v-for="(item, i) in items" :key="`item_${i}`"  :to="item.action">
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>

      <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
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
