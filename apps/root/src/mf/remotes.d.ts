declare module 'b/routes' {
    import type { Routes } from 'b';

    const routes: Routes;
    export default routes;
}

declare module 'b/components' {
    import type { BDashboard } from 'b';

    const BDashboard: BDashboard;
    export { BDashboard };
}

declare module 'с/routes' {
    import type { Routes } from 'с';

    const routes: Routes;
    export default routes;
}

declare module 'с/components' {
    import type { СDashboard } from 'с';

    const СDashboard: СDashboard;
    export { СDashboard };
}
