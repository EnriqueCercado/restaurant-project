<template>
  <v-app>
    <v-main id="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style>
  @font-face{
    font-family: comfortaa;
    src: url('./assets/font/Comfortaa-Regular.ttf')format('truetype');
  }
  #main{
    font-family: comfortaa;
  }
</style>
