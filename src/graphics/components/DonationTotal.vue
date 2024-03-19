<template>
    <fitted-content
        :max-width="props.maxWidth"
        class="donation-total"
        align="center"
    >
        {{ formattedTotal }}
    </fitted-content>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTweenedNumber } from '../helpers/useTweenedNumber';
import FittedContent from './FittedContent.vue';

const props = defineProps<{
    maxWidth: number
}>();
const total = ref(1000);
const tweenedTotal = useTweenedNumber(total);
const formattedTotal = computed(() =>
    tweenedTotal.value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }));
</script>

<style scoped lang="scss">
.donation-total {
    font-weight: 500;
    font-size: 28px;
    font-feature-settings: 'tnum';
}
</style>
