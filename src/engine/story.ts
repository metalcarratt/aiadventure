import { Ref, ref } from "vue";
import { Chapter, Story } from "./storyi";
import { update } from './update';

const storyIndex = ref(0);
const chapterIndex = ref(0);
const store: Ref<Chapter> = ref([]);
const storyReference: Ref<Story> = ref([]);

const updateIndex = () => {
    story.incrementIndex();
    if (story.index() >= story.size()) {
        chapter.incrementIndex();
        story.update(storyReference.value[chapter.index()]);
        story.resetIndex();
    }
    update();
}

export const story = {
    init: (newRef: Story) => {
        storyReference.value = newRef;
        story.update(storyReference.value[chapterIndex.value]);
    },
    isInitialised: () => storyReference.value.length,

    scene: (index: number) => store.value[index],
    size: () => store.value.length,
    update: (newStory: Chapter) => store.value = newStory,

    index: () => storyIndex.value,
    incrementIndex: () => storyIndex.value++,
    resetIndex: () => storyIndex.value = 0,
    updateIndex
}

export const chapter = {
    index: () => chapterIndex.value,
    incrementIndex: () => chapterIndex.value++,
}

