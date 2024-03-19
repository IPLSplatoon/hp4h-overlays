import './styles/graphics-common.scss';

import { createApp } from 'vue';
import BackgroundGraphic from './pages/background/BackgroundGraphic.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';

(() => {
    const app = createApp(BackgroundGraphic);
    installCommonHelpers(app);
    app.mount('#app');
})();
