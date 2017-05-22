// import Vue from 'vue'
// import Vuex from 'vuex'
import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBVVfQh0PT7Pj3dXk_qxhOenOITqJ7dAFM',
  authDomain: 'lei-e3d61.firebaseapp.com',
  databaseURL: 'https://lei-e3d61.firebaseio.com',
  projectId: 'lei-e3d61',
  storageBucket: 'lei-e3d61.appspot.com',
  messagingSenderId: '247582300273'
}

let app
if (Firebase.apps.length > 0) app = Firebase.app()
else app = Firebase.initializeApp(config)

// var app = Firebase.initializeApp(config)
var db = app.database()

export const state = {
  links: {
    list: db.ref('links')
  }
}

// export const mutations = {
//   add (state, text) {
//     state.list.push({
//       text: text,
//       done: false
//     })
//   },
//   delete (state, { todo }) {
//     state.list.splice(state.list.indexOf(todo), 1)
//   },
//   toggle (state, todo) {
//     todo.done = !todo.done
//   }
// }
