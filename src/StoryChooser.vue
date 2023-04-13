<template>
    <div class="chooser">
        <img :src="cover"/>
        <h1>Choose a story:</h1>
        <div class="stories">
            <span @click="chooseWorkplaceRomance">Workplace Romance</span>
            <span @click="chooseStrandedLoveIsland">Stranded Love Island</span>
        </div>
    </div>
</template>

<script setup>
import { init } from './engine/init';
import { myStory, initAttributes } from './stories/workplace-romance/index';
import { loveIsland, loveIslandAttributes } from './stories/stranded-love-island/index';

const chooseWorkplaceRomance = () => {
    init(myStory, initAttributes);
}

const chooseStrandedLoveIsland = () => {
    init(loveIsland, loveIslandAttributes);
}

const cover = './cover.jpg';
</script>

<style scoped>
.chooser {
    width: 384px;
    margin: 0 auto;
    position: relative;
}

.chooser img {
    width: 100%;
}

.chooser h1 {
    position: absolute;
    top: 0;
    font-family: "Comic Sans MS";
    text-shadow: 0px 0px 2px black;
    color: #ffbf00;
    text-align: center;
    width: 100%;
}

.stories {
    position: absolute;
    bottom: 40px;
    width: 100%;
    display: flex;
}
.stories span {
    font-family: "Comic Sans MS";
    border: 1px solid black;
    padding: 20px;
    margin: 5px;
    background-color: #37a4c6;
    color: white;
}

.stories span:hover {
    background-color: #256d83;
    cursor: pointer;
}
</style>