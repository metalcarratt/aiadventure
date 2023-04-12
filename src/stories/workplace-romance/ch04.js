import { BOSS_IMG, PARK_IMG, SAKURA_IMG } from "./images";

export const chapter4 = [
    {
        location: PARK_IMG,
        transition: 'Everyone arrives at the park'
    },
    {
        pic: BOSS_IMG,
        say: 'Okay, listen everyone, the first event will be a relay race. Get in your teams and prepare to race!'
    },
    {
        pic: SAKURA_IMG,
        choices: [
            {
                say: 'Listen everyone. I\'m clearly the fastest so I will go last. Sakura, do you want to run first?',
                next: {
                    attr: {
                        competency: 1
                    },
                    show: {
                        say: 'Oh, sure.'
                    }
                }
            },
            {
                say: 'Everyone, let\'s work together. Sakura, are you a fast runner?',
                next: {
                    attr: {
                        trust: 1
                    },
                    show: {
                        say: 'I\'m not very fast. I hope I don\'t drag everyone down.'
                    }
                }
            },
            {
                say: 'Sakura, did I tell you before that I work out at the gym?',
                next: {
                    attr: {
                        arrogant: 1
                    },
                    show: {
                        say: 'That\'s amazing. Our team will win for sure.'
                    }
                }
            }
        ]
    },
    {
        transition: 'You all run the race'
    },
    {
        pic: BOSS_IMG,
        say: 'Wow, Taro\'s team won! Excellent work, guys!'
    },
    {
        say: 'Next is a trust exercise.'
    },
    {
        pic: SAKURA_IMG,
        choices: [
            {
                say: 'This exercise is tricky. Let\'s go slow and take our time. We don\'t want anyone to get hurt.',
                next: {
                    attr: {
                        friendly: 1
                    },
                    show: {
                        say: 'I\'ve done this before. Maybe I can teach you all what to do?'
                    }
                }
            },
            {
                say: 'Hmm, does anyone know how to do this?',
                next: {
                    attr: {
                        trust: 1
                    },
                    show: {
                        say: 'I\'ve done it before. Shall I teach you all what to do?'
                    }
                }
            }
        ]
    },
    {
        pic: BOSS_IMG,
        say: 'Wow, you guys are doing great. Just one more activity. Next is a scavenger hunt.'
    },
    {
        pic: SAKURA_IMG,
        choices: [
            {
                say: 'Who drew this map? It looks like something a five year old would make. Haha!',
                next: {
                    attr: {
                        friendly: -1
                    },
                    show: {
                        say: 'Oh, sorry, the boss asked me to make it at the last minute.'
                    }
                }
            },
            {
                say: 'What\'s this first picture. Sakura, any ideas?',
                next: {
                    attr: {
                        trust: 1
                    },
                    show: {
                        say: 'It looks like a wombat? Oh, look over there in that tree!'
                    }
                }
            }
        ]
    },
    {
        transition: 'After a few hours of fun the team building activities finish'
    },
    {
        pic: BOSS_IMG,
        say: 'Great work guys Let\'s head back to the office.'
    }
]