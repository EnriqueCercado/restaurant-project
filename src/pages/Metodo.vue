<template>
<v-layout >
    <v-main>
        <v-container fluid>
            <div id="bienvenido">Método de pago</div> <br>
            <v-card height="100%" color="#F5F5F5">
                <img src="../assets/cardIcon.png" height="50" width="50">
                <div id="texto-metodo-pago">
                    Selecciona tu método de pago
                </div>
                <div  class="fill-height">
                    <v-banner
                        lines="one"
                        color="deep-purple-accent-4"
                        class="my-4"
                        >
                        <v-banner-text @click="goTo">
                            <img src="../assets/mastercard.png" height="30" alt="">
                            <div id="texto-banner">
                                Tarjeta de crédito/débito
                            </div> 
                        </v-banner-text>                        
                    </v-banner>
                    <v-banner
                        lines="one"
                        class="my-4"
                        >
                        <v-banner-text @click="goTo">
                            <img src="../assets/paypal.png" height="30" width="40">
                            <div id="texto-banner">
                                Paypal
                            </div> 
                        </v-banner-text>
                    </v-banner>
                    <v-banner
                        lines="one"
                        color="deep-purple-accent-4"
                        class="my-4"
                        >
                        <v-banner-text @click="goTo">
                            <img src="../assets/apple-pay.png" height="30" alt="">
                            <div id="texto-banner">
                                Apple pay
                            </div> 
                        </v-banner-text>                        
                    </v-banner>
                    <v-banner
                        lines="one"
                        class="my-4"
                        >
                        <v-banner-text @click="goTo">
                            <img src="../assets/mercado-pago.png" height="30" width="30">
                            <div id="texto-banner">
                                Mercado pago
                            </div> 
                        </v-banner-text>
                    </v-banner>
                    <v-banner
                        lines="one"
                        class="my-4"
                        >
                        <v-banner-text @click="goTo">
                            <img src="../assets/estrella.png" height="30" width="30">
                            <div id="texto-banner">
                                Puntos restaurante
                            </div> 
                        </v-banner-text>
                    </v-banner>
                </div>
            </v-card>
                
        </v-container>
    </v-main>
</v-layout>
</template>

<script>
    export default {
        name: 'Metodo',

        methods:{
            goTo(){
                window.location.pathname = "/pedido"
            }
        }
    }
</script>  

<style>
    #texto-metodo-pago{
        position: absolute;
        left: 18%;
        top: 4%;
        font-size: 15px;
    }

    #opcionesMetodo{
        text-align: left;
        width: 100%;
    }
</style>