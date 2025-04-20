import type { Router } from 'vue-router';
import { bRouteKey, loadBRoutes } from './b';

export async function addMFRoutes(router: Router) {
    const bRoutes = await loadBRoutes();
    console.log('bRoutes', bRoutes);

    if (bRoutes) {
        router.addRoute(bRouteKey, bRoutes[0]);
    }

    router.replace(router.currentRoute.value.fullPath);
}
