import { Chapter } from "@/engine/storyi";
import { Attribute } from "./attrs";
import { BEACH_IMG, CAMPFIRE_IMG, EMIKO_IMG, HIROKO_IMG, PLAYER_IMG, SHELTER_IMG } from "./images";

export const chapter5: Chapter = [
    {
        endings: [
            {
                min: {
                    [Attribute.RESCUABILITY]: 5
                },
                sequence: [
                    {
                        location: BEACH_IMG,
                        transition: 'A few days later you all spot a boat on the horizon...'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'We did it! We\'re getting off this island!'
                    },
                    {
                        pic: EMIKO_IMG,
                        say: 'I can\'t believe it! We\'re finally going home!'
                    },
                    {
                        pic: HIROKO_IMG,
                        say: 'About time. I was starting to think we were going to die here.'
                    }
                ]
            },
            {
                min: {
                    [Attribute.EMIKO_AFFINITY]: 5
                },
                sequence: [
                    {
                        location: BEACH_IMG,
                        transition: 'Some weeks go by'
                    },
                    {
                        pic: EMIKO_IMG,
                        say: 'We can\'t give up hope. We have to keep trying.'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'I know we can make it, Emiko.'
                    },
                    {
                        pic: EMIKO_IMG,
                        say: 'Thanks. Your optimism is infectious.'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'Let\'s explore more of the island!'
                    },
                    {
                        pic: EMIKO_IMG,
                        say: 'I was hoping you\'d say that!'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'Let\'s see what we can find!'
                    },
                    {
                        pic: EMIKO_IMG,
                        say: 'I like the way you think.'
                    }
                ]
            },
            {
                min: {
                    [Attribute.HIROKO_AFFINITY]: 5
                },
                sequence: [
                    {
                        location: SHELTER_IMG,
                        transition: 'Some weeks go by'
                    },
                    {
                        pic: HIROKO_IMG,
                        say: 'Well, this is it. We\'re stuck here forever.'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'We\'ll make the best of it, Hiroko.'
                    },
                    {
                        pic: HIROKO_IMG,
                        say: 'I guess we don\'t have a choice, do we?'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'We\'ll make our own life here.'
                    },
                    {
                        pic: HIROKO_IMG,
                        say: 'I guess we could try to make the best of it.'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'We\'ll be okay, Hiroko. We have each other.'
                    },
                    {
                        pic: HIROKO_IMG,
                        say: 'Thanks. I\'m glad we\'re in this together.'
                    }
                ]
            },
            {
                sequence: [
                    {
                        location: CAMPFIRE_IMG,
                        transition: 'The next day Hiroko is caught taking the supplies'
                    },
                    {
                        pic: PLAYER_IMG,
                        say: 'Hiroko, what are you doing? We need those supplies!'
                    },
                    {
                        pic: HIROKO_IMG,
                        say: 'I need them more than you do. I\'m leaving this island, with or without you.'
                    },
                    {
                        pic: EMIKO_IMG,
                        say: 'Hiroko, how could you do this? We\'re supposed to be a team!'
                    },
                    {
                        location: BEACH_IMG,
                        transition: 'You run after Hiroko but fail to catch up to her. Eventually you get lost and are left alone on the island.'
                    }
                ]
            }
        ]
    }
]