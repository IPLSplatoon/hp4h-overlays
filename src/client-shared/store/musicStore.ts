import { NowPlaying, MusicShown } from 'schemas';
import { defineStore } from 'pinia';
import { DASHBOARD_BUNDLE_NAME } from '../constants';
import { createReplicantStoreInitializer } from './storeHelper';

const nowPlaying = nodecg.Replicant<NowPlaying>('nowPlaying', DASHBOARD_BUNDLE_NAME);
const musicShown = nodecg.Replicant<MusicShown>('musicShown', DASHBOARD_BUNDLE_NAME);

interface MusicStore {
    nowPlaying: NowPlaying
    musicShown: MusicShown
}

export const useMusicStore = defineStore('music', {
    state: () => ({
        nowPlaying: {},
        musicShown: null
    } as unknown as MusicStore)
});

export const initMusicStore = createReplicantStoreInitializer([nowPlaying, musicShown], useMusicStore);
