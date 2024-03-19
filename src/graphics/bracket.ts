import './styles/graphics-common.scss';
import '@tourneyview/renderer/css/base.css';

import { createApp } from 'vue';
import BracketGraphic from './pages/bracket/BracketGraphic.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initBracketStore } from 'client-shared/store/bracketStore';

(async () => {
    const app = createApp(BracketGraphic);
    installCommonHelpers(app);
    app.use(createPinia());
    await initBracketStore();
    app.mount('#app');
})();
