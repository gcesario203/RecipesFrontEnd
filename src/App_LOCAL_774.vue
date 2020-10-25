<template>
  <div :class="{'app':sideMenu,'hide-menu':!sideMenu}">
    <Header></Header>
    <SideMenu></SideMenu>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/template/Header'
import Content from './components/template/Content'
import SideMenu from './components/template/SideMenu'
import Footer from './components/template/Footer'
import {mapGetters} from 'vuex'

export default {
  computed:{...mapGetters(['sideMenu'])},
  components:{
    Header,
    Content,
    SideMenu,
    Footer
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
