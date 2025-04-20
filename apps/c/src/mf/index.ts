import { init } from '@module-federation/enhanced/runtime';

export function initMFs() {
    console.log('init mf');
    init({
        name: 'root',
        remotes: [
            {
                type: 'module',
                name: 'b',
                entry: 'http://localhost:4174/remoteEntry.js',
                entryGlobalName: 'b',
            },
        ],
    });
}
