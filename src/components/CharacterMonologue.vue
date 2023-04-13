<template>
    <div class="monologue" v-if="store.mono()">{{ store.mono() }}</div>
</template>

<script setup>
import { store } from '../engine/store';
</script>

<style scoped>
.monologue {
  position: absolute;
  width: calc(100% - 30px);
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