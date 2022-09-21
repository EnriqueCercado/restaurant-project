<template>
    <v-card  height="100%" max-width="100%" class="mx-auto" color="white">
        <v-layout> 
        <v-main >
            <v-container fluid>
                <v-app-bar-nav-icon id="menuHome" @click="goToProfile"></v-app-bar-nav-icon>
                
                <div id="bienHome">Bienvenido</div>
                <div id="mesaHome"><table-post :number="number"></table-post></div><br>
                
            </v-container>
            <div id="divHome">
                <img id="hunan" src="../assets/hunan.png"><br>
                Para comenzar realiza tu orden
            </div><br><br>
            
        </v-main>
        </v-layout>
        <div>
            <v-btn id="botonHome" @click="goTo" width="90%" color="info">ORDENAR</v-btn>
        </div>
    </v-card>
</template>

<script>
    import TableService from '../services/TableService';
    import TablePost from '../components/TablePost.vue'
    export default{

        data(){
            return{
                number: 0
            }
        },

        components:{
            TablePost
        },

        methods:{
            goTo(){
                window.location.pathname = "/pedido"
            },
            goToProfile(){
                window.location.pathname = "/menu"
            }
        },
        mounted(){
            this.number = TableService.getTable()
        }
    }
</script>

<style>
    #hunan{
        height: 120px;
    }
    #bienHome{
        font-size: 36px;
    }
    #mesaHome{
        font-size: 28px;
    }
    #divHome{
        text-align: center;
        font-size: 28px;
    }
    #botonHome{
        position: absolute;
        top: 75%;
        left: 5%;
    }
    #menuHome{
        position: absolute;
        top: 5%;
        right: 5%;
    }
</style>
