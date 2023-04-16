import { Chapter } from "@/engine/storyi";
import { HALLWAY_IMG } from "./images";
import { FacelessGhost, Hana, Takumi } from "./characters";

export const chapter3: Chapter = [
    {
        location: HALLWAY_IMG,
        transition: "The hallway outside is dimly lit, with flickering lights casting eerie shadows on the walls."
    },
    {
        transition: "In the distance, you can hear faint whispers and footsteps, but you can't tell where it's coming from."
    },
    {
        who: Takumi,
        say: "Hana, did you hear that?"
    },
    {
        who: Hana,
        say: "Hear what?"
    },
    {
        who: Takumi,
        say: "That banging noise. It's coming from where we just were."
    },
    {
        who: Hana,
        say: "Let's go check it out."
    },
    {
        who: Takumi,
        say: "Are you sure? I have a bad feeling about this."
    },
    {
        who: Takumi,
        choices: [
            {
                say: "Investigate the banging noise",
                next: {
                    sequence: [
                        {
                            who: Hana,
                            say: "We have to see what's going on."
                        },
                        {
                            who: Takumi,
                            say: "Fine, but I'm sticking close to you."
                        },
                        {
                            transition: "As you approach the door, you see that it's been slammed shut, trapping you in the hallway."
                        },
                        {
                            who: Hana,
                            say: "What the...? How did that happen?"
                        },
                        {
                            who: Takumi,
                            say: "I don't know, but we need to get out of here."
                        }
                    ]
                }
            },
            {
                say: "Leave the mansion immediately",
                next: {
                    sequence: [
                        {
                            who: Takumi,
                            say: "I've had enough. Let's get out of here."
                        },
                        {
                            who: Hana,
                            say: "Agreed. I don't want to stick around any longer."
                        },
                        {
                            transition: "As you turn to leave, you hear a loud banging noise coming from behind you. You turn around to see that the door you just came through has been slammed shut, trapping you in the hallway."
                        },
                        {
                            who: Takumi,
                            say: "What the hell? The door won't budge!"
                        },
                        {
                            who: Hana,
                            say: "We're trapped! What are we going to do?"
                        }
                    ]
                }
            }
        ]
    },
    {
        transition: "The lights flicker"
    },
    {
        who: FacelessGhost,
        say: "Don't leave so soon, I'm just getting started."
    },
    {
        who: Hana,
        say: "What was that? Who's there?"
    },
    {
        who: Takumi,
        say: "We need to find another way out of here, now!"
    },
    {
        transition: "As you look for a way out, you notice that the walls seem to be closing in on you, and you feel a sense of dread creeping up your spines."
    }
]