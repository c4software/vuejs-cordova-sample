import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n);

const messages = {
  en: {
    title: 'VueJS Cordova Sample'
  },
  fr: {
    title: "Example VueJS + Cordova"
  }
};


export const i18n = new VueI18n({
  locale: 'fr',
  messages,
});
