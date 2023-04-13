<template>
  <template v-if="storyInPlay()">
      <GameContainer/>
      <ShowAttributes />
  </template>
  <StoryChooser v-else />
</template>

<script setup>
import GameContainer from './components/GameContainer.vue';
import StoryChooser from './StoryChooser.vue';
import ShowAttributes from './components/ShowAttributes.vue';
import { story } from './engine/story';

const storyInPlay = () => story.isInitialised();

</script>

<style>
html, body {
margin: 0;
-webkit-tap-highlight-color: transparent;
}
</style>