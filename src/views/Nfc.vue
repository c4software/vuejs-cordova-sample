// Require Cordova plugin : phonegap-nfc
<template>
  <div class="middle-centered">
      <span v-if="compatible">
        {{$t("nfcText.waitingTag")}}
        <br>
        <v-dialog v-model="dialog" scrollable>
          <v-btn slot="activator">{{$t("nfcText.history")}}</v-btn>
          <v-card>
            <v-card-title>{{$t("nfcText.history")}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
              <v-list v-if="items.length > 0">
                <v-list-tile v-for="item in items" v-bind:key="item">
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-list v-else>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="$t('nfcText.noHistory')" class="text-xs-center"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-dialog>
      </span>
      <v-btn v-on:click="showSettings" v-else-if="nfc_disabled">{{$t("nfcText.showSettings")}}</v-btn>
      <span v-else>{{$t("nfcText.notAvailable")}}</span>
  </div>
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
      items: function (v) {
        // Watch push on the items data. If a new item is push save it to the « localstorage ».
        localStorage.setItem("scanHistory", JSON.stringify(this.items));
      }
    },
    mounted(){
      this.registerTagEvent();
    },
    beforeDestroy(){
      this.unregisterTagEvent();
    },
    methods: {
      registerTagEvent(){
        document.removeEventListener("resume", this.registerTagEvent, false);
        if (typeof(nfc) !== "undefined"){
          // Nfc is available, waiting for scan
          nfc.addTagDiscoveredListener(this.displayTagId, this.success, this.error);
        }else{
          // Plugin not present or failed to initialized.
          this.error();
        }
      },
      unregisterTagEvent(){
        if (typeof(nfc) !== "undefined") {
          nfc.removeTagDiscoveredListener(this.displayTagId);
        }
      },
      displayTagId(nfcEvent){
        // Show the tag Id.
        let tag = nfcEvent.tag;
        let tagId = nfc.bytesToHexString(tag.id);
        this.items.push(tagId);
        nativeAlert(this.$t("nfcText.tagSerial") + " : " + tagId);
      },
      error(e){
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
        console.log("Nfc initialized");
      },
      showSettings(){
        nfc.showSettings();
        document.addEventListener("resume", this.registerTagEvent, false);
      }
    }
  }
</script>
