<template>
    <div class="sideMenu" v-show="sideMenu">
        <Auth v-if="!user.token"></Auth>
        <SearchFilters v-if="user.token"></SearchFilters>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Auth from '../auth/Auth'
import SearchFilters from '../formItem/SearchFilters'

export default {
    name: "SideMenu",
    computed:{...mapGetters(['sideMenu','user'])},
    components:{
        Auth,
        SearchFilters
    }
}
</script>

<style>
.sideMenu{
    grid-area: menu;
    background: #CFDBD5;
}
</style>