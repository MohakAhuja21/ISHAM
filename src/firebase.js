import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfFf8nQQyn9ID4SiYjFoYmDBz16-JC--Q",
    authDomain: "isham-11.firebaseapp.com",
    projectId: "isham-11",
    storageBucket: "isham-11.appspot.com",
    messagingSenderId: "111238907179",
    appId: "1:111238907179:web:9d6b65258cf20e440ff16e",
    measurementId: "G-CMY5N6EYGL"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export{db,auth};