<template>
    <div class="donation-total-wrapper">
        <div
            v-for="donation in newDonationElems"
            :key="donation.id"
            class="new-donation"
        >
            +{{ donation.amount }}
        </div>
        <fitted-content
            :max-width="props.maxWidth"
            class="donation-total"
            align="center"
        >
            {{ formattedTotal }}
        </fitted-content>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useTweenedNumber } from '../helpers/useTweenedNumber';
import FittedContent from './FittedContent.vue';
import { useDonationDataStore } from 'client-shared/store/donationDataStore';

const props = defineProps<{
    maxWidth: number
}>();
const donationDataStore = useDonationDataStore();
const tweenedTotal = useTweenedNumber(() => donationDataStore.donationData.donationTotal);
const formattedTotal = computed(() =>
    tweenedTotal.value.toLocaleString('en-US', {
        style: 'currency',
        currency: donationDataStore.donationData.currency,
        maximumFractionDigits: 0
    }));
const newDonationElems = ref<{ amount: string, id: string }[]>([]);

function onDonation(donation: { amount: number, id: string }) {
    newDonationElems.value.push({
        id: donation.id,
        amount: donation.amount.toLocaleString('en-US', {
            style: 'currency',
            currency: donationDataStore.donationData.currency,
            maximumFractionDigits: 2
        })
    });
    setTimeout(() => {
        newDonationElems.value = newDonationElems.value.filter(elem => elem.id !== donation.id);
    }, 5000);
}

onMounted(() => {
    nodecg.listenFor('donationReceived', onDonation);
});

onUnmounted(() => {
    nodecg.unlisten('donationReceived', onDonation);
});
</script>

<style scoped lang="scss">
.donation-total {
    font-weight: 500;
    font-size: 28px;
    font-feature-settings: 'tnum';
}

.donation-total-wrapper {
    position: relative;
}

.new-donation {
    position: absolute;
    left: 50%;
    top: -20px;
    font-size: 24px;
    transform: translateX(-50%);
    animation: new-donation 5s linear;
    opacity: 0;
    white-space: nowrap;
}

@keyframes new-donation {
    0% {
        opacity: 0;
        transform: translate(-50%, 0);
    }

    25% {
        opacity: 1;
    }

    75% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -50px);
    }
}
</style>
