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
        who: Hana,
        say: "Takumi, did you hear that?"
    },
    {
        who: Takumi,
        say: "Hear what?"
    },
    {
        who: Hana,
        say: "That banging noise. It's coming from where we just were."
    },
    {
        who: Takumi,
        say: "Let's go check it out."
    },
    {
        who: Hana,
        say: "Are you sure? I have a bad feeling about this."
    },
    {
        choices: [
            {
                say: "Investigate the banging noise",
                next: {
                    sequence: [
                        {
                            who: Takumi,
                            say: "We have to see what's going on."
                        },
                        {
                            who: Hana,
                            say: "Fine, but I'm sticking close to you."
                        },
                        {
                            transition: "As you approach the door, you see that it's been slammed shut, trapping you in the hallway."
                        },
                        {
                            who: Takumi,
                            say: "What the...? How did that happen?"
                        },
                        {
                            who: Hana,
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
                            who: Hana,
                            say: "I've had enough. Let's get out of here."
                        },
                        {
                            who: Takumi,
                            say: "Agreed. I don't want to stick around any longer."
                        },
                        {
                            transition: "As you turn to leave, you hear a loud banging noise coming from behind them. You turn around to see that the door you just came through has been slammed shut, trapping you in the hallway."
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
        who: Takumi,
        say: "What was that? Who's there?"
    },
    {
        who: Hana,
        say: "We need to find another way out of here, now!"
    },
    {
        transition: "As you look for a way out, you notice that the walls seem to be closing in on you, and you feel a sense of dread creeping up your spines."
    }
]