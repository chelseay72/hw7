const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDqwHzL6e-8dwA_wstBl_c05B-dRS2G1i8",
  authDomain: "homework7-3db47.firebaseapp.com",
  projectId: "homework7-3db47",
  storageBucket: "homework7-3db47.appspot.com",
  messagingSenderId: "208603058351",
  appId: "1:208603058351:web:4497f062b29088571d445a"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase