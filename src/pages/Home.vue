<template>
    <v-card  height="100%" max-width="100%" class="mx-auto" color="white">
        <v-layout> 
        <v-main >
            <v-container fluid>
                <img src="../assets/menu.png" height="100" id="menuHome" @click="goToProfile">
                
                <div id="bienvenido">Bienvenido</div>
                <table-post :number="number"></table-post>
                
            </v-container>
            <div id="divHome">
                <img id="hunan" src="../assets/hunan.png"><br>
                Para comenzar realiza tu orden
            </div><br><br>
        </v-main>
        </v-layout>
        <div>
            <v-btn id="unBtn" @click="goTo" width="90%" color="info">ORDENAR</v-btn>
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
                window.location.search += "&ready=false" 
                window.location.pathname = "/pedido"
            },
            goToProfile(){
                window.location.pathname = "/menu"
            },
        },
        mounted(){
            this.number = TableService.get("mesa")
        }
    }
</script>

<style>
    #hunan{
        height: 120px;
    }
    #bienvenido{
        font-size: 36px;
    }
    #divHome{
        text-align: center;
        font-size: 28px;
    }
    #unBtn{
        position: absolute;
        top: 75%;
        left: 5%;
    }
    #menuHome{
        position: absolute;
        top: -3%;
        right: -3%;
        outline: none;
    }
</style>
