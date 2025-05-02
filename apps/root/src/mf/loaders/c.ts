import { loadRemote } from '@module-federation/enhanced/runtime';

export const C_ROUTE_KEY = 'c-team';

export async function loadCRoutes() {
    console.log('load c routes');

    const importRes = await loadRemote('c/routes') as any;
    return importRes.default;
}
