<template>
    <div id="card">
        <div id="imgTarjeta1">
            <img src="../assets/bank.png" height="25">
        </div>
        <div id="tituloTarjeta">
            <b>AMERICAN EXPRESS</b>
        </div>
        <div id="textoTarjeta">
            <b>CREDIT</b>
        </div>
        <div id="imgWifi">
            <img src="../assets/wifi.png" height="30">
        </div>
        <div id="cardNumber">
            <b><span>{{number.replace(/([0-9]{4})/g, '$1 ')}}</span></b>
        </div>
        <div id="textoTarjeta2">
            VALID <br>THRU
        </div>
        <div id="fechaTarjeta">
            <b><span>{{month}}</span>/<span>{{year}}</span></b>
        </div>
        <div id="cvvTarjeta">
            <b><span>{{cvv}}</span></b>
        </div>
        <div id="imgAmerican">
            <img src="../assets/american.png" height="65">
        </div>
        <div id="nameCard">
            <b><span>{{name}}</span></b>
        </div>
    </div><br>
</template>

<script>
    export default{
        props: [
            'name',
            'number',
            'month',
            'year',
            'cvv'
        ]
    }
</script>

<style>
    #card{
        background-color: #C1C1C1;
        width: 324px;
        height: 192px;
        border-radius: 10px;
    }
    #imgTarjeta1{
        position: absolute;
        left: 7%;
        top: 10%;
    }
    #tituloTarjeta{
        font-size: 16px;
        position: absolute;
        top: 10.5%;
        left: 17%;
        color: #868E96;
    }
    #textoTarjeta{
        color: white;
        font-size: 16px;
        position: absolute;
        left: 73%;
        top: 10.5%;
    }
    #textoTarjeta2{
        color: #868E96;
        font-size: 8px;
        position: absolute;
        left: 15%;
        top: 23%;
    }
    #imgWifi{
        transform: rotate(90deg);
        position: absolute;
        left: 75%;
        top: 17%;
    }
    #cardNumber{
        position: absolute;
        left: 8%;
        top: 17.5%;
        font-size: 20px;
        color: #868E96;
    }
    #fechaTarjeta{
        font-size: 20px;
        color: #868E96;
        position: absolute;
        left: 25%;
        top: 22.7%;
    }
    #cvvTarjeta{
        position: absolute;
        left: 60%;
        top: 22.7%;
        color: #868E96;
        font-size: 20px;
    }
    #imgAmerican{
        position: absolute;
        top: 22%;
        left: 74%;
    }
    #nameCard{
        position: absolute;
        left: 8%;
        top: 30%;
        font-size: 11px;
        color: #868E96;
    }
</style>