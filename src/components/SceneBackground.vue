<template>
    <img class="background" :src="store.location()">
</template>

<script setup>
import { store } from '../engine/store';
</script>

<style scoped>
img.background {
  width: 100%;
}
</style>