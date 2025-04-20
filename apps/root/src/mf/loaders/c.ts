import { loadRemote } from '@module-federation/enhanced/runtime';
import { RouterView } from 'vue-router';

export const cRouteKey = 'c';

export const cRouteWrapper = {
    path: '/c',
    name: cRouteKey,
    component: RouterView,
};

export async function loadBRoutes() {
    console.log('load c routes');

    try {
        const importRes = await loadRemote('c/routes') as any;
        return importRes.default;
    }
    catch (error) {
        console.error(error);
    }
}
