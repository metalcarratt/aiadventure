import { Chapter } from "@/engine/storyi";
import { FOYER_IMG, GHOST_IMG, ROOM1_IMG } from "./images";
import { FacelessGhost, GhostGirl, Hana, Takumi } from "./characters";

export const chapter2: Chapter = [
    {
        location: FOYER_IMG,
        transition: 'As you enter the mansion, you are immediately hit with a musty smell and a chill in the air.'
    },
    {
        transition: 'You can hear faint whispers and creaking noises in the distance, making your hearts race with excitement and nervousness.'
    },
    {
        who: Takumi,
        say: 'Which way should we go?'
    },
    {
        who: Hana,
        say: 'I don\'t know, the staircase looks inviting.'
    },
    {
        who: Takumi,
        say: 'But what if there\'s something dangerous up there?'
    },
    {
        who: FacelessGhost,
        say: 'Jiiii~~~jiii~~'
    },
    {
        who: Hana,
        say: 'Do you hear that, Takumi? It sounds like someone is upstairs. Should we check it out?'
    },
    {
        who: Takumi,
        say: 'I don\'t know, Hana. Maybe we should stick together and explore the ground floor first.'
    },
    {
        who: Takumi,
        choices: [
            {
                say: 'Check out the noise upstairs',
                next: {
                    sequence: [
                        {
                            who: Hana,
                            say: "Let's go check it out. Maybe someone needs our help."
                        },
                        {
                            who: Takumi,
                            say: "I'm not sure this is a good idea, Hana. But I'll follow you."
                        }
                    ]
                }
            },
            {
                say: 'Explore the ground floor first',
                next: {
                    sequence: [
                        {
                            who: Takumi,
                            say: "I have a bad feeling. Let's explore the ground floor first."
                        },
                        {
                            who: Hana,
                            say: 'I don\'t know, Takumi. I have a feeling we should check out what\'s upstairs first. It might be important.'
                        },
                        {
                            who: Takumi,
                            say: "I guess you're right. Let's be careful though, okay?"
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: 'You cautiously climb the staircase, which creaks under your weight. As you reach the top of the stairs, you see a door slightly ajar. You hear the screeching noise again, this time louder, and decide to investigate.'
    },
    {
        location: ROOM1_IMG,
        transition: 'As you push the door open you see a large, empty room with a rocking chair in the corner. The chair is moving back and forth on its own, and you hear the sound of a child giggling.'
    },
    {
        who: Takumi,
        choices: [
            {
                say: "Investigate the rocking chair",
                next: {
                    sequence: [
                        {
                            who: Hana,
                            say: "Let's check out the rocking chair. Maybe there's a reason why it's moving on its own."
                        },
                        {
                            who: Takumi,
                            say: "I don't know about this, Takumi. It's giving me the creeps."
                        },
                        {
                            who: GhostGirl,
                            say: "Ahhhhhhh~~~~~!"
                        },
                        {
                            transition: "You both run out of the room, scared out of your minds."
                        }
                    ]
                }
            },
            {
                say: "Leave the room and explore elsewhere",
                next: {
                    sequence: [
                        {
                            who: Takumi,
                            say: "Let's get out of here, Hana. This place is giving me the creeps."
                        },
                        {
                            who: Hana,
                            say: "Agreed. Let's explore somewhere else."
                        },
                        {
                            transition: "You quickly leave the room and decide to explore another part of the mansion."
                        }
                    ]
                }
            }
        ]
    }
]
