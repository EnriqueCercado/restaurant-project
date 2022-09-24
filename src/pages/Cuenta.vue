<template>
    <v-card height="100%" max-height="120%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <div id="bienvenido">Divide la cuenta</div>
                    <table-post :number="number"></table-post>
                    <h4>Elige cómo pagar</h4>
                    <v-radio-group v-model="radioGroup" >
                        <v-radio  label="Mitad y mitad" :value="1">
                        </v-radio>
                        <v-radio label="Elige el monto que paga uno" :value="2">
                        </v-radio>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                label="Cantidad"
                                model-value= 0.00
                                prefix="$"
                                ><div id="subtextCuenta">por invitado</div></v-text-field>
                                
                            </v-col>
                        </v-row>
                        <v-radio label="Cada quien paga lo suyo" :value="3">
                        </v-radio>
                    </v-radio-group>
                </v-container>
                
            </v-main>
        </v-layout>
        <div>
            <v-btn id="unBtn" @click="goTo" width="90%" color="info">GUARDAR</v-btn>
        </div>
    </v-card>    
</template>

<script>
    import TableService from '../services/TableService';
    import TablePost from '../components/TablePost.vue'
    export default {
        components:{
            TablePost
        },

        data () {
            return {
                radioGroup: 1,
                number: 0,
                cantidad: 0
            }
        },

        methods:{
            goTo(){
                window.location.pathname = "/pedido"
            }
        },

        mounted(){
            this.number = TableService.get("mesa")
        }
    }
</script>

<style>

    #subtextCuenta{
        position: absolute;
        right: 5%;
        top: 50%;
    }

</style>