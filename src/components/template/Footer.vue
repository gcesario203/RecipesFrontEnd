<template>
    <div class="footer">
        <span>Feito com <v-icon style="color:red">mdi-heart</v-icon> pelo grupo <b>ponto e virgula</b></span>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.footer{
    grid-area: footer;
    background: linear-gradient(to right,#F5CB5C,#ecbc38);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 3rem 0 0;
}
</style>