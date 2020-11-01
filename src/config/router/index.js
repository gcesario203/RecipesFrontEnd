import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../components/content/Home'
import ListRecipes from '../../components/cards/ListRecipes'
import ListCategories  from '../../components/cards/ListCategories'
import Recipe from '../../components/recipe/Recipe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/receitas',
    name: 'Receitas',
    component: ListRecipes
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: ListCategories
  },
  {
    path: '/receita',
    name: 'Receita',
    component: Recipe
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
