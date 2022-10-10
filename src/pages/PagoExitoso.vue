<template>
    <v-card height="100%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <div id="bienvenido">Pago exitoso</div><br><br>
                    <div id="imgQR">
                        <img height="230" src="../assets/qr.png">

                        <div id="listo">¡Listo Alberto!</div>
                        <p id="pExitoso">Agradecidos con tu preferencia, haz ganado un cupón de descuento del -10% en tu siguiente visita. <br>
                        Muestra tu código QR al salir.</p>
                    </div>
                </v-container>
            </v-main>
        </v-layout>
            <v-btn id="btn1Pago" to="/" color="info" variant="outlined">LISTO</v-btn> &nbsp;&nbsp;&nbsp;
            <v-btn id="btn2Pago" to="/factura" flat color="info">FACTURAR</v-btn>
    </v-card> 
</template>

<script>
    export default{
        name: 'pago-exitoso'
    }
</script>

<style>
    #imgQR{
        text-align: center;
    }
    
    #listo{
        font-size: 34px;
    }

    #pExitoso{
        font-size: 14px;
    }

    #btn1Pago{
        position: absolute;
        bottom: 10%;
        left: 10%;
        width: 37.5%;
    }

    #btn2Pago{
        position: absolute;
        bottom: 10%;
        right: 10%;
        width: 37.5%;
    }
</style>