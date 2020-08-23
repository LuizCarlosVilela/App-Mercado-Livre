import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDWXc3RkggnfgH1DdlOeqTfohWhAAykT0o",
  authDomain: "clone-mercado.firebaseapp.com",
  databaseURL: "https://clone-mercado.firebaseio.com",
  projectId: "clone-mercado",
  storageBucket: "clone-mercado.appspot.com",
  messagingSenderId: "167650325323",
  appId: "1:167650325323:web:b404e5d524e9f42abaeece",
  measurementId: "G-CKNVEYG6D0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
