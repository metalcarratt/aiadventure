<template>
    <div class="transition" v-if="store.transition()">
      <p>{{ store.transition() }}</p>
    </div>
</template>

<script setup>
import { store } from '../engine/store';
</script>

<style scoped>
.transition {
  position: absolute;
  /* width: 350px; */
  font-family: "Comic Sans MS";
  font-size: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000a;
  width: 100%;
  align-items: center;
  color: #dadada;
}

.transition p {
  margin: 10px;
}
</style>