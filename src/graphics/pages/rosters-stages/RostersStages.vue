<template>
    <div
        ref="rostersWrapper"
        class="rosters-layout"
    >
        <team-roster
            team="A"
            :compact="displayStages"
        />
        <team-roster
            team="B"
            :compact="displayStages"
        />
    </div>
    <transition name="counter">
        <score-counter
            v-if="displayStages"
            class="score-counter"
        />
    </transition>
    <stages />
</template>

<script lang="ts" setup>
import TeamRoster from './components/TeamRoster.vue';
import { useBreakScreenStore } from 'client-shared/store/breakScreenStore';
import { computed, onMounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import ScoreCounter from './components/ScoreCounter.vue';
import Stages from './components/Stages.vue';

const breakScreenStore = useBreakScreenStore();
const displayStages = computed(() => breakScreenStore.activeBreakScene === 'stages');
const rostersWrapper = ref<HTMLDivElement>();

onMounted(() => {
    if (displayStages.value) {
        rostersWrapper.value?.classList.add('compact');
        gsap.set(
            rostersWrapper.value!.querySelectorAll('.plaster-bottom'),
            { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)' });
    }

    watch(displayStages, newValue => {
        const tl = gsap.timeline({
            delay: newValue ? 0 : 0.75
        });
        const state = Flip.getState(rostersWrapper.value!.querySelectorAll('.players, .team-roster'));
        if (newValue) {
            rostersWrapper.value!.classList.add('compact');
            tl.fromTo(
                rostersWrapper.value!.querySelectorAll('.plaster-bottom'),
                { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
                { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)', duration: 0.25, ease: 'power2.inOut', stagger: 0.2 });
        } else {
            rostersWrapper.value!.classList.remove('compact');
        }
        tl.add(Flip.from(state, {
            duration: 0.75,
            ease: 'power2.inOut',
            absolute: '.team-roster',
            delay: newValue ? 0.2 : 0
        }));
        if (!newValue) {
            tl.to(
                rostersWrapper.value!.querySelectorAll('.plaster-bottom'),
                { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.25, ease: 'power2.inOut', stagger: 0.2 });
        }
    });
});
</script>

<style lang="scss">
@use 'sass:color';
@use '../../styles/constants';

.rosters-layout {
    width: 100%;
    height: 800px;
    position: absolute;
    top: 75px;
    left: 0;
    bottom: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 150px;

    &.compact {
        align-items: flex-start;
        gap: 300px;
    }

    > .team-roster {
        z-index: 1;
    }
}

.score-counter {
    position: absolute;
    top: 85px;
    left: 50%;
    transform: translate(-50%, 0);
}

.counter-enter-active, .counter-leave-active {
    transition-duration: 350ms;
    transition-property: opacity, transform;
}

.counter-enter-active {
    transition-timing-function: ease-out;
    transition-delay: 1000ms;
}

.counter-leave-active {
    transition-timing-function: ease-in;
}

.counter-enter-from {
    opacity: 0;
    transform: translate(-50%, -25px);
}

.counter-leave-to {
    opacity: 0;
    transform: translate(-50%, 25px);
}
</style>
