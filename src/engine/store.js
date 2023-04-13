import { ref } from "vue";

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
const choosing = ref(false);
const finished = ref(false);

export const store = {

    say: () => say.value,
    updateSay: (newSay) => say.value = newSay,
    clearSay: () => say.value = '',

    pic: () => pic.value,
    updatePic: (newPic) => pic.value = newPic,
    clearPic: () => pic.value = '',

    location: () => location.value,
    updateLocation: (newLocation) => location.value = newLocation,

    mono: () => mono.value,
    updateMono: (newMono) => mono.value = newMono,
    clearMono: () => mono.value = '',

    choices: () => choices.value,
    hasChoices: () => choices.value.length,
    updateChoices: (newChoices) => choices.value = newChoices,
    clearChoices: () => choices.value = [],

    isChoosing: () => choosing.value,
    setChoosing: () => choosing.value = true,
    clearChoosing: () => choosing.value = false,

    transition: () => transition.value,
    updateTransition: (newTransition) => transition.value = newTransition,
    clearTransition: () => transition.value = '',

    attr: (key = null) => key ? attr.value[key] : attr.value,
    incrementAttribute: (key, amount) => attr.value[key] += amount,

    finished: () => finished.value
}