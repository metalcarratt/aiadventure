import { Chapter } from "@/engine/storyi";
import { OUTSIDE_IMG } from "./images";
import { Hana, Takumi } from "./characters";

export const chapter1: Chapter = [
    {
        location: OUTSIDE_IMG,
        transition: 'An old house located on the outskirts of town, surrounded by a dense forest. It\'s an old, abandoned mansion that has been left untouched for many years.'
    },
    {
        transition: 'Its walls are cracked and weathered, and its windows are boarded up, giving it a look of utter desolation. The mansion is isolated from the rest of the town and has a reputation for being haunted.'
    },
    {
        who: Takumi,
        say: 'I can\'t believe we\'re actually doing this, Hana. Going into a haunted house on a dare from our friends.'
    },
    {
        who: Hana,
        say: 'I know, Takumi, but we can\'t back down now. We\'ll never hear the end of it if we do. And besides, it\'s not like we believe in ghosts anyway, right?'
    },
    {
        who: Takumi,
        say: 'I don\'t know. I\'ve heard some pretty creepy stories about this place.'
    },
    {
        who: Hana,
        say: 'Yeah, you\'re right.'
    },
    {
        who: Takumi,
        say: 'Then we\'ll just have to stick together and make it through. As long as we\'re together, we can handle anything.'
    },
    {
        who: Hana,
        say: 'You\'re right. Let\'s do this.'
    }
]
