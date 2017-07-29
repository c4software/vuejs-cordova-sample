import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Vibration from '@/views/Vibration'
import Flash from '@/views/Flash'
import Contacts from '@/views/Contacts'
import Camera from '@/views/Camera'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/vibration',
      name: 'Vibration',
      component: Vibration
    },{
      path: '/flash',
      name: 'Flash',
      component: Flash
    },{
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },{
      path: '/camera',
      name: 'Camera',
      component: Camera
    }
  ]
})
