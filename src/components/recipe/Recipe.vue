<template>
  <div>
    <div class="recipe" v-if="Object.keys(selectedRecipe).length !== 0">
      <div class="recipe__title">
        <h1>{{ selectedRecipe.nome_receita }}</h1>
        <h2>{{ selectedRecipe.local_origem }}</h2>
      </div>
      <v-img
        :src="selectedRecipe.receita_img_url"
        :lazy-src="selectedRecipe.receita_img_url"
        max-height="40vh"
        max-width="40vw"
      >
      </v-img>
      <h3>Categorias</h3>
      <div class="list__category">
          <li
            class="list__member__category"
            @click="getRecipesByCategory({page:1,value:item.categoria_id})"
            v-for="item in selectedRecipe.categorias"
            :key="item.id"
          >
            {{ item.nome_categoria }}
          </li>
        </div>
      <h3>Ingredientes e medidas</h3>
      <div class="recipe__itens">
        <div class="list">
          <h3 class="list__name">Ingredientes</h3>
          <li
            class="list__member"
            v-for="item in selectedRecipe.ingredientes"
            :key="item.id"
          >
            {{ item.nome_ingrediente }}
          </li>
        </div>
        <div class="list">
          <h3 class="list__name">Medida</h3>
          <li
            class="list__member"
            v-for="item in selectedRecipe.ingredientes"
            :key="item.id"
          >
            {{ item.medida }}
          </li>
        </div>
      </div>
      <div class="recipe__content">
          <h1>Modo de preparo</h1>
          <p>{{selectedRecipe.modo_preparo}}</p>
      </div>
    </div>
    <div v-else>
      <NoContent></NoContent>
    </div>
  </div>
</template>

<script>
import NoContent from "../error/NoContent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Recipe",
  computed: { ...mapGetters(["selectedRecipe"]) },
  methods:{...mapActions(["getRecipesByCategory"])},
  components: { NoContent },
};
</script>

<style>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list__category{
    display: flex;
}

.recipe__title {
  display: flex;
  padding: 0 3rem;
  flex-direction: column;
  align-items: center;
}

.recipe__title > h1 {
  font-family: "Grandstander";
  padding: 1rem;
  font-weight: 700;
  font-size: 3rem;
  background: rgb(235, 222, 35);
  border: 3px solid rgb(235, 198, 35);
  border-radius: 8px;
}

.recipe__title > h2 {
  font-family: "Lato";
  color: rgb(94, 93, 93);
  margin-bottom: 1.5rem;
}

.recipe__itens > h3 {
  margin-top: 1rem;
  font-family: "Grandstander";
  color: rgb(94, 93, 93);
  margin-bottom: 1.5rem;
}

.recipe__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.recipe__prepare {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.recipe__prepare > h3 {
  margin-top: 2rem;
  font-family: "Grandstander";
  color: rgb(94, 93, 93);

  margin-bottom: 1.5rem;
  text-align: center;
}

.recipe__prepare > a {
  display: flex;
  text-decoration: none;
}

.recipe__prepare > a > button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: rgb(205, 206, 204);
  border-radius: 7rem;
  transition: 800ms;
  margin-bottom: 2rem;
}

.recipe__prepare > a > button > i {
  background: crimson;
  padding: 1rem;
  border-radius: 7rem 0 0 7rem;
}

.recipe__itens{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.recipe__prepare > a > button > p {
  color: black;
  font-family: "Lato";
  font-weight: 700;
  width: 100%;
}

.recipe__prepare > a > button:hover {
  background: rgb(139, 139, 139);
}

.recipe__prepare > a > button > i.icon__uiui {
  background: rgb(235, 215, 35);
}

@media (max-width: 700px) {
  .recipe__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: baseline;
    justify-content: center;
  }
}
.list__member {
  list-style: none;
  display: flex;
  padding: 0.5rem;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list__member__category{
  list-style: none;
  display: flex;
  padding: 0.5rem;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 500ms;
}

.list__member__category:hover{
    cursor: pointer;
    background: rgb(255, 233, 38);
}

.list__name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: rgb(255, 233, 38);
  border: solid 1px black;
}
</style>