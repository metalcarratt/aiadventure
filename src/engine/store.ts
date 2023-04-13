import { ref } from "vue";

const say = ref('');
const pic = ref('');
const location = ref('');
const mono = ref('');
const transition = ref('');
const finished = ref(false);

export const store = {

    say: () => say.value,
    updateSay: (newSay: string) => say.value = newSay,
    clearSay: () => say.value = '',

    pic: () => pic.value,
    updatePic: (newPic: string) => pic.value = newPic,
    clearPic: () => pic.value = '',

    location: () => location.value,
    updateLocation: (newLocation: string) => location.value = newLocation,

    mono: () => mono.value,
    updateMono: (newMono: string) => mono.value = newMono,
    clearMono: () => mono.value = '',

    transition: () => transition.value,
    updateTransition: (newTransition: string) => transition.value = newTransition,
    clearTransition: () => transition.value = '',

    finished: () => finished.value,
    setFinished: () => finished.value = true
}