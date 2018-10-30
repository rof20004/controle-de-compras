import Vue from 'vue'
import Vuex from 'vuex'

import * as produtos from '@/store/produtos'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    produtos
  }
})

export default store
