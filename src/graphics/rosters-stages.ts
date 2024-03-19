import './styles/graphics-common.scss';

import { createApp } from 'vue';
import RostersStages from './pages/rosters-stages/RostersStages.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initActiveRoundStore } from 'client-shared/store/activeRoundStore';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { initBreakScreenStore } from 'client-shared/store/breakScreenStore';
import { initAssetPathStore } from 'client-shared/store/assetPathStore';

gsap.registerPlugin(Flip);

(async () => {
    const app = createApp(RostersStages);
    installCommonHelpers(app);
    app.use(createPinia());
    await initActiveRoundStore();
    await initBreakScreenStore();
    await initAssetPathStore();
    app.mount('#app');
})();
