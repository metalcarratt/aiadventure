import { Ref, ref } from "vue";
import { Choice, CutScene } from "./storyi";
import { doUpdate } from './update';
import { attr } from './attributes';
import { story } from './story';

const choices: Ref<Choice[]> = ref([]);
const choiceSeq: Ref<CutScene[]> = ref([]);
const choosing = ref(false);
const choiceSeqIndex= ref(0);

const incrementChoiceSeqIndex = () => {
    if (choiceSeq.value.length) {
        choiceSeqIndex.value++;
        if (choiceSeqIndex.value === choiceSeq.value.length) {
            choiceSeqIndex.value = 0;
            choiceSeq.value = [];
            chs.clearChoosing();
        }
    }
}

const setChoiceSeq = (seq: CutScene[]) => {
    choiceSeqIndex.value = 0;
    choiceSeq.value = seq;
}

export const chs = {
    choices: () => choices.value,
    hasChoices: () => choices.value.length,
    updateChoices: (newChoices: Choice[]) => choices.value = newChoices,
    clearChoices: () => choices.value = [],

    isChoosing: () => choosing.value,
    setChoosing: () => choosing.value = true,
    clearChoosing: () => choosing.value = false,

    incrementChoiceSeqIndex,

    choiceSeqScene: () => choiceSeq.value[choiceSeqIndex.value],
    setChoiceSeq,
    hasChoiceSeq: () => choiceSeq.value.length,
}

export const clickOutsideChoice = () => {
    if (chs.isChoosing()) {
        chs.incrementChoiceSeqIndex();
        if (chs.hasChoiceSeq()) {
            doUpdate(chs.choiceSeqScene());
            return true;
        }
    }
    return false;
}

export const clickChoice = (choice: Choice) => {
    if (choice.next.attr) {
        for (const key of Object.keys(choice.next.attr)) {
            attr.increment(key, choice.next.attr[key]);
        }
        console.log(`${JSON.stringify(attr.list())}`);
    }
    
    if (choice.next.sequence) {
        chs.setChoiceSeq(choice.next.sequence);
        doUpdate(chs.choiceSeqScene());

    } else if (choice.next.show) {
        chs.clearChoosing();
        doUpdate(choice.next.show);
      
    } else {
        chs.clearChoosing();
        story.updateIndex();
    }
}