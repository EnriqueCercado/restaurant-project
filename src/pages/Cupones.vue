<template>
    <v-card height="100%" max-height="120%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <div id="bienvenido">Cupones</div><br>
                    <h4>Aplica el cupón que desees</h4>
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
            <v-btn id="unBtn" @click="goTo" width="90%" color="info">Aplicar</v-btn>
        </div>
    </v-card>    
</template>

<script>
    import TableService from '../services/TableService';
    export default {
        data () {
            return {
            radioGroup: 1,
            }
        },

        methods:{
            goTo(){
                if(TableService.has("desc")){
                    TableService.set("desc", this.radioGroup)
                } else{
                    TableService.append("desc", this.radioGroup)
                }
                window.location.pathname = "/pedido"
            }
        },
    }
</script>