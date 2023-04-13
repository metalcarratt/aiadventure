<template>
  <GameContainer v-if="storyInPlay()"/>
  <StoryChooser v-else />
</template>

<script setup>
import GameContainer from './components/GameContainer.vue';
import StoryChooser from './StoryChooser.vue';
// import { init } from './engine/init';
import { story } from './engine/story';

// init();

const storyInPlay = () => story.isInitialised();

</script>

<style>
html, body {
margin: 0;
-webkit-tap-highlight-color: transparent;
}
</style>