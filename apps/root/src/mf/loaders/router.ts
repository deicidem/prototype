import type { Router, RouteRecordRaw } from 'vue-router';
import type { MFKeys, MFRouteKeys } from './types';
import Error from '@/pages/error.vue';
import Loading from '@/pages/loading.vue';
import { useMFStore } from '@/stores/mfState';
import { RouterView } from 'vue-router';
import { B_KEY, B_ROUTE_KEY, loadBRoutes } from './b';
import { C_KEY, C_ROUTE_KEY, loadCRoutes } from './c';

interface MFLoader {
    mfKey: MFKeys;
    routeKey: MFRouteKeys;
    loader: () => Promise<RouteRecordRaw[]>;
}

const routeLoaders: MFLoader[] = [
    { mfKey: B_KEY, routeKey: B_ROUTE_KEY, loader: loadBRoutes },
    { mfKey: C_KEY, routeKey: C_ROUTE_KEY, loader: loadCRoutes },
];

export const routeWrappers = routeLoaders.map((rl) => {
    return {
        path: `/${rl.routeKey}`,
        name: `${rl.routeKey}`,
        component: RouterView,
        children: [
            { path: '', component: Loading, name: `${rl.routeKey}-loading` },
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

function setErrorRoute(router: Router, teamKey: string) {
    const errorRoute: RouteRecordRaw = {
        path: '',
        name: `${teamKey}-error`,
        component: Error,
    };

    router.removeRoute(`${teamKey}-loading`);
    router.addRoute(teamKey, errorRoute);

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
    const mfStore = useMFStore();

    routeLoaders.forEach((rl) => {
        promises.push(rl.loader()
            .then((routes) => {
                addRoutes(router, rl.routeKey, routes);
                mfStore.setMFLoadedState(rl.mfKey, true);
            })
            .catch((error) => {
                setErrorRoute(router, rl.routeKey);
                console.error(`${rl.routeKey} loaded with error: `, { error });
                mfStore.setMFLoadedState(rl.mfKey, false);
            }));
    });

    return await Promise.all(promises);
}
