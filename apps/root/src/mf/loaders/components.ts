import type { MFKeys } from './types';
import { useMFStore } from '@/stores/mfState';
import { B_KEY, loadBComponents } from './b';
import { C_KEY, loadСComponents } from './c';

interface MFLoader {
    mfKey: MFKeys;
    loader: () => Promise<Partial<MFComponents>>;
}

const componentLoaders: MFLoader[] = [
    { mfKey: B_KEY, loader: loadBComponents },
    { mfKey: C_KEY, loader: loadСComponents },
];

export type MFComponent = keyof typeof import('b/components') | keyof typeof import('с/components');
export type MFComponents = typeof import('b/components') & typeof import('с/components');

export async function loadMFComponents() {
    const promises: Promise<any>[] = [];
    const mfStore = useMFStore();

    componentLoaders.forEach((rl) => {
        promises.push(rl.loader()
            .then(() => {
                mfStore.setMFLoadedState(rl.mfKey, true);
            })
            .catch(() => {
                mfStore.setMFLoadedState(rl.mfKey, false);
            }));
    });

    return await Promise.all(promises);
}

export async function loadMFComponent<T extends MFComponent>(mfKey: MFKeys, component: T): Promise<MFComponents[T]> {
    const loader = componentLoaders.find(cl => cl.mfKey === mfKey).loader;
    const components = await loader() as Record<MFComponent, any>;
    return components[component];
}
