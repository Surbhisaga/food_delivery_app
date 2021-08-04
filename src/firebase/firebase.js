import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDDyWesHidur_GbGzfU7SuMQ6-ZcJ3SHcU",
    authDomain: "react-firebase-authentic-11e33.firebaseapp.com",
    // databaseURL: "https://react-firebase-authentic-11e33.firebaseio.com",
    projectId: "react-firebase-authentic-11e33",
    storageBucket: "react-firebase-authentic-11e33.appspot.com",
    messagingSenderId: "656842132543",
    appId: "1:656842132543:web:ae721d3cd5fa9b03003c8a",
    measurementId: "G-W5HNGSYJSW"
  };

  if (!firebase.apps.length) {
    //initializing with the config object
    firebase.initializeApp(config);
  }
  
  //separting database API and authentication
  const db = firebase.database();
  const auth = firebase.auth();
  
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  
  export {db, auth, facebookProvider };
