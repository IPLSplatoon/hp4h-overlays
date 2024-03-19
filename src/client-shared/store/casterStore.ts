import { Casters } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const casters = nodecg.Replicant<Casters>('casters', DASHBOARD_BUNDLE_NAME);

interface CasterStore {
    casters: Casters
}

export const useCasterStore = defineStore('casters', {
    state: () => ({
        casters: {}
    } as CasterStore)
});

export const initCasterStore = createReplicantStoreInitializer([casters], useCasterStore);
