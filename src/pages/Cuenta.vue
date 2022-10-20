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
                                <v-text-field :disabled="radioGroup != 2"
                                label="Cantidad"
                                v-model="cantidad"
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
                cantidad: null
            }
        },

        methods:{
            goTo(){
                if(TableService.has("cuenta")){
                    if(this.radioGroup == 2){
                        TableService.set("cuenta", this.cantidad)
                    } else {
                        this.radioGroup = this.radioGroup * -1
                        TableService.set("cuenta", this.radioGroup)
                    }
                } else {
                    if(this.radioGroup == 2){
                        TableService.append("cuenta", this.cantidad)
                    } else {
                        this.radioGroup = this.radioGroup * -1
                        TableService.append("cuenta", this.radioGroup)
                    }
                }
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