<template>
  <div class="container" @click="click">
    <img class="background" :src="location">
    <img class="character" :src="pic">
    <div class="dialogue" v-if="say">{{ say }}</div>
    <div class="monologue" v-if="mono">{{  mono }}</div>
    <div class="choices" v-if="choices.length">
      <span class="choice" v-for="choice, choiceIndex in choices" :key="choiceIndex" @click.stop="clickChoice(choice)">
        ➥ {{ choice.say }}
      </span>
    </div>
    <div class="transition" v-if="transition">{{ transition }}</div>
    <div class="gameOver" v-if="finished">Game Over! Thanks for playing!</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { myStory } from './stories/workplace-romance/index.js';

const storyIndex = ref(0);
const chapterIndex = ref(0);
const say = ref('');
const pic = ref('');
const location = ref('');
const mono = ref('');
const choices = ref([]);
const transition = ref('');
const attr = ref({
  arrogant: 0,
  friendly: 0,
  trust: 0,
  competency: 0
})
const story = ref(myStory[chapterIndex.value]);
const choosing = ref(false);
const finished = ref(false);


const click = () => {
  if (choosing.value) {
    return;
  }
  updateStoryIndex();
}

const updateStoryIndex = () => {
  storyIndex.value++;
    if (storyIndex.value >= story.value.length) {
    chapterIndex.value++;
    story.value = myStory[chapterIndex.value];
    storyIndex.value = 0;
  }
  update();
}

const clickChoice = (choice) => {
  choosing.value = false;
  
  if (choice.next.attr) {
    for (const key of Object.keys(choice.next.attr)) {
      attr.value[key] += choice.next.attr[key];
    }
  }
  console.log(JSON.stringify(attr.value));
  
  if (choice.next.show) {
    doUpdate(choice.next.show);
    
  } else {
    updateStoryIndex();
  }
}

const update = () => {
  if (!finished.value) {
    const index = storyIndex.value;
    if (story.value[index]) {
      doUpdate(story.value[index]);
    }
}
}

const doUpdate = (show) => {
  if (show.say) {
      mono.value = '';
      choices.value = [];
      say.value = show.say;
      transition.value = '';
  }

  if (show.pic) {
      pic.value = show.pic;
  }

  if (show.location) {
      location.value = show.location;
  }
  
  if (show.mono) {
      say.value = '';
      choices.value = [];
      transition.value = '';
      mono.value = show.mono;
  }
  
  if (show.choices) {
      say.value = '';
      mono.value = '';
      transition.value = '';
      choices.value = show.choices;
      choosing.value = true;
  }

  if (show.transition) {
    pic.value = '';
    say.value = '';
    mono.value = '';
    choices.value = [];
    transition.value = show.transition
  }

  if (show.endings) {
    // console.log('show has endings');
    endingsloop:
    for (const ending of show.endings) {
      // console.log(`ending: ${JSON.stringify(ending)}`);
      for (const key of Object.keys(ending.min)) {
        // console.log(`key: ${key}`);
        if (attr.value[key] < ending.min[key]) {
          // console.log('req not met');
          continue endingsloop;
        }
      }
      for (const key of Object.keys(ending.max)) {
        if (attr.value[key] > ending.max[key]) {
          // console.log('req not met');
          continue endingsloop;
        }
      }
      // console.log(`req met ${JSON.stringify(ending.show)}`);
      doUpdate(ending.show);
      finished.value = true;
      return;
    }
  }
}

update();

</script>

<style>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

img.background {
  height: 500px;
}

img.character {
  height: 350px;
  position: absolute;
  margin-top: 150px;
}

.dialogue {
  position: absolute;
  width: 350px;
  background-color: #9393c2;
  padding: 8px;
  margin-top: 5px;
  border: 1px double #0d147c;
  font-family: "Comic Sans MS";
  font-size: 18px;
  color: #0d147c;
}

.monologue {
  position: absolute;
  width: 350px;
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

.choices {
  position: absolute;
  width: 350px;
  margin-bottom: 5px;
  bottom: 0;
  font-family: "Comic Sans MS";
  font-size: 18px;
}

.choice {
  background-color: #c2ad93;
  padding: 8px;
  border: 1px double #7c510d;
  color: #7c510d;
  display: block;
  margin-top: 5px;
}

.choice:hover {
  background-color: #a3927d;
}

.transition {
  position: absolute;
  width: 350px;
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

.gameOver {
  position: absolute;
  width: 350px;
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
