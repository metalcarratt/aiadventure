import { Ref, ref } from "vue";
import { Ending } from "./storyi";
import { doUpdate } from "./update";

const finished = ref(false);
const ending: Ref<Ending> = ref({});
const endingIndex = ref(0);
const showEnding = ref(false);

export const end = {
    finished: () => finished.value,
    setFinished: () => finished.value = true,
    setEnding: (_ending: Ending) => {
        ending.value = _ending;
        endingIndex.value = 0;
        showEnding.value = true;
    }
}

export const inEnding = () => {
    console.log('inEnding');
    if (!showEnding.value) {
        console.log('showing ending');
        return false;
    }

    endingIndex.value++;
    if (ending.value.sequence && endingIndex.value < ending.value.sequence.length) {
        console.log('show next seq');
        doUpdate(ending.value.sequence[endingIndex.value]);
        return true;
    } else {
        console.log('sequence finished');
        end.setFinished();
        showEnding.value = false;
        return false;
    }
}