<template>
    <div>
        <div class="recipes__filtered" v-if="Object.keys(categories).length !== 0">
            <h1>Categorias</h1>
            <div
                class="recipes__list"  
                v-for="category in categories.data"
                :key="category.categoria_id"
                @click="getRecipesByCategory({page:1,value:category.categoria_id})"
            >
                <h1>Nome: {{category.nome_categoria}}</h1>  
            </div>
        </div>
        <div class="recipes__customPagination">
            <v-btn @click="minusPage()">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <span>{{page}}</span>
            <v-btn @click="addPage()">
                <v-icon>mdi-arrow-right</v-icon>
            </v-btn>  
        </div>
        <div v-if="Object.keys(categories).length === 0">
            <NoContent></NoContent>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NoContent from '../error/NoContent'
export default {
    data(){
        return{
            page:1
        }
    },
    name:'ListRecipes',
    computed:{...mapGetters(['categories'])},
    methods:{
        ...mapActions(['getCategories','getRecipesByCategory']),
        addPage(){
            if( Math.floor(this.categories.total/this.categories.limit) - 2 > this.page){
                this.page++
                this.getRecipes(this.page)
            }
        },
        minusPage(){
            if( this.page > 1){
                this.page--
                this.getRecipes(this.page)
            }
        }
    },
    components:{NoContent}
}
</script>

<style>
.recipes__filtered{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipes__filtered>h1{
    width: 100%;
    text-align: center;
    font-family: 'Grandstander';
    color: rgb(80, 80, 80);
}

.recipes__list{
    margin: 2rem 0 1rem 0;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: grey;
    border-radius: 1rem;
    transition: 800ms;
}

.recipes__list > h3{
    width: 100%;
    text-align: center;
    font-family: 'Lato';
    padding-bottom: 2rem;
}
.recipes__customPagination{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.recipes__list:hover{
    background: #ecbc38;
    cursor: pointer;
}
</style>