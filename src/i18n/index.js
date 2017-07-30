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
    see_on_github: "See On Github",
    startVibration: "Start vibration"
  },
  fr: {
    title: "Exemples VueJS + Cordova",
    showSample: 'Afficher les examples',
    home: "Accueil",
    vibration: "Vibreur",
    camera: "Camera",
    flash: "Flash",
    contacts: "Contacts",
    localisation: "Localisation",
    see_on_github: "Voir sur Github",
    startVibration: "Démarrer la vibration"
  }
};


export const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
});
