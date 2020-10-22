import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAtBbJtODvRasazhu8pq7hugBP8ttqCuCs",
  authDomain: "vue-calendar-a07b6.firebaseapp.com",
  databaseURL: "https://vue-calendar-a07b6.firebaseio.com",
  projectId: "vue-calendar-a07b6",
  storageBucket: "vue-calendar-a07b6.appspot.com",
  messagingSenderId: "349627290521",
  appId: "1:349627290521:web:3820901912cd4fda7d3908"
});

export const db = firebase.firestore();

Vue.use( VueTextareaAutosize );
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
