<template>
    <div class="chooser">
        <img :src="cover"/>
        <h1>AI Adventures</h1>
        <div class="stories">
            <img @click="chooseWorkplaceRomance" :src="workplaceRomanceImg" class="book" />
            <img @click="chooseStrandedLoveIsland" :src="strandedLoveIslandImg" class="book" />
            <img @click="chooseLoveHauntedHouse" :src="loveHauntedHouseImg" class="book" />
        </div>
        <a :href="aboutLocation">About</a>
    </div>
</template>

<script setup>
import { init } from './engine/init';
import { myStory, initAttributes } from './stories/workplace-romance/index';
import { loveIsland, loveIslandAttributes } from './stories/stranded-love-island/index';
import { hauntedHouse, hauntedHouseAttributes} from './stories/love-haunted-house/index';

const chooseWorkplaceRomance = () => {
    init(myStory, initAttributes);
}

const chooseStrandedLoveIsland = () => {
    init(loveIsland, loveIslandAttributes);
}

const chooseLoveHauntedHouse = () => {
    init(hauntedHouse, hauntedHouseAttributes);
}

const cover = './cover.jpg';
const workplaceRomanceImg = './workplace/cover.jpg';
const strandedLoveIslandImg = './island/cover.jpg';
const loveHauntedHouseImg = './haunted/cover.jpg';
const aboutLocation = './about/index.html';
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

.chooser a {
    font-family: sans-serif;
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
    top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
}

img.book {
    width: 125px;
    height: 162px;
    border: 1px solid #69acf4;
    box-shadow: 1px 1px 8px;
}

img.book:hover {
    width: 140px;
    height: 181px;
    cursor: pointer;
}
</style>