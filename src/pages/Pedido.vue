<template>
    <v-card height="110%" max-height="120%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
        <v-main >
            <v-container fluid>
                <div id="bienPedido" v-if="!ready">Bienvenido</div>
                <div id="bienPedido" v-if="ready">Verifica</div>
                <div id="mesaPedido">Mesa {{number}} de <b>Alberto</b></div><br>
                <h4>Resumen de su orden</h4> 
                <items></items>
            </v-container>
            <div v-if="ready">
                <div>
                    <h4>Agregar propina</h4>
                    <v-btn-toggle v-model="toggle">
                        <v-btn @click="tip = Math.round(((subtotal * .1) + Number.EPSILON) * 100) / 100" >
                            <div>
                                <h4>10%</h4>
                                <p>$ {{Math.round(((subtotal * .1) + Number.EPSILON) * 100) / 100}}</p>
                            </div>
                        </v-btn>

                        <v-btn @click="tip = Math.round(((subtotal * .15) + Number.EPSILON) * 100) / 100">
                            <div>
                                <h4>15%</h4>
                                <p>$ {{Math.round(((subtotal * .15) + Number.EPSILON) * 100) / 100}}</p>
                            </div>                        
                        </v-btn>

                        <v-btn @click="tip = Math.round(((subtotal * .2) + Number.EPSILON) * 100) / 100">
                            <div>
                                <h4>20%</h4>
                                <p>$ {{Math.round(((subtotal * .2) + Number.EPSILON) * 100) / 100}}</p>
                            </div>                        
                        </v-btn>

                        <v-btn @click="tip = Math.round(((subtotal * .25) + Number.EPSILON) * 100) / 100">
                            <div>
                                <h4>25%</h4>
                                <p>$ {{Math.round(((subtotal * .25) + Number.EPSILON) * 100) / 100}}</p>
                            </div>                        
                        </v-btn>

                        <v-btn>
                            <h6>Otro</h6>
                        </v-btn>
                    </v-btn-toggle>
                </div>
                <div>
                    <v-banner
                        lines="one"
                        color="deep-purple-accent-4"
                        class="my-4"
                        >
                        <v-banner-text>
                            <img src="../assets/mastercard.png" height="30" alt="">
                            <div id="texto-banner">
                                Tarjeta de crédito/débito
                            </div> 
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn color="info" @click="goToMetodo">Cambiar</v-btn>
                        </template>
                        
                    </v-banner>
                    <v-banner
                        lines="one"
                        class="my-4"
                        >
                        <v-banner-text @click="goToCupon">
                            <img src="../assets/facturaIcon.png" height="30" width="30">
                            <div id="texto-banner">
                                Aplicar cupón
                            </div> 
                        </v-banner-text>
                        
                    </v-banner>
                    <v-btn @click="goToCuenta"  id="addPedido"><img src="../assets/add-user.png" height="30" ></v-btn>
                    <div id="cuenta2">
                    Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span >{{subtotal}}&nbsp;&nbsp;</span><br>
                    Descuento &nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{discount}}&nbsp;&nbsp;</span><br>
                    Propina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{tip}}&nbsp;&nbsp;</span><br>
                    <b>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span >{{subtotal + tip}}&nbsp;&nbsp;</span></b>
                <br>
        </div>
                </div>
                
            </div>
            
        </v-main>
        
        </v-layout>
        <div v-if="!ready" id="cuenta">
                Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<span id="spanPedido">{{subtotal}}</span><br>
                Descuento &nbsp;&nbsp;$<span id="spanPedido2">{{discount}}</span><br>
                Propina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<span id="spanPedido3">{{tip}}</span><br>
                <b>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<span id="spanPedido4">{{subtotal + tip}}</span></b>
                <br>
        </div>
        <div id="botonesPedido">
            <v-btn v-if="!ready" @click="goToIndex" color="info" variant="outlined">ORDENAR MÁS</v-btn> &nbsp;&nbsp;&nbsp;
            <v-btn v-if="!ready" @click="ready = true, tip = Math.round(((subtotal * .25) + Number.EPSILON) * 100) / 100" flat color="info">PAGAR</v-btn>
        </div>
        
    </v-card>
    <div id="botonesPedido2">
            <v-btn v-if="ready" @click="ready = false, tip = 0" color="info" variant="outlined">ATRÁS</v-btn> &nbsp;&nbsp;&nbsp;
            <v-btn v-if="ready" @click="goToPagar" flat color="info">CONTINUAR</v-btn>
        </div>
</template>

<script>
    import Items from '../components/Items.vue'
    import TableService from '../services/TableService';
    export default {
        name: 'Home',

        components: {
            Items
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
            goToMetodo(){
                window.location.pathname = "/metodo"
            },

            goToCupon(){
                window.location.pathname = "/cupon"
            },

            goToCuenta(){
                window.location.pathname = "/cuenta"
            },

            goToPagar(){
                window.location.pathname = "/pagar"
            },

            goToIndex(){
                window.location.pathname = "/"
            }
        },

        mounted(){
            TableService.getResumeTable(TableService.getTable()).then((res) =>{
                this.result = res.data
                this.subtotal = this.result.results.amounts.subtotal
                this.discount = this.result.results.amounts.discount
            })
            this.number = TableService.getTable()
        }
    }
</script>  

<style>
    #botonesPedido{
        position: absolute;
        bottom: 20%;
        left: 10%;
    }

    #botonesPedido2{
        position: absolute;
        bottom: -7%;
        left: 15%;
    }

    #texto-banner{
        position: absolute;
        top: 30%;
        left: 18%;
    }

    #bienPedido{
        font-size: 36px;
    }

    #mesaPedido{
        font-size: 28px;
    }

    #cuenta{
        width: 50%;
        position: absolute;
        left: 45%;
        bottom: 30%;
        font-size: 16px;
    }

    #cuenta2{
        text-align: right;
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

    #addPedido{
        position: absolute;
        left: 5%;
        height: 30px;
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