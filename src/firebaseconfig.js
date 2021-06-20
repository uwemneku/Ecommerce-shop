import firebase from 'firebase'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBIWUTZAbuT7B1gw1tP0HTEwLGZhj6ahBE",
    authDomain: "tailwind-css-af788.firebaseapp.com",
    projectId: "tailwind-css-af788",
    storageBucket: "tailwind-css-af788.appspot.com",
    messagingSenderId: "427367725453",
    appId: "1:427367725453:web:49f83ccc243f15c1d7a5c4",
    measurementId: "G-DP26DY6GP4"
  });

const bd = firebaseConfig.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

export  {bd, auth, storage};