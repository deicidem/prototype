import { loadRemote } from '@module-federation/enhanced/runtime';

export const B_ROUTE_KEY = 'b-team' as const;
export const B_KEY = 'b' as const;

export async function loadBRoutes() {
    console.log('load b routes');
    const importRes = await loadRemote<typeof import('b/routes')>('b/routes');
    return importRes?.default;
}
