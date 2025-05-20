// Plugins

// Composables
import { createApp } from 'vue';
// Components
import App from './App.vue';
import { initMFs } from './mf';
import { loadMFComponents } from './mf/loaders/components';
import { registerPlugins } from './plugins';

initMFs();

const app = createApp(App);

registerPlugins(app);

app.mount('#app');

loadMFComponents();
