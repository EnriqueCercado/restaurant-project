<template>
    <v-layout>
        <v-main >
            <v-container fluid>
                <div id="tituloFactura">Factura tu orden</div>
                <v-card height="100%"  color="#F5F5F5">
                    <section>
                        <v-form v-model="valid">
                            <v-container>
                            <v-row>
                                <img src="../assets/facturaIcon.png" height="30" width="30">
                                <div id="texto-datos">
                                    Datos de facturación 
                                </div>
                                
                                <v-col
                                cols="12"
                                md="4"
                                >
                                    <v-text-field
                                        v-model="rfc"
                                        :rules="razonRules"
                                        label="RFC"
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
                                        v-model="razon"
                                        :rules="razonRules"
                                        label="Razón Social"
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
                                        v-model="calle"
                                        :rules="razonRules"
                                        label="Calle"
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
                                        v-model="ext"
                                        :rules="extRules"
                                        label="Número ext."
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                cols="6"
                                md="4"
                                >
                                    <v-text-field
                                        v-model="int"
                                        :rules="razonRules"
                                        label="Número int."
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
                                        v-model="postal"
                                        :rules="extRules"
                                        label="Código postal"
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
                                        v-model="estado"
                                        :rules="razonRules"
                                        label="Estado"
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
                                        v-model="municipio"
                                        :rules="razonRules"
                                        label="Municipio/delegación"
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
                                        v-model="colonia"
                                        :rules="razonRules"
                                        label="Colonia"
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
                                        v-model="regimen"
                                        :rules="razonRules"
                                        label="Régimen fiscal"
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
                                        v-model="cfdi"
                                        :rules="razonRules"
                                        label="Uso CFDI"
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
                                        v-model="correo"
                                        :rules="correoRules"
                                        label="Correo electrónico"
                                        required
                                    ></v-text-field>
                                </v-col>

                            </v-row>
                            </v-container>
                        </v-form>
                    </section>
                </v-card> 
            </v-container>
            <div id="botones">
                <v-btn width="90%" to="/factura-exitosa" flat color="info">FACTURAR</v-btn>
            </div>
        </v-main>
    </v-layout>
</template>

<script>
    export default {
        name: 'Pagar',

        components: {
        },

        data: () => ({
            valid: false,
            razon: '',
            rfc: '',
            calle: '',
            ext: '',
            int: '',
            postal: '',
            estado: '',
            municipio: '',
            colonia: '',
            regimen: '',
            cfdi: '',
            correo: '',
            razonRules: [
                v => !!v || 'Es requerido.'
            ],
            extRules: [
                v => !!v || 'Es requerido un número.',
                v => /^[0-9]+$/.test(v) || 'Solo se admiten números.'
            ],
            correoRules: [
                v => !!v || 'Correo requerido.',
                v => /.+@.+\..+/.test(v) || 'Correo inválido.'
            ]
        }),
    
        setup () {
        }
    }
</script>  

<style>
    #botones{
        text-align: center;
    }
    #texto-datos{
        position: absolute;
        left: 15%;
        top: 1%;
        font-size: 15px;
    }

    #tituloFactura{
        font-size: 36px;
    }
</style>