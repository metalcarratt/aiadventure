import { Chapter } from "@/engine/storyi";
import { CAMPFIRE_IMG, EMIKO_IMG, HIROKO_IMG, ISLAND_IMG, PLAYER_IMG } from "./images";
import { Attribute } from "./attrs";

export const chapter2: Chapter = [
    {
        location: ISLAND_IMG,
        pic: EMIKO_IMG,
        say: 'I think we should start looking for food and water. We need to find a source of both if we\'re going to survive here.'
    },
    {
        pic: HIROKO_IMG,
        say: 'Yeah, because that\'s going to be so easy. This island is a barren wasteland.'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'I understand how you feel, Hiroko.',
                next: {
                    attr: {
                        [Attribute.HIROKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'We have to try. There might be something we can use.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Fine. Let\'s waste our time wandering around this stupid island.'
                        }
                    ]
                }
            },
            {
                say: 'That\'s a good plan, Emiko. Let\'s split up and search.',
                next: {
                    attr: {
                        [Attribute.EMIKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'Whatever. Just don\'t get lost.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'Great. Let\'s meet back here in an hour.'
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: 'You begin to explore the island to find food and water sources. After finding some supplies you go to meet up with the others'
    },
    {
        location: CAMPFIRE_IMG,
        pic: HIROKO_IMG,
        say: 'This is all we could find? A few coconuts and some questionable-looking berries?'
    },
    {
        pic: EMIKO_IMG,
        say: 'It\'s better than nothing, Hiroko. We\'ll find more tomorrow.'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'You\'re right. We need to conserve our energy and resources.',
                next: {
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'Thank you for understanding. We need to be careful.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Whatever. I\'m going to try to get some sleep.'
                        }
                    ]
                }
            },
            {
                say: 'Do you need help opening that coconut, Hiroko?',
                next: {
                    attr: {
                        [Attribute.HIROKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'No kidding. Maybe we should just starve to death now and get it over with.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'We\'ll find more tomorrow. Don\'t worry.'
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: 'You all try to get some rest.'
    }
]
