import { ActiveRound, SwapColorsInternally } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const activeRound = nodecg.Replicant<ActiveRound>('activeRound', DASHBOARD_BUNDLE_NAME);
const swapColorsInternally = nodecg.Replicant<SwapColorsInternally>('swapColorsInternally', DASHBOARD_BUNDLE_NAME);
const breakStagesVisible = nodecg.Replicant<boolean>('breakStagesVisible', { defaultValue: false });

interface ActiveRoundStore {
    activeRound: ActiveRound;
    swapColorsInternally: SwapColorsInternally;
    breakStagesVisible: boolean;
}

export const useActiveRoundStore = defineStore('activeRound', {
    state: () => ({
        activeRound: null,
        swapColorsInternally: null,
        breakStagesVisible: false
    } as unknown as ActiveRoundStore),
    getters: {
        formattedMatchType: state => `${state.activeRound.match.type === 'BEST_OF' ? 'Best of' : 'Play all'} ${state.activeRound.games.length}`
    }
});

export const initActiveRoundStore = createReplicantStoreInitializer([
    activeRound,
    swapColorsInternally, 
    breakStagesVisible
], useActiveRoundStore);
