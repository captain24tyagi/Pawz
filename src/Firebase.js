import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0hRi1KcHH_EM14vXX5Y9bAwm8kwSWqDA",
    authDomain: "pawz-52c7c.firebaseapp.com",
    projectId: "pawz-52c7c",
    storageBucket: "pawz-52c7c.appspot.com",
    messagingSenderId: "814042790261",
    appId: "1:814042790261:web:6701ed7236acf00369bb3c",
    measurementId: "G-HRPNVEH2HK"
  });

const db = firebaseApp.firestore();

export default db;