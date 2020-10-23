<template>
    <div class="sideMenu" v-show="sideMenu">
        <h1>Sou o menu</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "SideMenu",
    computed:{...mapGetters(['sideMenu'])}
}
</script>

<style>
.sideMenu{
    grid-area: menu;
    background: #CFDBD5;
}
</style>