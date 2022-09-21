<template>
    <v-card  height="100%" max-width="100%" class="mx-auto" color="white">
        <v-layout>
            <v-main>
                <v-container fluid>
                    <v-app-bar-nav-icon id="menu" @click="goTo">X</v-app-bar-nav-icon>
                    <div id="bienMenu">Hola Alberto</div>
                </v-container>
                <v-banner
            lines="one"
            class="my-4"
            >
                <v-banner-text>
                <img src="../assets/userIcon.jpg" height="30" width="30">
                <div id="texto-banner">
                    Datos  de perfil
                </div> 
            </v-banner-text>
        </v-banner>
        <v-banner
            lines="one"
            class="my-4"
            >
                <v-banner-text>
                <img src="../assets/historial.png" height="30" width="30">
                <div id="texto-banner">
                    Historial de órdenes
                </div> 
            </v-banner-text>
        </v-banner>
        <v-banner
            lines="one"
            class="my-4"
            >
                <v-banner-text>
                <img src="../assets/cardIcon.png" height="30" width="30">
                <div id="texto-banner">
                    Métodos de pago
                </div> 
            </v-banner-text>
        </v-banner>
        <v-banner
            lines="one"
            class="my-4"
            >
                <v-banner-text>
                <img src="../assets/cupon.jpg" height="40" width="40">
                <div id="texto-banner">
                    Cupones
                </div> 
            </v-banner-text>
        </v-banner>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
    export default{
            methods: {
            goTo(){
                window.location.pathname = "/"
            }
        },
    }
</script>

<style>
    #bienMenu{
        font-size: 36px;
    }
    #menu{
        position: absolute;
        top: 5%;
        right: 5%;
    }

</style>