import { init } from '@module-federation/enhanced/runtime';

export function initMFs() {
    console.log('init mf');
    init({
        name: 'root',
        remotes: [
            {
                type: 'module',
                name: 'b',
                entry: 'http://localhost:3001/remoteEntry.js',
                entryGlobalName: 'b',
            },
            {
                type: 'module',
                name: 'c',
                entry: 'http://localhost:4175/remoteEntry.js',
                entryGlobalName: 'c',
            },
        ],
    });
}
