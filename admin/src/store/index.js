import Vue from 'vue'
import Vuex from 'vuex'

import SidePanelModule from './modules/sidePanel/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidePanel: SidePanelModule
  }
})
