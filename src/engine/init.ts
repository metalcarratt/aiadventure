import { story } from './story';
import { update } from './update';
import { attr } from './attributes';
import { Story } from './storyi';

export const init = (_story: Story, _attributes: string[]) => {
    story.init(_story);
    attr.init(_attributes);
    update();
}