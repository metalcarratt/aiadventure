import { BOSS_IMG, SAKURA_IMG, OFFICE_IMG } from "./images";

export const chapter2 = [
    {
        location: OFFICE_IMG,
        pic: SAKURA_IMG,
        say: 'Thank you for all your help getting settled in. When should we start on the marketing campaign project?'
    },
    {
        choices: [
            {
                say: 'Let\'s start now. Maybe we can finish before lunch.',
                next: {}
            }
        ]
    },
    {
        say: 'That sounds good. The boss said we need to come up with creative ideas.'
    },
    {
        choices: [
            {
                say: 'Yes, I\'ve already given it some thought. Look at this...',
                next: {
                    attr: {
                        arrogant: 1
                    },
                    show: {
                        say: 'Oh, that\'s a really good idea.'
                    }
                }
            },
            {
                say: 'That\'s right. Do you have any ideas?',
                next: {
                    attr: {
                        trust: 1
                    },
                    show: {
                        say: 'I don\'t know if it\'s good idea, but I was thinking of this...'
                    }
                }
            }
        ]
    },
    {
        transition: 'You both discuss the idea together.'
    },
    {
        pic: SAKURA_IMG,
        say: 'Oh no, look at the time. We only have half an hour left.'
    },
    {
        choices: [
            {
                say: 'You\'re right. Sakura, can you help me to put the details in a powerpoint?',
                next: {
                    attr: {
                        trust: 1
                    },
                    show: {
                        say: 'Sure, you can rely on me!'
                    }
                }
            },
            {
                say: 'Don\'t worry, our boss likes us to take our time, as long as we do a good job. Let me handle it.',
                next: {
                    attr: {
                        competency: 1
                    },
                    show: {
                        say: 'Okay, sure.'
                    }
                }
            },
            {
                say: 'Relax, the boss is never dead serious about dead lines. Get it? Haha.',
                next: {
                    attr: {
                        competency: -1
                    },
                    show: {
                        say: "Oh. Haha."
                    }
                }
            }
        ]
    },
    {
        transition: 'Half an hour later...'
    },
    {
        pic: BOSS_IMG,
        say: 'So, how are the ideas coming along?'
    },
    {
        pic: SAKURA_IMG,
        say: 'Oh, is it time already?'
    },
    {
        pic: BOSS_IMG,
        say: 'Something wrong?'
    },
    {
        choices: [
            {
                say: 'Sorry, boss, it was Yuki\'s fault. He kept coming over to distract us.',
                next: {
                    attr: {
                        arrogant: 0
                    },
                    show: {
                        pic: SAKURA_IMG,
                        say: '...'
                    }
                }
            },
            {
                say: 'Sorry, boss, it\'s my fault. I\'ll make it up after lunch.',
                next: {
                    attr: {
                        competency: -1
                    }
                }
            },
            {
                say: 'Sorry, boss, but I had to train the newbie so I didn\'t have enough time.',
                next: {
                    attr: {
                        trust: -1
                    }
                }
            }
        ]
    },
    {
        pic: BOSS_IMG,
        say: 'Oh. Well, that\'s unfortunate. Let\'s try and finish by the end of the day, okay?'
    }
]