import { attr } from './attributes';
import { store } from './store';
import { story } from './story';
import { Choice } from './storyi';
import { doUpdate } from './update';

export const click = () => {
    if (store.isChoosing()) {
        return;
    }
    story.updateIndex();
}
  
export const clickChoice = (choice: Choice) => {
    store.clearChoosing();
    
    if (choice.next.attr) {
        for (const key of Object.keys(choice.next.attr)) {
            attr.increment(key, choice.next.attr[key]);
        }
    }
    console.log(`${JSON.stringify(attr.list())}`);
    
    if (choice.next.show) {
        doUpdate(choice.next.show);
      
    } else {
        story.updateIndex();
    }
  }