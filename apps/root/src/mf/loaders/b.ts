import { loadRemote } from '@module-federation/enhanced/runtime';

export const B_ROUTE_KEY = 'b-team';

export async function loadBRoutes() {
    console.log('load b routes');
    const importRes = await loadRemote<typeof import('b/routes')>('b/routes');
    console.log('load b remote end');
    return importRes?.default;
}
