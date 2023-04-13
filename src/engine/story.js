import { ref } from "vue";
import { myStory } from '../stories/workplace-romance/index.js';
import { update } from './update.js';

const storyIndex = ref(0);
const chapterIndex = ref(0);
const _story = ref(myStory[chapterIndex.value]);

const updateIndex = () => {
    story.incrementIndex();
        if (story.index() >= story.size()) {
        chapter.incrementIndex();
        story.update(myStory[chapter.index()]);
        story.resetIndex();
    }
    update();
}

export const story = {
    scene: (index) => _story.value[index],
    size: () => _story.value.length,
    update: (newStory) => _story.value = newStory,

    index: () => storyIndex.value,
    incrementIndex: () => storyIndex.value++,
    resetIndex: () => storyIndex.value = 0,
    updateIndex
}

export const chapter = {
    index: () => chapterIndex.value,
    incrementIndex: () => chapterIndex.value++,
}

