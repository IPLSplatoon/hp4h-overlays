import { ActiveBreakScene, MainFlavorText, NextRoundStartTime, ObsData } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const mainFlavorText = nodecg.Replicant<MainFlavorText>('mainFlavorText', DASHBOARD_BUNDLE_NAME);
const nextRoundStartTime = nodecg.Replicant<NextRoundStartTime>('nextRoundStartTime', DASHBOARD_BUNDLE_NAME);
const activeBreakScene = nodecg.Replicant<ActiveBreakScene>('activeBreakScene', DASHBOARD_BUNDLE_NAME);
const obsData = nodecg.Replicant<ObsData>('obsData', DASHBOARD_BUNDLE_NAME);

interface BreakScreenStore {
    mainFlavorText: MainFlavorText;
    nextRoundStartTime: NextRoundStartTime;
    activeBreakScene: ActiveBreakScene;
    obsData: ObsData;
}

export const useBreakScreenStore = defineStore('breakScreen', {
    state: () => ({
        mainFlavorText: null,
        nextRoundStartTime: { startTime: null, isVisible: null },
        activeBreakScene: null,
        obsData: null
    } as unknown as BreakScreenStore)
});

export const initBreakScreenStore = createReplicantStoreInitializer(
    [mainFlavorText, nextRoundStartTime, activeBreakScene, obsData],
    useBreakScreenStore);
