import { story } from './story';
import { clickOutsideChoice } from './choices';
import { end, inEnding } from './ending';

export const click = () => {
    if (clickOutsideChoice()) {
        return;
    }
    if (inEnding()) {
        return;
    }
    if (!end.finished()) {
        story.updateIndex();
    }
}