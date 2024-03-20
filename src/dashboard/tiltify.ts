import './styles/common.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initDonationDataStore } from 'client-shared/store/donationDataStore';
import TiltifyPanel from './pages/tiltify/TiltifyPanel.vue';

(async () => {
    const app = createApp(TiltifyPanel);
    app.use(createPinia());
    await initDonationDataStore();
    app.mount('#app');
})();
