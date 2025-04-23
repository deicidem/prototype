// Plugins

import { registerPlugins } from '@/plugins';

// Composables
import { createApp } from 'vue';
// Components
import App from './App.vue';
import { initMFs } from './mf';

initMFs();

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
