<template>
    <v-card height="110%" max-height="120%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
        <v-main >
            <v-container fluid>
                <div id="bienvenido" v-if="!ready">Bienvenido</div>
                <div id="bienvenido" v-if="ready">Verifica</div>
                <table-post :number="number"></table-post>
                <h4>Resumen de su orden</h4> 
                <items></items><br>
                <h4 v-if="ready">Agregar propina</h4>
            </v-container>
            <propina v-if="ready"
            :subtotal="subtotal"
            :discount="discount"
            :tip="tip"
            ></propina>
        </v-main>
        </v-layout>
        <div v-if="!ready" id="cuenta">
            Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<br>
            Descuento &nbsp;&nbsp;$<br>
            Propina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<br>
            <b>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$</b>
            <br>
        </div>
        <div v-if="!ready" id="precios">
            <span id="spanPedido">{{subtotal}}</span><br>
            <span id="spanPedido2">- {{discount}}</span><br>
            <span id="spanPedido3">{{tip}}</span><br>
            <span id="spanPedido4"><b>{{subtotal - discount}}</b></span>
        </div>

        <v-btn id="btn1Pedido" v-if="!ready" @click="goToIndex" color="info" variant="outlined">ORDENAR MÁS</v-btn>

        <v-btn id="btn2Pedido" v-if="!ready" @click="addReady" flat color="info">PAGAR</v-btn>
    </v-card>
    <v-btn id="btn3Pedido" v-if="ready" @click="goBack" color="info" variant="outlined">ATRÁS</v-btn> 
        
    <v-btn id="btn4Pedido" v-if="ready" @click="goToPagar" flat color="info">CONTINUAR</v-btn>
</template>

<script>
    import Items from '../components/Items.vue'
    import TableService from '../services/TableService';
    import Propina from '../components/Propina.vue'
    import TablePost from '../components/TablePost.vue'
    export default {
        name: 'Home',

        components: {
            Items,
            Propina,
            TablePost
        },

        data(){
            return {
                ready: false,
                result: null,
                subtotal: 0,
                discount: 0,
                tip: 0,
                total: 0,
                toggle: 3,
                number: 0
            }
        },

        methods:{
            goToPagar(){
                window.location.pathname = "/pagar"              
            },

            goToIndex(){
                if(TableService.has("ready")){
                    TableService.delete("ready")
                }      
                if(TableService.has("desc")){
                    TableService.delete("desc")
                }            
                window.location.pathname = "/"
            },

            addReady(){
                if(TableService.has("ready")){
                    this.ready = true
                } else{
                    window.location.search += "&ready"
                }             
            },

            goBack(){
                this.tip = 0
                this.ready = false
            }
        },

        mounted(){
            if(TableService.has("ready")){
                this.ready = true
            }
            TableService.getResumeTable(TableService.get("mesa")).then((res) =>{
                this.result = res.data
                this.subtotal = this.result.results.amounts.subtotal
                if(TableService.has("desc")){
                    if(TableService.get("desc") == 1){
                        this.discount = Math.round(((this.result.results.amounts.subtotal * .3) + Number.EPSILON) * 100) / 100
                    }else if(TableService.get("desc") == 2){
                        this.discount = Math.round(((this.result.results.amounts.subtotal * .1) + Number.EPSILON) * 100) / 100
                    }else{
                        this.discount = 100
                    }
                }
            })
            this.number = TableService.get("mesa")
        }
    }
</script>  

<style>
    #btn1Pedido{
        position: absolute;
        bottom: 20%;
        left: 10%;
        width: 37.5%;
    }

    #btn2Pedido{
        position: absolute;
        bottom: 20%;
        right: 10%;
        width: 37.5%;
    }

    #btn3Pedido{
        position: absolute;
        bottom: -7%;
        left: 10%;
        width: 37.5%;
    }

    #btn4Pedido{
        position: absolute;
        bottom: -7%;
        right: 10%;
        width: 37.5%;
    }

    #cuenta{
        width: 35%;
        position: absolute;
        left: 45%;
        bottom: 30%;
        font-size: 16px;
    }

    #precios{
        height: 12.4%;
        width: 15%;
        position: absolute;
        left: 80%;
        bottom: 30%;
        font-size: 16px;
    }

    #spanPedido{
        text-align: right;
        position: absolute;
        top: 0%;
        right: 0%;
    }

    #spanPedido2{
        text-align: right;
        position: absolute;
        top: 25%;
        right: 0%;
    }

    #spanPedido3{
        text-align: right;
        position: absolute;
        top: 50%;
        right: 0%;
    }

    #spanPedido4{
        text-align: right;
        position: absolute;
        top: 75%;
        right: 0%;
    }

    h4{
        font-size: 18px;
    }

    h6{
        font-size: 10px;
    }

    p{
        font-size: 10px;
    }
</style>