<template>
    <v-card height="100%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <div id="tituloPagoEx">Pago exitoso</div><br><br>
                    <div id="imgPagoEx">
                        <img height="230" src="../assets/qr.png">

                        <div id="listoPago">¡Listo Alberto!</div>
                        <p id="pPagoEx">Agradecidos con tu preferencia, haz ganado un cupón de descuento del -10% en tu siguiente visita. <br>
                        Muestra tu código QR al salir.</p>
                    </div>
                </v-container>
            </v-main>
        </v-layout>
        <div id="botones-pago-ex">
                <v-btn to="/" color="info" variant="outlined">LISTO</v-btn> &nbsp;&nbsp;&nbsp;
                <v-btn to="/factura" flat color="info">FACTURAR</v-btn>
            </div>
    </v-card> 
</template>

<script>
    export default{
        name: 'pago-exitoso',

        components: {
        }
    }
</script>

<style>
    #imgPagoEx{
        text-align: center;
    }

    #tituloPagoEx{
        font-size: 36px;
    }
    
    #listoPago{
        font-size: 34px;
    }

    #pPagoEx{
        font-size: 14px;
    }

    #botones-pago-ex{
        position: absolute;
        top: 85%;
        left: 18%;
    }
</style>