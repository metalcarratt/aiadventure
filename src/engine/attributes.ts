import { Ref, ref } from "vue";

const store: Ref<Record<string, number>> = ref({});

export const attr = {
    init: (keys: string[]) => {
        for (const key of keys) {
            store.value[key] = 0;
        }
    },
    get: (key: string) => store.value[key],
    list: () => store.value,
    increment: (key: string, amount: number) => store.value[key] += amount,
}