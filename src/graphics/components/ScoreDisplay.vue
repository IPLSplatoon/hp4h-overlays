<template>
    <div
        class="score-color-wrapper"
        :style="{
            backgroundColor: props.color,
            color: getContrastingTextColor(props.color)
        }"
    >
        <div class="team-score font-numeric">
            {{ props.value }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { getContrastingTextColor } from '@iplsplatoon/vue-components';

const props = defineProps<{
    value: number
    color: string
}>();
</script>

<style scoped lang="scss">
@use '../styles/constants';

.score-color-wrapper {
    display: flex;
    flex-grow: 1;
    border-radius: 8px;
    transition: background-color 350ms;
    position: relative;
    border: 2px solid constants.$text-color;
    box-sizing: border-box;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: radial-gradient(rgba(255, 255, 255, 1), transparent);
        border: 3px solid white;
        box-sizing: border-box;
        mix-blend-mode: soft-light;
        border-radius: 8px;
        opacity: 0.75;
    }

    > .team-score {
        text-align: center;
        font-size: 45px;
        font-weight: 600;
        flex-grow: 1;
        transform: translateY(1px);
        transition: color 350ms;
        z-index: 1;
    }
}
</style>
