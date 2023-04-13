import { Story } from '@/engine/storyi';
import { Attribute } from './attrs';
import { chapter1 } from './ch01';
import { chapter2 } from './ch02';
import { chapter3 } from './ch03';
import { chapter4 } from './ch04';
import { chapter5 } from './ch05';
import { chapter6 } from './ch06';

export const myStory: Story = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6
]

export const initAttributes: string[] = [
    Attribute.ARROGANT,
    Attribute.COMPETENCY,
    Attribute.FRIENDLY,
    Attribute.TRUST
]