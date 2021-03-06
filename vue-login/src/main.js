// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"
import 'material-design-icons/iconfont/material-icons.css'//use material icons locally
import { store } from './store'
import alertComponents from './components/shared/Alert.vue'
import editMeetupDialog from "./components/meetups/edit/editMeetupDialog.vue"

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.component("app-alert", alertComponents);
Vue.component("app-edit-dialog", editMeetupDialog);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyBsaJ2Y-1t2iI1r4R8Y15ytGGTZMM0NIW8",
      authDomain: "vue-login-41ccf.firebaseapp.com",
      databaseURL: "https://vue-login-41ccf.firebaseio.com",
      projectId: "vue-login-41ccf",
      storageBucket: "gs://vue-login-41ccf.appspot.com",
      messagingSenderId: "763501597626"
    })

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.dispatch("autoSignIn",user)
      }
    })

    this.$store.dispatch("loadMeetups")
  }
})
