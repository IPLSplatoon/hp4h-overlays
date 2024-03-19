import { PredictionStore } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const predictionStore = nodecg.Replicant<PredictionStore>('predictionStore', DASHBOARD_BUNDLE_NAME);

interface PredictionDataStore {
    predictionStore: PredictionStore;
}

export const usePredictionDataStore = defineStore('prediction', {
    state: () => ({
        predictionStore: null,
    } as unknown as PredictionDataStore)
});

export const initPredictionDataStore = createReplicantStoreInitializer([predictionStore], usePredictionDataStore);
