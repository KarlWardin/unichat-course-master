import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAXwtgPpti2jiwP8Y8TNL02bv6v9tGVDnM",
    authDomain: "unichat-4099c.firebaseapp.com",
    projectId: "unichat-4099c",
    storageBucket: "unichat-4099c.appspot.com",
    messagingSenderId: "116874252789",
    appId: "1:116874252789:web:fcd23ec3dc8821589a90bc",
    measurementId: "G-QJWC1CL2J1"
  }).auth();