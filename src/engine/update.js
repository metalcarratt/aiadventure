import { store } from './store.js';
import { story } from './story.js';

export const update = () => {
    if (!store.finished.value) {
        const index = story.index();
        if (story.scene(index)) {
            doUpdate(story.scene(index));
        }
    }
}
  
export const doUpdate = (show) => {
    if (show.say) {
        clearConvo();
        store.updateSay(show.say);
    }
  
    if (show.pic) {
        store.updatePic(show.pic);
    }
  
    if (show.location) {
        store.updateLocation(show.location);
    }
    
    if (show.mono) {
        clearConvo();
        store.updateMono(show.mono);
    }
    
    if (show.choices) {
        clearConvo();
        store.updateChoices(show.choices);
        store.setChoosing();
    }
  
    if (show.transition) {
      clearConvo();
      store.clearPic();
      store.updateTransition(show.transition)
    }
  
    showEnding(show);
  }

const showEnding = (show) => {
    if (show.endings) {
        endingsloop:
        for (const ending of show.endings) {
            for (const key of Object.keys(ending.min)) {
                if (store.attr(key) < ending.min[key]) {
                continue endingsloop;
                }
            }
            for (const key of Object.keys(ending.max)) {
                if (store.attr(key) > ending.max[key]) {
                continue endingsloop;
                }
            }
            doUpdate(store.ending.show);
            store.finished.value = true;
            return;
        }
    }
}

const clearConvo = () => {
    store.clearSay();
    store.clearMono();
    store.clearTransition();
    store.clearChoices();
}