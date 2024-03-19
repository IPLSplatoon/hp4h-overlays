<template>
    <transition
        mode="out-in"
        @enter="stageWrapperEnter"
        @before-enter="beforeStageEnter"
        @leave="stageLeave"
    >
        <div
            v-if="breakScreenStore.activeBreakScene === 'stages'"
            :key="matchId"
            class="stage-display-wrapper"
            :class="`game-count-${games.length}`"
        >
            <transition
                v-for="(game, index) in games"
                :key="`game_${index}`"
                mode="out-in"
                @enter="stageEnter"
                @leave="stageLeave"
                @before-enter="beforeStageEnter"
            >
                <div
                    :key="`${index}_${game.mode}_${game.stage}`"
                    class="stage"
                    :data-stage="game.stage"
                    :class="{
                        'darken-image': shouldDarkenImage(game.winner),
                        'darken-text': shouldDarkenText(game.winner)
                    }"
                >
                    <div class="stage-content">
                        <div class="stage-image-wrapper">
                            <opacity-swap-transition>
                                <div
                                    v-if="game.winner !== 'none'"
                                    :key="winnerNames[index].name"
                                    class="stage-winner"
                                >
                                    <div class="stage-winner-name">{{ winnerNames[index].name }}</div>
                                </div>
                            </opacity-swap-transition>
                            <div 
                                class="stage-image"
                                :style="{ backgroundImage: `url('${getStageImagePath(game.stage)}')` }"
                            />
                        </div>
                        <div class="stage-badge-wrapper">
                            <div class="stage-mode">{{ game.mode }}</div>
                            <div class="stage-name">{{ game.stage }}</div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import gsap from 'gsap';
import { loadAndCheckIfImageExists } from '../../../helpers/imageHelper';
import { addDots } from 'client-shared/helpers/stringHelper';
import { useActiveRoundStore } from 'client-shared/store/activeRoundStore';
import { useAssetPathStore } from 'client-shared/store/assetPathStore';
import { useBreakScreenStore } from 'client-shared/store/breakScreenStore';

export default defineComponent({
    name: 'StageDisplay',

    components: { OpacitySwapTransition },

    setup() {
        const breakScreenStore = useBreakScreenStore();
        const activeRoundStore = useActiveRoundStore();
        const assetPathStore = useAssetPathStore();
        const games = computed(() => activeRoundStore.activeRound.games);

        function stageEnter(elem: HTMLElement, done: gsap.Callback, delay = 0) {
            const isSingleStage = elem.classList.contains('stage');
            const elems = isSingleStage ? elem : elem.querySelectorAll('.stage');

            gsap.to(elems, {
                y: 0,
                duration: 0.75,
                opacity: 1,
                ease: 'power2.out',
                onComplete: done,
                stagger: -0.08,
                rotate: 0,
                delay
            });
        }

        return {
            breakScreenStore,
            activeRoundStore,
            games,
            shouldDarkenImage: (winner: string) => (winner !== 'none' || activeRoundStore.activeRound.match.isCompleted),
            shouldDarkenText: (winner: string) => (winner === 'none' && activeRoundStore.activeRound.match.isCompleted),
            winnerNames: computed(() => games.value?.map(game => {
                switch (game.winner) {
                    case 'alpha':
                        return {
                            name: addDots(activeRoundStore.activeRound.teamA.name)
                        };
                    case 'bravo':
                        return {
                            name: addDots(activeRoundStore.activeRound.teamB.name)
                        };
                    default:
                        return { name: undefined };
                }
            })),
            matchId: computed(() => activeRoundStore.activeRound.match.id),
            getStageImagePath: assetPathStore.getStageImagePath,

            async stageEnter(elem: HTMLElement, done: gsap.Callback) {
                await loadAndCheckIfImageExists(assetPathStore.getStageImagePath(elem.dataset.stage!));
                stageEnter(elem, done);
            },
            stageWrapperEnter(elem: HTMLElement, done: gsap.Callback) {
                stageEnter(elem, done, 1.25);
            },
            beforeStageEnter(elem: HTMLElement) {
                const isSingleStage = elem.classList.contains('stage');
                gsap.set(
                    isSingleStage ? elem : elem.querySelectorAll('.stage'),
                    { ...(isSingleStage ? { y: -150 } : { y: 250 }), opacity: 0, rotate: gsap.utils.random(-5, 5, 0.1, true) });
            },
            stageLeave(elem: HTMLElement, done: gsap.Callback) {
                const isSingleStage = elem.classList.contains('stage');
                const elems = isSingleStage ? elem : elem.querySelectorAll('.stage');

                gsap.to(elems, {
                    ...(isSingleStage ? { y: 150 } : { y: 250 }),
                    duration: 0.75,
                    opacity: 0,
                    ease: 'power2.in',
                    rotate: gsap.utils.random(-5, 5, 0.1, true),
                    stagger: -0.08,
                    onComplete: done
                });
            }
        };
    }
});
</script>

<style lang="scss">
@use '../../../styles/constants';
@use '../../../styles/backgrounds';

.stage-display-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -15px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &.game-count-7 .stage {
        width: 225px;

        .stage-name {
            font-size: 28px !important;
        }

        .stage-mode {
            font-size: 28px;
            margin-bottom: 0;
        }

        .stage-badge {
            width: 115% !important;
        }
    }

    &.game-count-5 .stage {
        width: 300px;
    }

    &.game-count-3 .stage {
        width: 325px;
    }

    .stage {
        &:not(:last-child) {
            margin-right: 35px;
        }

        &.darken-image {
            .stage-image-wrapper {
                border-color: #aaa !important;
            }

            .stage-image {
                filter: grayscale(0.5) brightness(0.5);
            }
        }

        &.darken-text {
            .stage-badge-wrapper {
                filter: grayscale(0.5) brightness(0.5);
            }
        }

        .stage-mode {
            text-align: center;
            font-size: 32px;
            line-height: 36px;
            font-weight: 600;
            white-space: nowrap;
            z-index: 1;
            width: max-content;
            margin-bottom: 2px;
        }

        .stage-content {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            color: constants.$background-dark-text;

            .stage-badge-wrapper {
                @include backgrounds.striped-background;

                width: 100%;
                margin-top: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 125px;
                transition: filter 350ms;
                background-color: constants.$background-dark;
                border-radius: 8px;
                overflow: hidden;

                .stage-name {
                    font-size: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    padding: 0 4px;
                }
            }

            .stage-winner {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                overflow-wrap: anywhere;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                padding: 2px;
                box-sizing: border-box;

                @supports not (overflow-wrap: anywhere) {
                    word-break: break-all;
                }

                .stage-winner-name {
                    font-size: 28px;
                    line-height: 36px;
                    color: constants.$white;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    display: -webkit-box;
                    text-align: center;
                    -webkit-box-orient: vertical;
                }
            }

            .stage-image-wrapper {
                width: 100%;
                height: 440px;
                border: 4px solid constants.$white;
                box-sizing: border-box;
                position: relative;
                filter: drop-shadow(2px 2px 4px constants.$drop-shadow-color);
                z-index: 2;
                transition: border-color 350ms;

                .stage-image {
                    z-index: -1;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    opacity: 99%;
                    transform-origin: center;
                    width: 100%;
                    height: 100%;
                    transition: filter 350ms;
                }
            }
        }
    }
}
</style>
