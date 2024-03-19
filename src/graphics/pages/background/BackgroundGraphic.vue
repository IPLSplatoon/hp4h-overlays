<template>
    <background-loop 
        :variant="bgVariant" 
        class="background"
        :style="{ filter: `brightness(${isNaN(brightness) ? 1 : brightness})` }"
    />
</template>

<script lang="ts" setup>
import BackgroundLoop from 'src/graphics/components/BackgroundLoop.vue';

const params = new URLSearchParams(window.location.search);
const bgVariant = params.get('variant') ?? 'hearts';
const brightness = parseFloat(params.get('brightness') ?? '');
</script>

<style lang="scss" scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
</style>
