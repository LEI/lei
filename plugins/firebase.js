import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBVVfQh0PT7Pj3dXk_qxhOenOITqJ7dAFM",
  authDomain: "lei-e3d61.firebaseapp.com",
  databaseURL: "https://lei-e3d61.firebaseio.com",
  projectId: "lei-e3d61",
  storageBucket: "lei-e3d61.appspot.com",
  messagingSenderId: "247582300273"
};

var app = Firebase.initializeApp(config)
var db = app.database()

// export default db

// var linksRef = db.ref('links')
// console.log(linksRef)
