<template>
    <v-card height="100%" max-height="120%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <div id="tituloCuenta">Cupones</div>
                    <h4 id="eligeCuenta">Aplica el cupón que desees</h4>
                    <v-radio-group v-model="radioGroup" >
                        <v-radio  label="30% De descuento" :value="1">
                        </v-radio>
                        <v-radio label="10% De descuento" :value="2">
                        </v-radio>
                        <v-radio label="-$100 MXN en tu orden" :value="3">
                        </v-radio>
                    </v-radio-group>
                </v-container>
                
            </v-main>
        </v-layout>
        <div>
            <v-btn id="botonHome" @click="goTo" width="90%" color="info">Aplicar</v-btn>
        </div>
    </v-card>    
</template>

<script>
    export default {
        data () {
            return {
            radioGroup: 1,
            }
        },

        methods:{
            goTo(){
                window.location.pathname = "/pedido"
            }
        },
    }
</script>