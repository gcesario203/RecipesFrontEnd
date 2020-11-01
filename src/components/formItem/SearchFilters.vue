<template>
    <div class="navBar" v-show="sideMenu">
        <div class="navBar__header">
            <h1>Opções</h1>
            <v-icon x-large>mdi-pizza</v-icon>
        </div>
        <div class="navBar__search">
            <SearchBar
                :inputAction="changeInputSearchValue"
                :action="searchRecipe"
                icon=""
                placeholder="Procurar receita"
            >
            </SearchBar>
            <SearchBar
                :inputAction="changeInputFilterCategoryValue"
                :action="filterByCategory"
                icon=""
                placeholder="Procurar por categoria"
            >
            </SearchBar>
            <LuckDay></LuckDay>
        </div>
    </div>
</template>

<script>
import SearchBar from '../formItem/SearchBar'
import LuckDay from '../formItem/LuckDay'

import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'NavigateBar',
    computed: {...mapGetters(['sideMenu'])},
    components:{SearchBar, LuckDay},
    methods:{
        ...mapActions([
                'searchRecipe',
                'filterMainIngredient',
                'filterByCategory',
                'filterByArea',
                'changeInputSearchValue',
                'changeInputFilterIngredientValue',
                'changeInputFilterCategoryValue',
                'changeInputFilterAreaValue'
                ])
    }
}
</script>

<style>
.navBar{
    grid-area: Menu;
    background: linear-gradient(to right,rgb(206, 205, 205),rgb(197, 197, 197));
}

.navBar__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-family: 'Lato';
    font-size: 1rem;
    overflow: hidden;
}
</style>