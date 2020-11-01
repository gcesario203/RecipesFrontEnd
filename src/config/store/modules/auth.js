import apiCommunication from '../../axios/index'
import {showError,showSucess} from '../../utils/global'

const state = {
    loginForm: true,
    user: {},
    signUpUser:{},
    validatingToken:false
}
const getters ={
    loginForm: state => state.loginForm,
    user: state => state.user,
    signUpUser: state =>state.signUpUser,
    validatingToken: state=>state.validatingToken
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
                console.log(state.user);

                localStorage.setItem("userData", JSON.stringify(state.user))
                showSucess("Usuário autenticado com sucesso")
            })
            .catch(showError)
    },
    async validateToken(state){
        state.validatingToken = true
        const json = localStorage.getItem("userData")
        const userData = JSON.parse(json)
  
        if(!userData){
          state.validatingToken = false
          return
        }

        const res = await apiCommunication.post(`/validateToken`, userData)
  
        if(res.data){
            state.user = {...userData}
            showSucess("Bem-vindo de volta, "+state.user.usuario)
        }else{
          localStorage.removeItem("userData")
        }
  
        state.validatingToken = false
      },
    signOut(state){
        if(state.user.token){
            state.user = {}
            delete apiCommunication.defaults.headers.common['Authorization']
            localStorage.removeItem("userData")
            showSucess("Volte sempre!")
        }
    },
    signUp(state){
        apiCommunication
        .post(`/signup`, state.signUpUser)
        .then(()=>{
            state.loginForm = true;
            showSucess("Bem-vindo, seu usuário foi criado com sucesso")
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
    },
    signUp(context){
        context.commit('signUp')
    },
    signOut(context){
        context.commit('signOut')
    },
    validateToken(context){
        context.commit('validateToken')
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}