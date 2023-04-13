import { Scene } from "@/engine/storyi";
import { Attribute } from "./attrs";
import { BOSS_IMG, LUNCH_IMG, SAKURA_IMG } from "./images";

export const chapter3: Scene[] = [
    {
        location: LUNCH_IMG,
        transition: 'Your whole team go out for lunch'
    },
    {
        pic: BOSS_IMG,
        say: 'This place is nice. It serves sandwhiches and salads. I hope you all like it.'
    },
    {
        say: 'So Sakura, how are you settling in to your new role?'
    },
    {
        pic: SAKURA_IMG,
        say: 'It\'s very nice, thank you. Everyone is very kind to me.'
    },
    {
        pic: BOSS_IMG,
        say: 'That\'s good to hear. I hope we can all produce amazing work in the future.'
    },
    {
        transition: 'Everyone orders their lunch.'
    },
    {
        pic: SAKURA_IMG,
        choices: [
            {
                say: 'So, what kind of hobbies do you have outside work?',
                next: {}
            }
            
        ]
    },
    {
        say: 'I like reading books and practising yoga. How about you?'
    },
    {
        choices: [
            {
                say: 'Oh? Well, it\'s good you don\'t need glasses! Haha!',
                next: {
                    attr: {
                        [Attribute.FRIENDLY]: -1
                    },
                    show: {
                        say: 'Um..'
                    }
                }
            },
            {
                say: 'I like working out at the gym. Trying to get the perfect bod, yeah!',
                next: {
                    attr: {
                        [Attribute.ARROGANT]: 1
                    },
                    show: {
                        say: 'Wow, you must be very strong!'
                    }
                }
            },
            {
                say: 'I like reading books too. What\'s your favourite thing to read?',
                next: {
                    attr: {
                        [Attribute.FRIENDLY]: 1
                    },
                    show: {
                        say: 'Oh, I especially like Lord of the Rings'
                    }
                }
            }
        ]
    },
    {
        choices: [
            {
                say: 'So, how do you feel after one morning working? Everything okay?',
                next: {
                    attr: {
                        [Attribute.TRUST]: 1
                    },
                    show: {
                        say: 'It\'s a lot of work but there are many things to learn.'
                    }
                }
            },
            {
                say: 'Have you seen Harry Potter?',
                next: {
                    attr: {
                        [Attribute.FRIENDLY]: 1
                    },
                    show: {
                        say: 'Yes, I love that show.'
                    }
                }
            },
            {
                say: 'Did you see the boss\' patch pocket? Doesn\'t it look weird?',
                next: {
                    attr: {
                        [Attribute.TRUST]: -1
                    },
                    show: {
                        say: 'Oh, I didn\'t notice. I\'ll take a closer look next time.'
                    }
                }
            }
        ]
    },
    {
        transition: 'The meal ends with everyone full and happy'
    },
    {
        pic: BOSS_IMG,
        say: 'Alright everyone, now we have a team building event planned. Let\'s move on over to the park.'
    }
]
