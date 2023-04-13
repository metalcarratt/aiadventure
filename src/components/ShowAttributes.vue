<template>
    <div class="attributes">
        <h2>Attributes <a href="#" @click.prevent="clickLink">{{ linkText() }}</a></h2>
        <template v-if="show">
            <span v-for="key, iter in attr.names()" :key="iter">
                {{ key }} : {{  attr.get(key) }} 
            </span> 
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { attr } from '../engine/attributes';

const show = ref(false);
const linkText = () => show.value ? 'Hide ^' : 'Show ⌄';

const clickLink = () => show.value = !show.value;
</script>

<style scoped>
.attributes {
    width: 384px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.attributes h2 {
    font-family: "Comic Sans MS";
    font-size: 16px;
}

.attributes h2 a {
    font-size: 12px;
    font-family: sans-serif;
}

@media only screen and (max-width: 384px) {
    .attributes {
        width: 100%;
        margin: 0;
    }
}
</style>