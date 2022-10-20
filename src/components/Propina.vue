<template>
    <div>
        <div>
            <v-btn-toggle v-model="toggle">
            <v-btn :disabled="!habilitar" @click="tip = Math.round(((subtotal * .1) + Number.EPSILON) * 100) / 100" >
                <div>
                    <h4>10%</h4>
                    <p>$ {{Math.round(((subtotal * .1) + Number.EPSILON) * 100) / 100}}</p>
                </div>
            </v-btn>

            <v-btn :disabled="!habilitar" @click="tip = Math.round(((subtotal * .15) + Number.EPSILON) * 100) / 100">
                <div>
                    <h4>15%</h4>
                    <p>$ {{Math.round(((subtotal * .15) + Number.EPSILON) * 100) / 100}}</p>
                </div>                        
            </v-btn>

            <v-btn :disabled="!habilitar" @click="tip = Math.round(((subtotal * .2) + Number.EPSILON) * 100) / 100">
                <div>
                    <h4>20%</h4>
                    <p>$ {{Math.round(((subtotal * .2) + Number.EPSILON) * 100) / 100}}</p>
                </div>                        
            </v-btn>

            <v-btn :disabled="!habilitar" @click="tip = Math.round(((subtotal * .25) + Number.EPSILON) * 100) / 100">
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
                <v-btn :disabled="!habilitar" color="info" @click="goToMetodo">Cambiar</v-btn>
            </template>
                            
        </v-banner>
        <v-banner
            lines="one"
            class="my-4"
            >
            <v-banner-text :disabled="!habilitar" @click="goToCupon">
                <img src="../assets/facturaIcon.png" height="30" width="30">
                <div id="texto-banner">
                    Aplicar cupón
                </div> 
            </v-banner-text>
                            
        </v-banner>
        <v-btn variant="text" :disabled="!habilitar" @click="goToCuenta"  id="addPedido"><img src="../assets/add-user.png" height="30" ></v-btn>
        <div id="cuenta2">
            Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<br>
            Descuento &nbsp;&nbsp;$<br>
            Propina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<br>
            <b>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$</b>
            <br>
        </div><br><br><br><br>
        <div id="precios2">
            <span id="spanPedido">{{subtotal}}</span><br>
            <span id="spanPedido2">- {{discount}}</span><br>
            <span id="spanPedido3">{{tip}}</span><br>
            <span id="spanPedido4"><b>{{Math.round(((subtotal + tip - discount) + Number.EPSILON) * 100) / 100}}</b></span>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        props: [
            "subtotal",
            "discount",
            "tip",
            "habilitar"
        ],

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
        }
    }
</script>

<style>
    #texto-banner{
        position: absolute;
        top: 30%;
        left: 18%;
    }

    #addPedido{
        position: absolute;
        left: 5%;
        height: 30px;
    }

    #cuenta2{
        text-align: right;
        width: 35%;
        position: absolute;
        left: 40%;
        bottom: 0%;
        font-size: 16px;
    }

    #precios2{
        height: 12.5%;
        width: 19.5%;
        position: absolute;
        left: 75%;
        bottom: 0%;
        font-size: 16px;
    }
</style>
