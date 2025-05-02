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
        name: `${rl.key}`,
        component: RouterView,
        children: [
            { path: '', component: Loading, name: `${rl.key}-loading` },
            { path: ':path(.*)', component: Loading },
        ],
    };
});

function addRoutes(router: Router, teamKey: string, routes: RouteRecordRaw[] | undefined) {
    if (!routes || !routes[0]) {
        return;
    }

    router.removeRoute(`${teamKey}-loading`);
    router.addRoute(teamKey, routes[0]);

    let currentPath = router.currentRoute.value.fullPath;
    if (currentPath.endsWith('/')) {
        currentPath = currentPath.substring(0, currentPath.length - 1);
    }

    const isOnTeamPage = currentPath.includes(teamKey);

    if (isOnTeamPage) {
        router.replace(currentPath);
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
