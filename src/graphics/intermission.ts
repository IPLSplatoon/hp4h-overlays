import './styles/graphics-common.scss';

import { createApp } from 'vue';
import Intermission from './pages/intermission/Intermission.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initBreakScreenStore } from '../client-shared/store/breakScreenStore';

(async () => {
    const app = createApp(Intermission);
    installCommonHelpers(app);
    app.use(createPinia());
    await initBreakScreenStore();
    app.mount('#app');
})();
