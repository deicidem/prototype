import { loadRemote } from '@module-federation/enhanced/runtime';
import { RouterView } from 'vue-router';

export const catalogRouteKey = 'catalog';

export const catalogRouteWrapper = {
    path: '/catalog',
    name: catalogRouteKey,
    component: RouterView,
};

export async function loadCatalogRoutes() {
    console.log('load catalog routes');

    try {
        const importRes = await loadRemote('catalog/routes') as any;
        return importRes.default;
    }
    catch (error) {
        console.error(error);
    }
}
