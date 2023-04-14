<template>
    <div class="dialogue" :style="style()" v-if="store.say()">{{ store.say() }}</div>
</template>

<script setup>
import { store } from '../engine/store';

const style = () => store.colour() ? `color: ${store.colour()}; background-color: ${store.bgColour()}; border: 1px double ${store.colour()}` : '';
</script>

<style scoped>
.dialogue {
  position: absolute;
  width: calc(100% - 30px);
  background-color: #9393c2;
  padding: 8px;
  margin-top: 5px;
  border: 1px double #0d147c;
  font-family: "Comic Sans MS";
  font-size: 18px;
  color: #0d147c;
}
</style>