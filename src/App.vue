<template>
  <GameContainer />
</template>

<script setup>
import GameContainer from './components/GameContainer.vue';
import { init } from './engine/init';

init();

</script>

<style>
html, body {
margin: 0;
-webkit-tap-highlight-color: transparent;
}
</style>