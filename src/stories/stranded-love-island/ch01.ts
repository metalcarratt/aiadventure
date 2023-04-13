import { Chapter } from "@/engine/storyi";
import { BEACH_IMG, EMIKO_IMG, HIROKO_IMG, PLAYER_IMG } from "./images";
import { Attribute } from "./attrs";

export const chapter1: Chapter = [
    {
        location: BEACH_IMG,
        transition: 'You wake up on the sandy beach of a deserted island. Your head is pounding, and your clothes are wet and torn.'
    },
    {
        pic: PLAYER_IMG,
        say: '...'
    },
    {
        pic: HIROKO_IMG,
        say: 'Well, look who finally woke up.'
    },
    {
        pic: EMIKO_IMG,
        say: 'Are you okay? You were unconscious for a while.'
    },
    {
        pic: PLAYER_IMG,
        choices: [
            {
                say: 'Who are you two and what happened?',
                next: {
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'I\'m Hiroko. We\'re all stranded here. Our ship got wrecked in a storm, and we ended up on this stupid island.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'We\'re lucky to be alive, though. It could\'ve been worse. By the way, I\'m Emiko.'
                        }
                    ]
                }
            },
            {
                say: 'Thank you for helping me. What happened?',
                next: {
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'You\'re welcome. I\'m Emiko. We\'re all stranded here. Our ship got wrecked in a storm, and we ended up on this island.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Lucky us. I\'m Hiroko'
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
                say: 'Well, this is just great.',
                next: {
                    attr: {
                        [Attribute.HIROKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'Yeah, it\'s a dream come true. Stranded on an island with no food, no water, and no way out. I\'m thrilled.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'Hiroko, don\'t be like that. We need to stay positive.'
                        }
                    ]
                }
            },
            {
                say: 'We can make the best of this. We can survive and maybe even find a way off this island.',
                next: {
                    attr: {
                        [Attribute.RESCUABILITY]: 1
                    },
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'That\'s a great attitude. We can work together to survive and maybe even find a way off this island.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Yeah, because that\'s worked out so well for us so far.'
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
                say: 'Well, aren\'t you just a ray of sunshine.',
                next: {
                    attr: {
                        [Attribute.EMIKO_AFFINITY]: -1,
                        [Attribute.HIROKO_AFFINITY]: -1
                    },
                    sequence: [
                        {
                            pic: HIROKO_IMG,
                            say: 'You\'re one to talk. Look at you, all bright-eyed and bushy-tailed. You\'ll learn soon enough that life isn\'t all rainbows and unicorns.'
                        },
                        {
                            pic: EMIKO_IMG,
                            say: 'Hiroko, please. Let\'s try to get along.'
                        }
                    ]
                }
            },
            {
                say: 'It\'s okay, we can do this. Let\'s work together.',
                next: {
                    attr: {
                        [Attribute.HIROKO_AFFINITY]: 1
                    },
                    sequence: [
                        {
                            pic: EMIKO_IMG,
                            say: 'Thank you. We need to stick together if we\'re going to survive.'
                        },
                        {
                            pic: HIROKO_IMG,
                            say: 'Fine. But don\'t expect me to hold your hand through this.'
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: 'Emiko, Hiroko and you start to walk through the island'
    }
]

