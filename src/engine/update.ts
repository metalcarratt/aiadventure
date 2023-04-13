import { attr } from './attributes';
import { chs } from './choices';
import { store } from './store';
import { end } from './ending';
import { story } from './story';
import { Ending, Scene } from './storyi';

export const update = () => {
    if (!end.finished()) {
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
        chs.updateChoices(show.choices);
        chs.setChoosing();
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
            if (ending.min) {
                for (const key of Object.keys(ending.min)) {
                    if (attr.get(key) < ending.min[key]) {
                        continue endingsloop;
                    }
                }
            }
            if (ending.max) {
                for (const key of Object.keys(ending.max)) {
                    if (attr.get(key) > ending.max[key]) {
                        continue endingsloop;
                    }
                }
            }

            // If we get here the current ending passed all requirements

            if (ending.show) {
                doUpdate(ending.show);
                end.setFinished();

            } else if (ending.sequence) {
                end.setEnding(ending);
                doUpdate(ending.sequence[0]);
            }
            return;
        }
    }
}

const clearConvo = () => {
    store.clearSay();
    store.clearMono();
    store.clearTransition();
    chs.clearChoices();
}