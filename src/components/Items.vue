<template>
    <div v-if="!result" id="containerItems">
        <div id="cardLoader" class="card-skeleton">
            <div id="text-skeleton" class="skeleton">
                -
            </div><br>
            <div id="text-skeleton" class="skeleton">
                -
            </div>
        </div>
        <div id="cardLoader" class="card-skeleton">
            <div id="text-skeleton" class="skeleton">
                -
            </div><br>
            <div id="text-skeleton" class="skeleton">
                -
            </div>
        </div>
    </div>
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

    #containerItems{
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    #cardLoader{
        padding: 15px 15px 10px;
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 50%;
    }

    #text-skeleteon{
        width: 100%;
    }

    .skeleton{
        animation: skeleton 1s linear infinite alternate;
    }

    .card-skeleton{
        background-color: #f0f0f0;
        border: 1px solid #fafafa;
    }

    @keyframes skeleton{
        0%{
            background-color: #e0e0e0;
            color: #e0e0e0;
        }
        100%{
            background-color: #c9c9c9;
            color: #c9c9c9;
        }
    }
</style>