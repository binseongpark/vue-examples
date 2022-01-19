
import Vue from 'vue'
import Vuex from 'vuex'

import board from './modules/board'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    board,
  },
  strict: process.env.NODE_ENV === 'development'
})

if (module.hot) {
  module.hot.accept(['./modules/board'], () => {
    const newModuleBoard = require('./modules/board').default

    store.hotUpdate({
      module: {
        board: newModuleBoard,
      }
    })
  })
}

export default store
