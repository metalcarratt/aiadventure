import { Scene } from "@/engine/storyi";
import { Attribute } from "./attrs";
import { CINEMA_IMG, SAKURA_BLUSH_IMG, SAKURA_IMG } from "./images";

export const chapter6: Scene[] = [
    {
        location: CINEMA_IMG,
        transition: 'The weekend arrives and as planned you go to watch a movie with Sakura'
    },
    {
        pic: SAKURA_IMG,
        say: 'Thanks for coming with me. I had a very nice time.'
    },
    {
        say: 'Also, there was something else I wanted to tell you.'
    },
    {
        endings: [
            {
                max: {
                    [Attribute.ARROGANT]: 4,
                    [Attribute.FRIENDLY]: 4,
                    [Attribute.COMPETENCY]: 0
                },
                min: {
                    [Attribute.TRUST]: 6
                },
                show: {
                    pic: SAKURA_BLUSH_IMG,
                    say: 'You\'re very reliable and sweet. Do you want to be my boyfriend?'
                }
            },
            {
                max: {
                    [Attribute.ARROGANT]: 4
                },
                min: {
                    [Attribute.FRIENDLY]: 5
                },
                show: {
                    say: 'I\'m so thankful for how much you\'ve helped me since I started working here. I hope we can stay good friends.'
                }
            },
            {
                min: {
                    [Attribute.COMPETENCY]: 2
                },
                max: {},
                show: {
                    say: 'Thanks for being a strong team leader. I will try to work hard from now on.'
                }
            },
            {
                min: {},
                max: {},
                show: {
                    say: 'I respect you as a work colleague but let\'s not do anything outside work anymore.'
                }
            }
        ]
    }
]