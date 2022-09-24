<template>
    <v-layout>
        <v-main >
            <v-container fluid>
                <div id="bienvenido">Realiza tu pago</div>
                <tarjeta 
                    :name="name.toUpperCase()"
                    :number="cardNumber"
                    :month="month"
                    :year="year"
                    :cvv="cvv"
                    ></tarjeta>
                <v-card height="100%"  color="#F5F5F5">
                    <section id="form-section">
                        <v-form v-model="valid">
                            <v-container>
                            <v-row>
                                <img src="../assets/cardIcon.png" height="30" width="30">
                                <div id="texto-agregar">
                                    Agregar tarjeta de crédito / débito
                                </div>
                                
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Nombre del tarjetahabitante"
                                    required
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="cardNumber"
                                    :rules="cardRules"
                                    :counter="16"
                                    label="Card Number"
                                    required
                                ><img id="iconCard" src="../assets/american.png" height="55"></v-text-field>
                                </v-col>
                            </v-row>
                            <div>Fecha de expiración</div> <br>
                            <v-row>
                                
                                <v-col
                                cols="6"
                                md="4"
                                >
                                <v-text-field
                                    v-model="month"
                                    :rules="monthRules"
                                    label="Mes"
                                    required
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="6"
                                md="4"
                                >
                                <v-text-field
                                    v-model="year"
                                    :rules="yearRules"
                                    label="Año"
                                    required
                                ></v-text-field>
                                </v-col>

                            </v-row>
                            <v-row>
                                    <v-col
                                cols="6"
                                md="4"
                                >
                                <v-text-field
                                    v-model="cvv"
                                    :rules="cvvRules"
                                    label="CVV"
                                    required
                                ></v-text-field>
                                </v-col>
                            
                            </v-row>
                            </v-container>
                        </v-form>
                    </section>
                </v-card>
            </v-container>
            <v-btn id="btnsPagar" @click="goBack" color="info" variant="outlined">ATRÁS</v-btn> &nbsp;&nbsp;&nbsp;
            <v-btn id="btnsPagar" to="/pago-exitoso" flat color="info">REALIZAR PAGO</v-btn>
        </v-main>
    </v-layout>    
</template>

<script>
    import Tarjeta from '../components/Tarjeta.vue';

    export default {
        name: 'Pagar',

        components: {
            Tarjeta
        },

        methods:{
            goBack(){
                window.location.pathname = "/pedido"
            }
        },

        data: () => ({
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Es requerido un nombre.'
            ],
            cardNumber: '',
            cardRules: [
                v => !!v || 'Es requerido un número de tarjeta.',
                v => /^[0-9]+$/.test(v) || 'Solo se admiten números.',
                v => v.length <= 16 || 'El número debe ser de 16 dígitos.',
                v => v.length >= 16 || 'El número debe ser de 16 dígitos.'
            ],
            month: '',
            monthRules: [
                v => !!v || 'Es requerido.',
                v => /^[0-9]+$/.test(v) || 'Solo se admiten números.',
                v => v.length <= 2 || 'El número debe ser de 2 dígitos.',
                v => v.length >= 2 || 'El número debe ser de 2 dígitos.',
                v => v <= 12 || 'Debe ser un mes válido.'
            ],
            year: '',
            yearRules: [
                v => !!v || 'Es requerido.',
                v => /^[0-9]+$/.test(v) || 'Solo se admiten números.',
                v => v.length <= 2 || 'El número debe ser de 2 dígitos.',
                v => v.length >= 2 || 'El número debe ser de 2 dígitos.',
            ],
            cvv: '',
            cvvRules: [
                v => !!v || 'Es requerido.',
                v => /^[0-9]+$/.test(v) || 'Solo se admiten números.',
                v => v.length <= 3 || 'El número debe ser de 3 dígitos.',
                v => v.length >= 3 || 'El número debe ser de 3 dígitos.',
            ]
        })
    }
</script>  

<style>
    #btnsPagar{
        left: 10%;
        width: 37.5%;
    }

    #texto-agregar{
        position: absolute;
        left: 15%;
        top: 2%;
        font-size: 15px;
    }

    #iconCard{
        position: absolute;
        left: 80%;
        top: 5%;
    }
</style>