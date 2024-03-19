<template>
    <div class="omnibar-wrapper">
        <div class="omnibar-content">
            <div class="omnibar-logo-wrapper">
                <img
                    class="tournament-logo"
                    src="../../../assets/img/iconic-mark.png"
                >
                <donation-total :max-width="135" />
            </div>
            <div class="omnibar-slides">
                <omnibar-slide-title 
                    class="slide-title" 
                    :text="slideTitle"
                />
                <div class="slide-content">
                    <transition
                        mode="out-in"
                        @leave="slideLeave"
                        @enter="slideEnter"
                        @before-enter="beforeSlideEnter"
                    >
                        <component :is="activeSlide" />
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSlides } from '../../helpers/useSlides';
import { DASHBOARD_BUNDLE_NAME } from '../../../client-shared/constants';
import { computed } from 'vue';
import gsap from 'gsap';
import OmnibarMusic from './components/OmnibarMusic.vue';
import OmnibarNextRound from './components/OmnibarNextRound.vue';
import OmnibarActiveRound from './components/OmnibarActiveRound.vue';
import OmnibarPredictions from './components/OmnibarPredictions.vue';
import OmnibarEventIntro from './components/OmnibarEventIntro.vue';
import { useNextRoundStore } from '../../../client-shared/store/nextRoundStore';
import { useMusicStore } from '../../../client-shared/store/musicStore';
import { usePredictionDataStore } from '../../../client-shared/store/predictionDataStore';
import OmnibarSlideTitle from './components/OmnibarSlideTitle.vue';
import { useActiveRoundStore } from 'client-shared/store/activeRoundStore';
import DonationTotal from '../../components/DonationTotal.vue';
import { useBreakScreenStore } from 'client-shared/store/breakScreenStore';

export default defineComponent({
    name: 'Omnibar',

    components: {
        DonationTotal,
        OmnibarMusic,
        OmnibarNextRound,
        OmnibarActiveRound,
        OmnibarPredictions,
        OmnibarEventIntro,
        OmnibarSlideTitle
    },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const nextRoundStore = useNextRoundStore();
        const musicStore = useMusicStore();
        const predictionDataStore = usePredictionDataStore();
        const breakScreenStore = useBreakScreenStore();
        const enableOmnibarPredictions = computed(() => {
            const currentPrediction = predictionDataStore.predictionStore.currentPrediction;
            return predictionDataStore.predictionStore.status?.predictionsEnabled
                && (currentPrediction?.status === 'ACTIVE' || currentPrediction?.status === 'LOCKED');
        });

        const slides = useSlides([
            { component: 'OmnibarEventIntro', duration: 15 },
            { component: 'OmnibarMusic', enabled: computed(() => musicStore.musicShown), duration: 15 },
            { component: 'OmnibarNextRound', enabled: computed(() => nextRoundStore.nextRound.showOnStream) },
            { component: 'OmnibarActiveRound', enabled: computed(() =>
                !nextRoundStore.nextRound.showOnStream
                && (breakScreenStore.obsData.status !== 'CONNECTED'
                    || breakScreenStore.activeBreakScene !== 'stages'
                    || !(breakScreenStore.obsData.currentScene?.toLowerCase().includes('roster') ?? false))
            ) },
            { component: 'OmnibarPredictions', enabled: enableOmnibarPredictions }
        ]);

        nodecg.listenFor('showPredictionData', DASHBOARD_BUNDLE_NAME, () => {
            slides.forceSetSlide('OmnibarPredictions');
        });

        const slideTitle = computed(() => {
            switch (slides.activeComponent.value) {
                case 'OmnibarMusic':
                    return 'Music';
                case 'OmnibarNextRound':
                    return `Next: ${nextRoundStore.nextRound.name}`;
                case 'OmnibarActiveRound':
                    return `Now: ${activeRoundStore.activeRound.match.name}`;
                case 'OmnibarPredictions':
                    return 'Predictions';
                default:
                    return null;
            }
        });

        return {
            slideTitle,
            activeSlide: slides.activeComponent,
            slideLeave(elem: HTMLElement, done: gsap.Callback) {
                gsap.to(elem, { y: 15, opacity: 0, ease: 'power2.in', duration: 0.5, onComplete: done });
            },
            beforeSlideEnter(elem: HTMLElement) {
                gsap.set(elem, { y: -15, opacity: 0 });
            },
            slideEnter(elem: HTMLElement, done: gsap.Callback) {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.5, onComplete: done });
            }
        };
    }
});
</script>

<style lang="scss">
@use 'sass:color';
@use '../../styles/constants';
@use '../../styles/backgrounds';

.omnibar-wrapper {
    width: calc(100% - 400px);
    margin: 0 200px;
    height: 150px;
    position: absolute;
    bottom: 40px;
    left: 0;

    > .omnibar-content {
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;

        > .omnibar-logo-wrapper {
            @include backgrounds.striped-background;

            background-color: constants.$accent-red;
            height: 100%;
            width: 250px;
            margin-right: 12px;
            display: flex;
            align-items: center;

            > .tournament-logo {
                height: 100px;
                transform: rotate(-5deg);
                margin-left: -10px;
            }

            > .donation-total {
                font-size: 32px;
                padding: 0 8px;
                margin-left: 4px;
                width: 135px;
                box-sizing: border-box;
                color: constants.$background-dark-text;
                filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.5));
            }
        }

        > .separator {
            width: 2px;
            height: 80%;
            background-color: constants.$accent;
        }

        > .omnibar-slides {
            position: relative;
            font-size: 36px;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 16px;
            height: 100%;
            background-color: constants.$text-background;
            border: 4px solid constants.$accent-salmon;
            box-sizing: border-box;
            border-radius: 8px;

            > .slide-title {
                position: absolute;
                top: -22px;
                left: -10px;
                z-index: 2;
            }

            > .slide-content {
                width: 1200px;
                text-align: center;
                height: 100%;
                display: flex;
                align-items: center;
                overflow: hidden;

                > * {
                    width: 100%;
                }
            }
        }
    }
}
</style>
