export interface Choice {
    say: string,
    next: {
        attr?: Record<string, number>,
        show?: CutScene,
        sequence?: CutScene[]
    }
}

export interface Ending {
    max: Record<string, number>,
    min: Record<string, number>,
    show: CutScene,
}

export interface Scene extends CutScene {
    mono?: string,
    choices?: Choice[],
    transition?: string,
    endings?: Ending[]
}

export interface CutScene {
    location?: string,
    pic?: string,
    say?: string,
}

export type Chapter = Scene[];
export type Story = Chapter[];