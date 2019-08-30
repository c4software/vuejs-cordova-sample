// Require Cordova plugin : phonegap-nfc
// TODO UPDATE
<template>
  <v-container text-center>
      <span v-if="compatible">
        {{$t("nfcText.waitingTag")}}
        <br>
        <v-dialog v-model="dialog" scrollable>

          <template v-slot:activator="{ on }">
            <v-btn v-on="on">{{$t("nfcText.history")}}</v-btn>
          </template>

          <v-card>
            <v-card-title>{{$t("nfcText.history")}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
                <v-list-item v-for="item in items" v-bind:key="item">
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="items.length === 0">
                  <v-list-item-content>
                    <v-list-item-title v-text="$t('nfcText.noHistory')" class="text-center"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            </v-card-text>
          </v-card>
          
        </v-dialog>
      </span>
      <v-btn @click="showSettings" v-else-if="nfc_disabled">{{$t("nfcText.showSettings")}}</v-btn>
      <span v-else>{{$t("nfcText.notAvailable")}}</span>
  </v-container>
</template>


<script>
  import {nativeAlert} from "../libs";

  export default {
    name: 'nfc',
    data(){
      return {
        compatible: true,
        nfc_disabled: false,
        dialog: false,
        items: JSON.parse((localStorage.getItem("scanHistory")||"[]")),
      }
    },
    watch:{
      items: function (values) {
        // Watch push on the items data. If a new item is push save it to the « localStorage ».
        localStorage.setItem("scanHistory", JSON.stringify(values));
      }
    },
    mounted(){
      // When the view is mounted, register the scan tag event.
      this.registerTagEvent();
    },
    beforeDestroy(){
      // When the view is destroyed (user leave), unregister the scan tag event, to avoid scanning tag in other view
      this.unregisterTagEvent();
    },
    methods: {
      registerTagEvent(){
        // Unregister previously « resume » event listener.
        document.removeEventListener("resume", this.registerTagEvent, false);

        if (typeof(nfc) !== "undefined"){
          // Nfc is available, waiting for scan
          // eslint-disable-next-line
          nfc.addTagDiscoveredListener(this.displayTagId, this.success, this.error);
        }else{
          // Plugin not present or failed to initialized.
          this.error();
        }
      },
      unregisterTagEvent(){
        // Test if the plugin is defined
        if (typeof(nfc) !== "undefined") {
          // eslint-disable-next-line
          nfc.removeTagDiscoveredListener(this.displayTagId);
        }
      },
      displayTagId(nfcEvent){
        // Decode tag data from the plugin
        let tag = nfcEvent.tag;
        // eslint-disable-next-line
        let tagId = nfc.bytesToHexString(tag.id);

        // Push the new tag to the saved list
        this.items.push(tagId);

        // Show the tag Id to the user
        nativeAlert(this.$t("nfcText.tagSerial") + " : " + tagId);
      },
      error(e){
        // Manage the state
        if(e === "NFC_DISABLED"){
          this.compatible = false;
          this.nfc_disabled = true;
        }else{
          this.nfc_disabled = false;
          this.compatible = false;
        }
      },
      success(){
        this.compatible = true;
        this.nfc_disabled = false;
      },
      showSettings(){
        // Trigger the phone settings to enable the Nfc settings
        // eslint-disable-next-line
        nfc.showSettings();

        // To refresh the state of the nfc, we add a listener to the « resume » event.
        // The resume event is triggered by cordova when the app is « Resumed ».
        document.addEventListener("resume", this.registerTagEvent, false);
      }
    }
  }
</script>
