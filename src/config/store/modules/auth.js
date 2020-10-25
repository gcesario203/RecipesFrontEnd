const state = {
    loginForm: true
}
const getters ={
    loginForm: state => state.loginForm
}
const mutations = {
    changeAuthForm(state){
        state.loginForm = !state.loginForm
    }
}
const actions = {
    changeAuthForm(context){
        context.commit('changeAuthForm')
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}