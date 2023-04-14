export interface Choice {
    say: string,
    next: {
        attr?: Record<string, number>,
        show?: CutScene,
        sequence?: CutScene[]
    }
}

export interface Ending {
    max?: Record<string, number>,
    min?: Record<string, number>,
    show?: CutScene,
    sequence?: CutScene[]
}

export interface Scene extends CutScene {
    mono?: string,
    choices?: Choice[],
    endings?: Ending[]
}

export interface CutScene {
    location?: string,
    pic?: string,
    who?: Character,
    say?: string,
    transition?: string
}

export type Character = {
    name: string,
    pic: string,
    colour: string,
    bgColour: string
}

export type Chapter = Scene[];
export type Story = Chapter[];