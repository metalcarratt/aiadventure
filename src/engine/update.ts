import { attr } from './attributes';
import { store } from './store';
import { story } from './story';
import { Ending, Scene } from './storyi';

export const update = () => {
    if (!store.finished()) {
        const index = story.index();
        if (story.scene(index)) {
            doUpdate(story.scene(index));
        }
    }
}
  
export const doUpdate = (show: Scene) => {
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
  
    showEnding(show.endings);
  }

const showEnding = (endings: Ending[] | undefined) => {
    if (endings) {
        endingsloop:
        for (const ending of endings) {
            for (const key of Object.keys(ending.min)) {
                if (attr.get(key) < ending.min[key]) {
                continue endingsloop;
                }
            }
            for (const key of Object.keys(ending.max)) {
                if (attr.get(key) > ending.max[key]) {
                continue endingsloop;
                }
            }
            doUpdate(ending.show);
            store.setFinished();
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