import { Chapter } from "@/engine/storyi";
import { EMIKO_IMG, HIGHPOINT_IMG, HIROKO_IMG, ISLAND_IMG, PLAYER_IMG, SHELTER_IMG } from "./images";

export const chapter4: Chapter = [
    {
        location: SHELTER_IMG,
        transition: 'Another day has come.'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'Let\'s start working on a plan to get off this island.',
                next: {
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'Yes, let\'s do it! We can start by exploring more of the island.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'And what, hope we stumble upon a rescue boat? Good luck with that.'
                        }
                    ]
                }
            },
            {
                say: 'What\'s the point? We\'re stuck here forever.',
                next: {
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'That\'s the spirit. Let\'s just give up and die here.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'We can\'t think like that. We have to keep trying.'
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
                say: 'We need to make a signal to attract rescuers.',
                next: {
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'Yeah, because that\'s worked so well for us so far.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'It\'s worth a shot. Let\'s start gathering supplies.'
                        }
                    ]
                }
            },
            {
                say: 'What if we\'re stuck here forever? How do we survive long-term?',
                next: {
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'We\'ll figure it out. We have each other.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Great. More wandering around this stupid island.'
                        }
                    ]
                }
            }
        ]
    },
    {
        location: ISLAND_IMG,
        transition: 'You all go to gather supplies to make a signal.'
    },
    {
        location: HIGHPOINT_IMG,
        pic: HIROKO_IMG,
        say: 'This is never going to work.'
    },
    {
        pic: EMIKO_IMG,
        say: 'We have to try, Hiroko. It\'s our best chance.'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'Keep going, guys. We can do this.',
                next: {
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'Thank you. We won\'t give up.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Yeah, yeah. Let\'s just get this over with.'
                        }
                    ]
                }
            },
            {
                say: 'I don\'t think this is going to work.',
                next: {
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'Gee, you think?'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'We have to keep trying. We can\'t lose hope.'
                        }
                    ]
                }
            }
        ]
    },
]
