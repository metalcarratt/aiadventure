<template>
    <div class="gameOver" v-if="store.finished()">Game Over! Thanks for playing!</div>
</template>

<script setup>
import { store } from '../engine/store';
</script>

<style scoped>
.gameOver {
  position: absolute;
  width: 350px;
  background-color: #c2ad93;
  padding: 8px;
  margin-bottom: 5px;
  bottom: 0;
  border: 1px double #7c510d;
  font-family: "Comic Sans MS";
  font-size: 18px;
  color: #7c510d;
  font-style: italic;
}
</style>