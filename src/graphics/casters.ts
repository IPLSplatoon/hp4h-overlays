import './styles/graphics-common.scss';

import { createApp } from 'vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initCasterStore } from 'client-shared/store/casterStore';
import Casters from './pages/casters/Casters.vue';

(async () => {
    const app = createApp(Casters);
    installCommonHelpers(app);
    app.use(createPinia());
    await initCasterStore();
    app.mount('#app');
})();
