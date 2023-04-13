import { story } from './story';
import { chs, clickOutsideChoice } from './choices';

export const click = () => {
    if (clickOutsideChoice()) {
        return;
    }
    story.updateIndex();
}