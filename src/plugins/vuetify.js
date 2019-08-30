import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const vuetify = new Vuetify({ icons: {iconfont: 'mdi'}});
Vue.use(Vuetify, vuetify);

export default vuetify;