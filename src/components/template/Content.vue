<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style>
.content{
    grid-area: content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E8EDDF;
    overflow-y: scroll;
}
</style>