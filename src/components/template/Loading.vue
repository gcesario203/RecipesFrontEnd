<template>
    <div class="loading">
        <img :src="img.sample" alt="loading">
    </div>
</template>

<script>
export default {
    name:'Loading',
    data(){
        return{
            img:{
                sample: require('../../assets/loading.gif')
            }
        }
    }
}
</script>

<style>
    .loading{
        grid-area: content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>