<template>
    <div class="choices" v-if="chs.hasChoices()">
        <span
            class="choice"
            v-for="choice, choiceIndex in chs.choices()"
            :key="choiceIndex"
            @click.stop="clickChoice(choice)"
        >
            ➥ {{ choice.say }}
        </span>
    </div>
</template>

<script setup>
import { chs, clickChoice } from '../engine/choices';
</script>

<style scoped>
.choices {
  position: absolute;
  width: calc(100% - 15px);
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
</style>