<template>
    <v-row v-if="ready" dense>
        <v-col>
            <v-banner 
                v-for="n in result.results.items.length"
                :key="n"
            >
                <v-banner-text>
                    <div id="tituloItem"><b>{{result.results.items[n-1].quantity}} {{result.results.items[n-1].description}}</b></div><br>
                    <div id="subtituloItem">{{result.results.items[n-1].size}}</div>
                    <div id="precioItem">${{result.results.items[n-1].price}}</div>
                </v-banner-text>
            </v-banner>
        </v-col>
    </v-row>
</template>

<script>
    import TableService from '../services/TableService';
    export default {
        name: 'Items',

        data: () => ({
            result: null,
            ready: false,
        }),

        beforeMount(){
            TableService.getResumeTable(TableService.getTable()).then((response) => {
                    this.result = response.data
                    this.ready = true
                })
        }
    }
</script>

<style>
    #tituloItem{
        font-size: 16px;
    }

    #subtituloItem{
        font-size: 14px;
        color: #696969;
        position: absolute;
        top: 50%;
    }

    #precioItem{
        font-size: 14px;
        position: absolute;
        right: 5%;
        bottom: 25%;
    }
</style>