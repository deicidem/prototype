import type { B_KEY, B_ROUTE_KEY } from './b';
import type { C_KEY, C_ROUTE_KEY } from './c';

export interface MFState {
    [B_KEY]: boolean | null;
    [C_KEY]: boolean | null;
}

export type MFKeys = typeof B_KEY | typeof C_KEY;
export type MFRouteKeys = typeof B_ROUTE_KEY | typeof C_ROUTE_KEY;
