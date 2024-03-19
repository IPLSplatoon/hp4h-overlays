import { ScoreboardData } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const scoreboardData = nodecg.Replicant<ScoreboardData>('scoreboardData', DASHBOARD_BUNDLE_NAME);

interface ScoreboardStore {
    scoreboardData: ScoreboardData
}

export const useScoreboardStore = defineStore('scoreboard', {
    state: () => ({
        scoreboardData: null
    } as unknown as ScoreboardStore)
});

export const initScoreboardStore = createReplicantStoreInitializer([scoreboardData], useScoreboardStore);
