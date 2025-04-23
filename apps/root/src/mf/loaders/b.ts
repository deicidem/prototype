import { loadRemote } from '@module-federation/enhanced/runtime';
import { RouterView } from 'vue-router/auto';

export const bRouteKey = 'b-team';

export const bRouteWrapper = {
    path: '/b-team',
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
