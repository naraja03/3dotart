import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyBryT2G9ODAidgQqR2eEv5XC78nrco-We0",
  authDomain: "three-dotart.firebaseapp.com",
  projectId: "three-dotart",
  storageBucket: "three-dotart.appspot.com",
  messagingSenderId: "423832291068",
  appId: "1:423832291068:web:4731def0c73eb0ce54f979"
};

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
