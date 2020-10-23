import Vue from 'vue'
import Vuex from 'vuex'
import sideMenu from './modules/sideMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sideMenu
  }
})
