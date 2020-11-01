<template>
  <div :class="{'app':sideMenu,'hide-menu':!sideMenu}">
    <Header></Header>
    <SideMenu></SideMenu>
    <Loading v-if="validatingToken"></Loading>
    <Content v-if="!validatingToken"></Content>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/template/Header'
import Content from './components/template/Content'
import Loading from './components/template/Loading'
import SideMenu from './components/template/SideMenu'
import Footer from './components/template/Footer'
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:{...mapGetters(['sideMenu','user','validatingToken'])},
  methods:{...mapActions(['validateToken'])},
  components:{
    Header,
    Content,
    SideMenu,
    Loading,
    Footer
  },
  watch:{
    loading:function(value){
      this.validatingToken = value;
    },
    authUser:function(value){
      this.user = value;
      this.validateToken();
    }
  },
  created(){
    this.validateToken()
  }
}
</script>
<style>
*{
    font-family: "Lato", sans-serif;
    margin: 0;
    box-sizing: border-box;
  }

.app {
  display: grid;
    height: 100vh;
    grid-template-rows: 3rem 1fr 3rem;
    grid-template-columns: 15rem 1fr;

    grid-template-areas:
      "header header"
      "menu content"
      "menu footer"
    ;
}
.title-style{
  font-size: 1.5rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
}

.hide-menu{
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr 3rem;
  grid-template-areas:
    "header"
    "content"
    "footer"
  ;
}
</style>
