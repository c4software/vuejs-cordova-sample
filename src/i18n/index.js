import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n);

const messages = {
  en: {
    title: 'VueJS Cordova Sample',
    showSample: 'Show code samples',
    drawer: {
      home: "Home",
      vibration: "Vibration",
      camera: "Camera",
      flash: "Flash",
      localisation: "Localisation",
      nfc: "Nfc",
    },
    see_on_github: "See On Github",
    getPosition: "Obtaining Position",
    positionNotAvailable: "Can’t get your position",
    startVibration: "Start vibration",
    flashlight: {
      start: "Start flashlight",
      stop: "Stop flashlight",
      notAvailable: "Plugin not installed"
    },
    nfcText: {
      waitingTag: "Scan a tag…",
      tagSerial: "Serial number",
      notAvailable: "Your mobile is not compatible.",
      showSettings: "Enable NFC",
      history: "History",
      noHistory: "Empty"
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
      start: "Allumer la lampe torche",
      stop: "Éteindre la lampe torche",
      notAvailable: "Plugin Cordova non installé"
    },
    nfcText: {
      waitingTag: "En attente d’un tag…",
      tagSerial: "Numéro de série",
      notAvailable: "Votre mobile est incompatible.",
      showSettings: "Activer le NFC",
      history: "Historique",
      noHistory: "Aucun historique"
    },
    takePhoto: "Prendre une photo",
    error: "Non disponible"
  }
};


export const i18n = new VueI18n({
  locale: getLanguage(),
  fallbackLocale: 'en',
  messages,
});

function getLanguage() {
  try {
    let l = navigator.language.split("-");
    return l[0];
  }catch(err){
    console.log(err);
    return navigator.language;
  }
}
