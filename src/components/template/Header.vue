<template>
    <div class="header">
        <a
            @click="toggleMenu()"
            v-if="sideMenu"
        >
            <v-icon x-large>mdi-arrow-left</v-icon>
        </a>
        <a
            @click="toggleMenu()"
            v-else
        >
            <v-icon x-large>mdi-arrow-right</v-icon>
        </a>
        <router-link to='/'><h1>Cabeçalho</h1></router-link>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    name: "Header",
    computed: {...mapGetters(['sideMenu'])},
    methods:{...mapActions(['toggleMenu'])}
}
</script>

<style>
.header{
    display: flex;
    align-items: center;
    grid-area: header;
    background: linear-gradient(to right,#F5CB5C,#ecbc38);
}

.header > a{
    display: flex;
    align-self: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: 800ms;
    height: 100%;
}

.header > a:hover{
    background: rgba(1, 1, 1, 0.15);
}

.header > a > h1{
    font-family: 'Grandstander';
    text-align: center;
    color: black;
    align-self: center;
}
</style>