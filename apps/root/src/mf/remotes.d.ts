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
