<template>
    <img class="character" :src="store.pic()">
</template>

<script setup>
import { store } from '../engine/store.js';
</script>

<style scoped>
img.character {
  height: 75%;
  position: absolute;
  /* margin-top: 150px; */
  bottom: 0;
}
</style>