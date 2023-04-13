<template>
    <GameContainer />
</template>

<script setup>
import GameContainer from './components/GameContainer.vue';
import { update } from './engine/update.js';

update();

</script>

<style>
html, body {
  margin: 0;
}
</style>