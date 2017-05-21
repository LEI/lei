// import Vuex from 'vuex'
// import app from '~plugins/firebase'

export const state = {
  // db: app.database(),
  locales: ['en', 'fr'],
  locale: 'en'
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

// const store = function () {
//   return new Vuex.Store({
//     state: {
//     }
//   })
// }

// export default store
