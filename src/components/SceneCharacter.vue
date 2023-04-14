<template>
    <img class="character" :src="store.pic()" v-if="showPic()">
</template>

<script setup>
import { store } from '../engine/store';

const showPic = () => store.pic() !== 'none';
</script>

<style scoped>
img.character {
  height: 75%;
  position: absolute;
  /* margin-top: 150px; */
  bottom: 0;
}
</style>