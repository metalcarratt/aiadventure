import { BAR_IMG, BOSS_IMG, OFFICE_IMG, SAKURA_IMG } from "./images";

export const chapter5 = [
    {
        location: OFFICE_IMG,
        transition: 'Back at the office'
    },
    {
        pic: BOSS_IMG,
        say: 'Another successful day, everyone. Let\'s head out to celebrate!'
    },
    {
        location: BAR_IMG,
        transition: 'Everyone walks to a nearby bar for drinks'
    },
    {
        transition: 'You take the opportunity to strike up a conversation with Sakura'
    },
    {
        pic: SAKURA_IMG,
        choices: [
            {
                say: 'Aren\'t you glad we finished the product launch ideas on time?',
                next: {
                    attr: {
                        arrogant: 1
                    },
                    show: {
                        say: 'Yes! Your idea was definately the best!'
                    }
                }

            },
            {
                say: 'You said before you like yoga. What made you get into that?',
                next: {
                    attr: {
                        friendly: 1
                    },
                    show: {
                        say: 'It helps me keep fit. I live in a small apartment so I need some exercise that I can do in a small place.'
                    }
                }
            }
        ]
    },
    {
        pic: SAKURA_IMG,
        say: 'So many interesting things happened today.'
    },
    {
        choices: [
            {
                say: 'Did you see the typo in the announcements email? I thought Yuki was winking at me but he was just trying to close the brackets.',
                next: {
                    attr: {
                        friendly: 1
                    },
                    show: {
                        say: 'I thought the same thing. It was so funny.'
                    }
                }
            },
            {
                say: 'Did you see Yuki during the relay race? He looked like a crab, the way he was running.',
                next: {
                    attr: {
                        arrogant: 1
                    },
                    show: {
                        say: 'Oh? I wasn\'t really paying attention.'
                    }
                }
            }
        ]
    },
    {
        say: 'Look at the time. I\'d better go.'
    },
    {
        choices: [
            {
                say: 'Wait...',
                next: () => {}
            }
        ]
    },
    {
        choices: [
            {
                say: 'How would you like to go to a movie in the weekend?',
                next: {
                    show: {
                        say: 'Oh.. I don\'t know...'
                    }
                }
            }
        ]
    },
    {
        choices: [
            {
                say: 'Don\'t worry, it\'ll be strictly as friends, I promise!',
                next: {
                    show: {
                        say: 'Hmm, I guess so. What movie do you want to see?'
                    }
                }
            }
        ]
    },
    {
        choices: [
            {
                say: 'How about The Hobbit?',
                next: {
                    attr: {
                        trust: 1
                    },
                    show: {
                        say: 'Oh, I wanted to watch that. Okay!'
                    }
                }
            },
            {
                say: 'How about Avengers?',
                next: {
                    attr: {
                        friendly: 1
                    },
                    show: {
                        say: 'I haven\'t seen that before. I suppose I can try.'
                    }
                }
            },
            {
                say: 'How about Pride and Prejudice?',
                next: {
                    attr: {
                        competency: -1
                    },
                    show: {
                        say: 'A romance movie? Um, okay, we can try that.'
                    }
                }
            }
        ]
    },
    {
        transition: 'The day ends with a successful promise to watch a movie together. Well done.'
    }
]