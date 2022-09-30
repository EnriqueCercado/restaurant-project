<template>
    <v-sheet
        color="grey"
        class="px-3 pt-3 pb-3"
        v-if="!result"
        >
        <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="heading"
        >Cargando...</v-skeleton-loader>
    </v-sheet>
    <v-row v-else dense>
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
            result: null
        }),

        mounted(){
            TableService.getResumeTable(TableService.get("mesa")).then((response) => {
                this.result = response.data
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