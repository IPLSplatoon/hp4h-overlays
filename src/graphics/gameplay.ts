import './styles/graphics-common.scss';

import { createApp } from 'vue';
import Gameplay from './pages/gameplay/Gameplay.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initCasterStore } from '../client-shared/store/casterStore';
import { initActiveRoundStore } from '../client-shared/store/activeRoundStore';
import { initScoreboardStore } from '../client-shared/store/scoreboardStore';

(async () => {
    const app = createApp(Gameplay);
    installCommonHelpers(app);
    app.use(createPinia());
    await initCasterStore();
    await initActiveRoundStore();
    await initScoreboardStore();
    app.mount('#app');
})();
