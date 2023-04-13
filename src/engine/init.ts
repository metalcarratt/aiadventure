import { story } from './story';
import { update } from './update';
import { myStory, initAttributes } from '../stories/workplace-romance/index';
import { attr } from './attributes';

export const init = () => {
    story.init(myStory);
    attr.init(initAttributes);
    update();
}