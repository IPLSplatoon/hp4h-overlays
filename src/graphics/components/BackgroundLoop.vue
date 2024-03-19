<template>
    <div
        class="background-loop-wrapper"
        :class="`variant-${props.variant}`"
    >
        <div class="background-loop" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    variant: string
}>();
</script>

<style lang="scss" scoped>
@use '../styles/constants';

.background-loop-wrapper {
    overflow: hidden;

    &.variant-hearts {
        background-color: constants.$background;

        > .background-loop {
            background-image: url('../../assets/img/hearts-tile.png');
            background-size: 200px 260px;
            background-position: center;
            width: 100%;
            height: calc(100% + 260px);
            animation: 30s linear hearts-background;
            image-rendering: pixelated;
            mix-blend-mode: soft-light;
            opacity: 0.5;
        }
    }
}

.background-loop {
    background-repeat: repeat;
    background-position: 0 0;
    animation-iteration-count: infinite !important;
}

@keyframes hearts-background {
    0% {
        transform: translate(0px, -260px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}
</style>
