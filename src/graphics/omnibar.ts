import './styles/graphics-common.scss';

import { createApp } from 'vue';
import Omnibar from './pages/omnibar/Omnibar.vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import { createPinia } from 'pinia';
import { initActiveRoundStore } from 'client-shared/store/activeRoundStore';
import { initCasterStore } from 'client-shared/store/casterStore';
import { initMusicStore } from 'client-shared/store/musicStore';
import { initPredictionDataStore } from 'client-shared/store/predictionDataStore';
import { initNextRoundStore } from 'client-shared/store/nextRoundStore';
import { initBreakScreenStore } from 'client-shared/store/breakScreenStore';
import { initDonationDataStore } from 'client-shared/store/donationDataStore';

(async () => {
    const app = createApp(Omnibar);
    installCommonHelpers(app);
    app.use(createPinia());
    await initActiveRoundStore();
    await initCasterStore();
    await initMusicStore();
    await initPredictionDataStore();
    await initNextRoundStore();
    await initBreakScreenStore();
    await initDonationDataStore();
    app.mount('#app');
})();
