import { AssetPaths } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from 'client-shared/constants';
import { createReplicantStoreInitializer } from './storeHelper';

const assetPaths = nodecg.Replicant<AssetPaths>('assetPaths', DASHBOARD_BUNDLE_NAME);

interface AssetPathStore {
    assetPaths: AssetPaths;
}

export const useAssetPathStore = defineStore('assetPaths', {
    state: () => ({
        assetPaths: null
    } as unknown as AssetPathStore),
    getters: {
        getStageImagePath: state =>
            (stageName: string) => state.assetPaths.stageImages[stageName] ?? `/bundles/${nodecg.bundleName}/static/unknown-stage.png`
    }
});

export const initAssetPathStore = createReplicantStoreInitializer([assetPaths], useAssetPathStore);
