<template>
    <div class="sideMenu" v-show="sideMenu">
        <Auth></Auth>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Auth from '../auth/Auth'

export default {
    name: "SideMenu",
    computed:{...mapGetters(['sideMenu'])},
    components:{
        Auth
    }
}
</script>

<style>
.sideMenu{
    grid-area: menu;
    background: #CFDBD5;
}
</style>