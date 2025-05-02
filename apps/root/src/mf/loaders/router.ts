import type { Router, RouteRecordRaw } from 'vue-router';
import Loading from '@/pages/loading.vue';
import { RouterView } from 'vue-router';
import { B_ROUTE_KEY, loadBRoutes } from './b';
import { C_ROUTE_KEY, loadCRoutes } from './c';

const routeLoaders = [
    { key: B_ROUTE_KEY, loader: loadBRoutes },
    { key: C_ROUTE_KEY, loader: loadCRoutes },
];

export const routeWrappers = routeLoaders.map((rl) => {
    return {
        path: `/${rl.key}`,
        name: rl.key,
        component: RouterView,
        children: [{ path: ':path(.*)', component: Loading }],
    };
});

function addRoutes(router: Router, teamKey: string, routes: RouteRecordRaw[] | undefined) {
    if (!routes || !routes[0]) {
        return;
    }

    router.addRoute(teamKey, routes[0]);

    const isOnTeamPage = router.currentRoute.value.fullPath.includes(teamKey);
    if (isOnTeamPage) {
        router.replace(router.currentRoute.value.fullPath);
    }
}

export async function addMFRoutes(router: Router) {
    const promises: Promise<any>[] = [];

    routeLoaders.forEach((rl) => {
        promises.push(rl.loader().then(routes => addRoutes(router, rl.key, routes)).catch((error) => {
            console.error(`${rl.key} loaded with error: `, { error });
        }));
    });

    return await Promise.all(promises);
}
