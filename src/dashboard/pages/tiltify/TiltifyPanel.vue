<template>
    <div
        class="status-display"
        :class="donationDataStore.donationData.status.toLowerCase()"
    >
        {{ donationDataStore.donationData.status }}
        <ipl-button
            v-if="donationDataStore.donationData.status !== 'CONNECTED'"
            label="Reconnect"
            color="#333"
            style="margin-top: 4px;"
            disable-on-success
            @click="onReconnect"
        />
    </div>
    <ipl-space style="margin-top: 8px;">
        Donation total: {{ donationDataStore.donationData.donationTotal.toLocaleString('en-US', {
            currency: donationDataStore.donationData.currency,
            style: 'currency'
        }) }}
    </ipl-space>
</template>

<script setup lang="ts">
import { useDonationDataStore } from 'client-shared/store/donationDataStore';
import { IplButton, IplSpace } from '@iplsplatoon/vue-components';

const donationDataStore = useDonationDataStore();

async function onReconnect() {
    await nodecg.sendMessage('reconnectToTiltify');
}
</script>

<style scoped lang="scss">
.status-display {
    text-align: center;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 8px;

    &.connected {
        background-color: #00A651;
        color: #fff;
    }

    &.connecting {
        background-color: #ffc700;
        color: #222;
    }

    &.disconnected {
        background-color: #e74e36;
        color: #fff;
    }
}
</style>
