<template>
    <div class="container" @click="click">
        <SceneBackground />
        <SceneCharacter />
        <NpcDialogue />
        <CharacterMonologue />
        <CharacterChoices />
        <SceneTransition />
        <GameOver />
    </div>
</template>

<script setup>
import { click } from '../engine/click.js';
import SceneBackground from './SceneBackground.vue';
import SceneCharacter from './SceneCharacter.vue';
import NpcDialogue from './NpcDialogue.vue';
import CharacterMonologue from './CharacterMonologue.vue';
import CharacterChoices from './CharacterChoices.vue';
import SceneTransition from './SceneTransition.vue';
import GameOver from './GameOver.vue';

</script>

<style scoped>
.container {
    display: flex;
    width: 384px;
    margin: 0 auto;
    justify-content: center;
    cursor: pointer;
    position: relative;
}

@media only screen and (max-width: 384px) {
    .container {
        width: 100%;
        margin: 0;
    }
}
</style>