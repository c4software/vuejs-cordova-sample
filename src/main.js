// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true;

// Vuetify
require('vuetify/dist/vuetify.min.css');
import Vuetify from 'vuetify'
Vue.use(Vuetify);

// i18n
import {i18n} from './i18n'

const init = () => {
  new Vue({
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: { App }
  });
};

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  console.log("Ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}
