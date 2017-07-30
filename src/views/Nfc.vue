// Require Cordova plugin : phonegap-nfc
<template>
  <div class="middle-centered">
    <span v-if="compatible">{{$t("nfcText.waitingTag")}}</span>
    <span v-else>{{$t("nfcText.notAvailable")}}</span>
  </div>
</template>

<script>
  import {nativeAlert} from "../libs";
  export default {
    name: 'nfc',
    data(){
      return {compatible: true}
    },
    mounted(){
      if (typeof(nfc) !== "undefined"){
        // Nfc is available, waiting for scan
        nfc.addNdefListener(this.displayTagId, this.success, this.error);
      }else{
        // Plugin not present or failed to initialized.
        this.error();
      }
    },
    beforeDestroy(){
      if (typeof(nfc) !== "undefined") {
        nfc.removeNdefListener(this.displayTagId);
      }
    },
    methods: {
      displayTagId(data){
        // Show the tag Id.
        nativeAlert(this.$t("nfcText.tagSerial") + " : " + data.tag.id);
      },
      error(){
        this.compatible = false;
      },
      success(){
        console.log("Nfc initialized");
      }
    }
  }
</script>
