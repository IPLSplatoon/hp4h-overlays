<template>
    <div class="video-loader-wrapper">
        <iframe
            ref="iframe"
            allow="autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;"
            :src="src"
            width="1280"
            height="720"
            :class="{ loaded }"
        />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps<{
    src?: string
}>();

const iframe = ref<HTMLIFrameElement | null>(null);
const loaded = ref(false);

const messageListener = (event: MessageEvent<{ action: string }>) => {
    if (event.source !== iframe.value?.contentWindow) return;

    if (event.data.action === 'new-video-track-added') {
        loaded.value = true;
    }
};
const iframeLoadListener = () => loaded.value = true;

onMounted(() => {
    watch(() => props.src, newValue => {
        window.removeEventListener('message', messageListener);
        iframe.value?.removeEventListener('load', iframeLoadListener);

        if (newValue?.includes('vdo.ninja')) {
            window.addEventListener('message', messageListener);
        } else {
            iframe.value?.addEventListener('load', iframeLoadListener);
        }
    }, { immediate: true });
});

onUnmounted(() => {
    window.removeEventListener('message', messageListener);
});
</script>

<style lang="scss">
.video-loader-wrapper {
    position: relative;

    > iframe {
        border-width: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 500ms;

        &.loaded {
            opacity: 1;
        }
    }
}
</style>
