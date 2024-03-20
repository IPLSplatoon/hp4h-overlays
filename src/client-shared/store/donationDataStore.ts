import { DonationData } from 'types/schemas';
import { defineStore } from 'pinia';
import { createReplicantStoreInitializer } from 'client-shared/store/storeHelper';

const donationData = nodecg.Replicant<DonationData>('donationData');

interface DonationDataStore {
    donationData: DonationData
}

export const useDonationDataStore = defineStore('donationData', {
    state: () => ({
        donationData: {}
    } as DonationDataStore)
});

export const initDonationDataStore = createReplicantStoreInitializer([donationData], useDonationDataStore);
