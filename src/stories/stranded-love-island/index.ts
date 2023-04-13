import { Story } from '@/engine/storyi';
import { chapter1 } from './ch01';
import { chapter2 } from './ch02';
import { chapter3 } from './ch03';
import { chapter4 } from './ch04';
import { Attribute } from './attrs';
import { chapter5 } from './ch05';

export const loveIsland: Story = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5
]

export const loveIslandAttributes: string[] = [
    Attribute.RESCUABILITY,
    Attribute.EMIKO_AFFINITY,
    Attribute.HIROKO_AFFINITY
]