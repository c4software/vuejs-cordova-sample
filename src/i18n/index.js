import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n);

const messages = {
  en: {
    title: 'VueJS Cordova Sample',
    showSample: 'Show code samples',
    home: "Home",
    vibration: "Vibration",
    camera: "Camera",
    flash: "Flash",
    contacts: "Contacts",
    localisation: "Localisation",
    nfc: "Nfc",
    see_on_github: "See On Github",
    getPosition: "Obtaining Position",
    positionNotAvailable: "Can’t get your position",
    startVibration: "Start vibration",
    flashlight: {
      startFlash: "Start flashlight",
      stopFlash: "Stop flashlight",
      notAvailable: "Plugin not installed"
    },
    nfcText: {
      waitingTag: "Scan a tag…",
      tagSerial: "Serial number",
      notAvailable: "Scan impossible. Cordova plugin not initialized."
    },
    takePhoto: "Take a picture",
    error: "Not available"
  },
  fr: {
    title: "Exemples VueJS + Cordova",
    showSample: 'Afficher les examples',
    drawer: {
      home: "Accueil",
      vibration: "Vibreur",
      camera: "Camera",
      flash: "Flash",
      localisation: "Localisation",
      nfc: "Nfc"
    },
    see_on_github: "Voir sur Github",
    getPosition: "Localisation en cours",
    positionNotAvailable: "Localisation impossible",
    startVibration: "Démarrer la vibration",
    flashlight: {
      startFlash: "Allumer la lampe torche",
      stopFlash: "Éteindre la lampe torche",
      notAvailable: "Plugin Cordova non installé"
    },
    nfcText: {
      waitingTag: "En attente d’un tag…",
      tagSerial: "Numéro de série",
      notAvailable: "Scan impossible. Plugin Cordova non initialisé"
    },
    takePhoto: "Prendre une photo",
    error: "Non disponible"
  }
};


export const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
});
