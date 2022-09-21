<template>
    <v-card height="100%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <div id="tituloPagoEx">Factura</div><br><br>
                    <div id="imgPagoEx">
                        <img height="230" src="../assets/qr.png">

                        <div id="listoPago">¡Hecho Alberto!</div>
                        <p id="pPagoEx">Tu factura ha sido enviada a tu correo electrónico. <br>
                        También puedes descargarla en los enlaces que aparecen en esta pantalla.</p>
                    </div>
                </v-container>
            </v-main>
        </v-layout>
            <div id="botones-factura-ex">
                <v-btn @click="goToPDF" height="50" alt=""><img src="../assets/pdf.png" height="50" alt=""></v-btn>&nbsp;&nbsp;&nbsp;
                <v-btn @click="goToXML" height="50" alt=""><img src="../assets/xml.png" height="50" alt=""></v-btn>
            </div>
    </v-card>
</template>

<script>
    export default{
        name: 'factura-exitosa',
        components: {
        },

        methods:{
            goToPDF(){
                window.open('https://veljhf7ma5.execute-api.us-east-1.amazonaws.com/qas/factura/pdf', '_blank');
            },
            goToXML(){
                window.open('https://veljhf7ma5.execute-api.us-east-1.amazonaws.com/qas/factura/xml')
            }
        }
    }
</script>

<style>
    #botones-factura-ex{
        position: absolute;
        top: 85%;
        left: 27%;
    }
</style>