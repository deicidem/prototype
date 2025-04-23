import type { Router } from 'vue-router';
import { bRouteKey, loadBRoutes } from './b';

export async function addMFRoutes(router: Router) {
    const bRoutes = await loadBRoutes();
    console.log('bRoutes', bRoutes);

    router.addRoute(bRouteKey, bRoutes[0]);

    console.log('replace');

    // router.replace(router.currentRoute.value.fullPath);
}
