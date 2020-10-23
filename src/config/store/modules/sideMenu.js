const state = {
    sideMenu: false
}
const getters ={
    sideMenu: state => state.sideMenu
}
const mutations = {
    toggleMenu(state){
        state.sideMenu = !state.sideMenu;
    }
}
const actions = {
    toggleMenu(context) {
        context.commit('toggleMenu')
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}