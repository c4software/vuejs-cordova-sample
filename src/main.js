import '@babel/polyfill';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import './plugins/vuetify-extra';
import App from './App.vue';
import router from './router/index';
import i18n from './i18n';

Vue.config.productionTip = false

const init = () => {
  new Vue({
    vuetify,
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
};

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}