import { loadRemote } from '@module-federation/enhanced/runtime';

export const C_ROUTE_KEY = 'c-team' as const;
export const C_KEY = 'c' as const;

export async function loadCRoutes() {
    console.log('load c routes');

    const importRes = await loadRemote('c/routes') as any;
    return importRes.default;
}

export async function loadСComponents() {
    console.log('load b components');
    const importRes = await loadRemote<typeof import('с/components')>('с/components');
    return importRes;
}
