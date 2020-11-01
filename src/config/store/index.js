import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import sideMenu from './modules/sideMenu'
import recipe from './modules/recipe'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    sideMenu,
    auth,
    recipe
  }
})
