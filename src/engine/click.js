import { store } from './store.js';
import { story } from './story.js';
import { doUpdate } from './update.js';

export const click = () => {
    if (store.isChoosing()) {
        return;
    }
    story.updateIndex();
}
  
export const clickChoice = (choice) => {
    store.clearChoosing();
    
    if (choice.next.attr) {
        for (const key of Object.keys(choice.next.attr)) {
            store.incrementAttribute(key, choice.next.attr[key]);
        }
    }
    console.log(JSON.stringify(store.attr()));
    
    if (choice.next.show) {
        doUpdate(choice.next.show);
      
    } else {
        story.updateIndex();
    }
  }