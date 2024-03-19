<template>
    <transition
        :css="false"
        mode="out-in"
        @leave="textLeave"
        @enter="textEnter"
        @before-enter="beforeTextEnter"
    >
        <div 
            v-if="props.text != null"
            :key="props.text"
            class="omnibar-slide-title"
        >
            <fitted-content 
                class="text-content"
                :max-width="maxWidth"
            >
                {{ props.text }}
            </fitted-content>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import FittedContent from 'src/graphics/components/FittedContent.vue';

const maxWidth = 400;
const props = defineProps<{ text: string | null }>();
let previousWidth = 0;

function textLeave(elem: HTMLElement, done: gsap.Callback) {
    if (props.text == null) {
        previousWidth = 0;
        gsap.to(elem, { opacity: 0, duration: 0.35, onComplete: done });
    } else {
        const textContent = elem.querySelector('.text-content');
        previousWidth = Math.min(textContent!.querySelector('div')!.getBoundingClientRect().width, maxWidth);
        gsap.to(textContent, { opacity: 0, duration: 0.35, onComplete: done });
    }
}

function beforeTextEnter(elem: HTMLElement) {
    if (previousWidth === 0) {
        gsap.set(elem, { opacity: 0 });
    } else {
        gsap.set(elem, { width: previousWidth });
        gsap.set(elem.querySelector('.text-content'), { opacity: 0 });
    }
}

function textEnter(elem: HTMLElement, done: gsap.Callback) {
    const newWidth = Math.min(elem.querySelector('.text-content > div')!.getBoundingClientRect().width, maxWidth);
    if (previousWidth === 0) {
        gsap.set(elem, { width: newWidth });
        gsap.to(elem, { opacity: 1, duration: 0.35, onComplete: done });
    } else {
        gsap.to(elem, { duration: 0.5, ease: 'power2.inOut', width: newWidth });
        gsap.to(elem.querySelector('.text-content'), {
            opacity: 1,
            duration: 0.35,
            delay: 0.35,
            onComplete: done
        });
    }
}
</script>

<style lang="scss" scoped>
@use '../../../styles/constants';

.omnibar-slide-title {
    font-size: 0.7em;
    font-weight: 500;
    padding: 2px 12px;
    background-color: constants.$accent-salmon;
    color: constants.$text-color;
    border-radius: 4px;

    .text-content {
        white-space: nowrap;
    }

    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>
