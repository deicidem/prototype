import type { MFKeys, MFState } from '@/mf/loaders/types';
import { B_KEY } from '@/mf/loaders/b';
import { C_KEY } from '@/mf/loaders/c';
import { defineStore } from 'pinia';

export const useMFStore = defineStore('mf', () => {
    const MF_LOADED_STATE: MFState = reactive({
        [B_KEY]: null,
        [C_KEY]: null,
    });

    const mfLoadedState = computed(() => MF_LOADED_STATE);

    function setMFLoadedState(key: MFKeys, value: boolean) {
        MF_LOADED_STATE[key] = value;
    }

    const isBTeamAccessible = computed(() => {
        const v = mfLoadedState.value[B_KEY];
        return v === null || v === true;
    });

    const isCTeamAccessible = computed(() => {
        const v = mfLoadedState.value[C_KEY];
        return v === null || v === true;
    });

    return { mfLoadedState, isBTeamAccessible, isCTeamAccessible, setMFLoadedState };
});
