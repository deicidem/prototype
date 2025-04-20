import { loadRemote } from '@module-federation/enhanced/runtime';
import { RouterView } from 'vue-router';

export const bRouteKey = 'b';

export const bRouteWrapper = {
    path: '/b',
    name: bRouteKey,
    component: RouterView,
};

export async function loadBRoutes() {
    console.log('load b routes');

    try {
        const importRes = await loadRemote('b/routes') as any;
        return importRes.default;
    }
    catch (error) {
        console.error(error);
    }
}
