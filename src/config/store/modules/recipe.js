import apiCommunication from '../../axios/index'
import {showError} from '../../utils/global'
import router from '../../router/index'

const state = {
    selectedRecipe: {},
    categories: [],
    allRecipes:[],
    recipesById: []
}
const getters ={
    selectedRecipe: state => state.selectedRecipe,
    recipesByCategory: state => state.recipesByCategory,
    recipesByUser: state => state.recipesByUser,
    categories: state => state.categories,
    allRecipes: state => state.allRecipes,
    recipesById: state => state.recipesById
}
const mutations = {
    getCategories(state, value){
        const page = value || 1
        apiCommunication.get(`/categorias?page=${page}`)
            .then(res=> {state.categories = {data:res.data.data,limit:res.data.limit,total:res.data.total};})
            .catch(showError)
    },
    getRecipes(state, value){
        const page = value || 1
        apiCommunication.get(`/receitas?page=${page}`)
            .then(res => {state.allRecipes = {data:res.data.data,limit:res.data.limit,total:res.data.total};})
            .catch(showError)
    },
    getRecipesByCategory(state,{page,value}){
        const pageParam = page || 1
        console.log(value)
        
        apiCommunication.get(`receitas/categoria/${value}?page=${pageParam}`)
            .then(res => {
                state.allRecipes = {data:res.data.data,limit:res.data.limit,total:res.data.total};
                router.push('/receitas')
            })
            .catch(showError)
    },
    getRecipeById(state,value){
        apiCommunication.get(`receitas/${value}`)
            .then(res =>{
                state.selectedRecipe = {...res.data.data}
                console.log(state.selectedRecipe)

                router.push('/receita')
            })
            .catch(showError)
    }
}
const actions = {
    getRecipes(context,value){
        context.commit('getRecipes',value)
    },
    getCategories(context,value){
        context.commit('getCategories',value)
    },
    getRecipesByCategory(context,{page,value}){
        context.commit('getRecipesByCategory',{
                page,
                value
            })
    },
    getRecipeById(context,value){
        context.commit('getRecipeById', value)
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}