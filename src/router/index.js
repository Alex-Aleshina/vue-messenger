import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import vLogin from '../components/auth/v-login'
import signUp from '../components/auth/v-register'
import vAllContacts from '../components/v-all-contacts'
import vDialog from '../components/dialog/v-dialog'
import vDialoglist from '../components/dialog/v-dialog-list'


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: vLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: vAllContacts
    },
    {
      path: '/dialogs/:userid',
      name: 'dialog',
      component: vDialog,
      props: true
    },
    {
      path: '/dialogs',
      name: 'dialogs',
      component: vDialoglist,
      props: true
    }
  ]
})

export default router
