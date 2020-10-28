import apiCommunication from '../../axios/index'
import {showError,showSucess} from '../../utils/global'

const state = {
    loginForm: true,
    user: {},
    signUpUser:{}
}
const getters ={
    loginForm: state => state.loginForm,
    user: state => state.user,
    signUpUser: state =>state.signUpUser
}
const mutations = {
    changeAuthForm(state){
        state.loginForm = !state.loginForm
    },

    signIn(state){
        apiCommunication
            .post("/signin", state.user)
            .then(res=>{
                state.user = res.data
                apiCommunication.defaults.headers.common['Authorization'] = `bearer ${state.user.token}`

                localStorage.setItem("userData", JSON.stringify(state.user))
                showSucess("Usuário autenticado com sucesso")
            })
            .catch(showError)
    }
}
const actions = {
    changeAuthForm(context){
        context.commit('changeAuthForm')
    },
    signIn(context){
        context.commit('signIn')
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}