import Vue from 'vue'
import Vuex from 'vuex'
import sideMenu from './modules/sideMenu'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sideMenu,
    auth
  }
})
