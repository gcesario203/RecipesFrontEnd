import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../components/content/Home'
import ListRecipes from '../../components/cards/ListRecipes'
import ListCategories  from '../../components/cards/ListCategories'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
