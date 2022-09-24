<template>
    <div id="mesaPost">
        Mesa {{number}} de <b>Alberto</b>
    </div><br>
</template>

<script>
    export default {
        props: ['number']
    }
</script>

<style>
    #mesaPost{
        font-size: 28px;
    }
</style>