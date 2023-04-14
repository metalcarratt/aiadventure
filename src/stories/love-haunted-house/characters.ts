import { Character } from "@/engine/storyi";
import { GHOST_IMG, HANA_IMG, TAKUMI_IMG } from "./images";

export const Hana: Character = {
    name: 'Hana',
    pic: HANA_IMG,
    colour: '#e8e6e6',
    bgColour: '#797979'
}

export const Takumi: Character = {
    name: 'Takumi',
    pic: TAKUMI_IMG,
    colour: '#d7d6d6',
    bgColour: '#323232'
}

export const FacelessGhost: Character = {
    name: '???',
    pic: 'none',
    colour: 'white',
    bgColour: 'black'
}

export const GhostGirl: Character = {
    name: '???',
    pic: GHOST_IMG,
    colour: 'white',
    bgColour: 'black'
}