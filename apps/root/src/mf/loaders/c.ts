import { loadRemote } from '@module-federation/enhanced/runtime';
import { RouterView } from 'vue-router';

export const C_ROUTE_KEY = 'c';

export const cRouteWrapper = {
    path: '/c-team',
    name: C_ROUTE_KEY,
    component: RouterView,
};

export async function loadCRoutes() {
    console.log('load c routes');

    try {
        const importRes = await loadRemote('c/routes') as any;
        return importRes.default;
    }
    catch (error) {
        console.error(error);
    }
}
