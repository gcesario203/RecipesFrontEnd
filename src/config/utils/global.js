import Vue from 'vue'
import router from '../router/index'

export function emptyCheck(value) {
    Object.keys(value).length === 0
      && value.constructor === Object;
  }

export function checkRoute(endpoind){
    if(router.currentRoute.path !== endpoind){
        router.push(endpoind)
    }
}

export function showError(e){
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultError({msg: e.response.data})
    }else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({msg:e})
    }else{
        Vue.toasted.global.defaultError()
    }
}

export function showSucess(e){
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultSuccess({msg: e.response.data})
    }else if(typeof e === 'string') {
        Vue.toasted.global.defaultSuccess({msg:e})
    }else{
        Vue.toasted.global.defaultSuccess()
    }
}

export default {
    showError,
    showSucess,
    checkRoute,
    emptyCheck,
}