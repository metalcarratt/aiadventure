import { Chapter } from "@/engine/storyi";
import { EMIKO_IMG, HIROKO_IMG, ISLAND_IMG, PLAYER_IMG, SHELTER_IMG } from "./images";
import { Attribute } from "./attrs";

export const chapter3: Chapter = [
    {
        location: ISLAND_IMG,
        transition: 'The next day...'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'Do you think we\'re the only ones on this island?',
                next: {
                    attr: {
                        [Attribute.RESCUABILITY]: -1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'What, you think there\'s some secret resort on this island that we haven\'t found yet?'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'We don\'t know what\'s on this island. It\'s better to be cautious.'
                        }
                    ]
                }
            },
            {
                say: 'We need to keep looking. We\'ll find a way off this island eventually.',
                next: {
                    attr: {
                        [Attribute.RESCUABILITY]: 1
                    },
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'I believe that too. We just need to keep trying.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Sure, because that\'s worked out so well for us so far.'
                        }
                    ]
                }
            }
        ]
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'We need to build a shelter. It\'ll be safer than sleeping on the beach.',
                next: {
                    attr: {
                        [Attribute.EMIKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'I guess that\'s not the worst idea. At least we\'ll be out of the elements.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'That\'s a good idea. Let\'s get started.'
                        }
                    ]
                }
            },
            {
                say: 'What if we never get off this island? What do we do then?',
                next: {
                    attr: {
                        [Attribute.RESCUABILITY]: 1
                    },
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'We\'ll figure something out, Player. We can\'t give up hope.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Great. Another thing to worry about.'
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: 'The three of your work together to build a shelter.'
    },
    {
        location: SHELTER_IMG,
        pic: HIROKO_IMG,
        say: 'This shelter isn\'t exactly the Ritz-Carlton.'
    },
    {
        pic: EMIKO_IMG,
        say: 'It\'s better than nothing, Hiroko.'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'I\'m glad we have a place to sleep tonight.',
                next: {
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'Me too. Thank you for building it.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Yeah, yeah. Let\'s just get some sleep.'
                        }
                    ]
                }
            },
            {
                say: 'Sorry, it\'s not the best shelter, I hope it will hold up in bad weather.',
                next: {
                    attr: {
                        [Attribute.HIROKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'Great. So we\'ll just get soaked and freeze to death instead of just freezing to death.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'We\'ll reinforce it tomorrow. Don\'t worry.'
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: 'You all try to get a good night\'s sleep'
    }
]


