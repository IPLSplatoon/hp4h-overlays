<template>
    <div class="event-info">
        <OpacitySwapTransition mode="default">
            <span v-if="!showDonationPromo">You are watching <span class="highlight">HP for Heroes</span></span>
            <span
                v-else
                class="location"
            >
                Support the cause - <span class="highlight">!donate</span>
            </span>
        </OpacitySwapTransition>
    </div>
</template>

<script lang="ts" setup>
import OpacitySwapTransition from 'src/graphics/components/OpacitySwapTransition.vue';
import { onMounted, ref } from 'vue';

const showDonationPromo = ref(false);

onMounted(() => {
    setTimeout(() => {
        showDonationPromo.value = true;
    }, 7500);
});
</script>

<style lang="scss" scoped>
@use '../../../styles/constants';
@use '../../../styles/fonts';

.event-info {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    position: relative;
    font-weight: 500;
    white-space: nowrap;
    width: 100%;

    > span {
        width: 100%;
        left: 0;
    }
}

.highlight {
    color: constants.$accent-red;
}
</style>
