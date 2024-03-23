<template>
    <transition
        @enter="scoreboardEnter"
        @leave="scoreboardLeave"
        @before-enter="beforeScoreboardEnter"
    >
        <div
            v-if="scoreboardStore.scoreboardData.isVisible"
            class="scoreboard-wrapper"
        >
            <div class="scoreboard-teams">
                <div class="scoreboard-team-layout">
                    <div class="team-display team-alpha">
                        <fitted-content
                            :max-width="300"
                            class="team-name"
                            align="right"
                        >
                            <opacity-swap-transition>
                                <div
                                    :key="teamAName"
                                    class="team-name-text"
                                >
                                    {{ teamAName }}
                                </div>
                            </opacity-swap-transition>
                        </fitted-content>
                        <score-display
                            :color="teamA?.color"
                            :value="teamA?.score"
                        />
                    </div>
                    <div class="team-display team-bravo">
                        <fitted-content
                            :max-width="300"
                            class="team-name"
                            align="right"
                        >
                            <opacity-swap-transition>
                                <div
                                    :key="teamBName"
                                    class="team-name-text"
                                >
                                    {{ teamBName }}
                                </div>
                            </opacity-swap-transition>
                        </fitted-content>
                        <score-display
                            :color="teamB?.color"
                            :value="teamB?.score"
                        />
                    </div>
                </div>
            </div>
            <div class="scoreboard-extra">
                <img
                    class="tournament-logo"
                    src="../../../../assets/img/iconic-mark.png"
                >
                <div class="flavor-text-wrapper">
                    <opacity-swap-transition>
                        <fitted-content
                            :key="activeRoundStore.activeRound.match.name"
                            :max-width="285"
                            class="flavor-text"
                            align="center"
                        >
                            {{ activeRoundStore.activeRound.match.name }}
                        </fitted-content>
                    </opacity-swap-transition>
                    <donation-total :max-width="290" direction="down" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { addDots } from 'client-shared/helpers/stringHelper';
import gsap from 'gsap';
import { useActiveRoundStore } from 'client-shared/store/activeRoundStore';
import { useScoreboardStore } from 'client-shared/store/scoreboardStore';
import { getContrastingTextColor } from '@iplsplatoon/vue-components';
import ScoreDisplay from '../../../components/ScoreDisplay.vue';
import DonationTotal from '../../../components/DonationTotal.vue';

export default defineComponent({
    name: 'Scoreboard',

    components: { DonationTotal, ScoreDisplay, OpacitySwapTransition, FittedContent },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const teamA = computed(() => activeRoundStore.activeRound.teamA);
        const teamB = computed(() => activeRoundStore.activeRound.teamB);

        const scoreboardStore = useScoreboardStore();

        return {
            teamA,
            teamB,
            teamAName: computed(() => addDots(teamA.value.name)),
            teamBName: computed(() => addDots(teamB.value.name)),
            scoreboardStore,
            activeRoundStore,
            scoreboardEnter: (elem: HTMLElement, done: gsap.Callback) => {
                const tl = gsap.timeline({ onComplete: done });
                tl.to(elem.querySelectorAll('.scoreboard-teams'), {
                    y: 0,
                    duration: 0.5,
                    rotate: 0,
                    ease: 'power3.out'
                });
                tl.to(elem.querySelectorAll('.scoreboard-extra, .scoreboard-donation-total'), { opacity: 1, duration: 0.35, stagger: 0.1 });
            },
            beforeScoreboardEnter: (elem: HTMLElement) => {
                gsap.set(elem.querySelectorAll('.scoreboard-teams'), { y: -180, x: 0, rotate: gsap.utils.random(-5, 5) });
                gsap.set(elem.querySelectorAll('.scoreboard-extra, .scoreboard-donation-total'), { opacity: 0 });
            },
            scoreboardLeave: (elem: HTMLElement, done: gsap.Callback) => {
                const tl = gsap.timeline({ onComplete: done });
                tl.to(elem.querySelectorAll('.scoreboard-extra, .scoreboard-donation-total'), { opacity: 0, duration: 0.35, stagger: -0.1 });
                tl.to(elem.querySelectorAll('.scoreboard-teams'), {
                    x: -400,
                    duration: 0.5,
                    rotate: gsap.utils.random(-5, 5),
                    ease: 'power3.in'
                });
            },
            getContrastingTextColor
        };
    }
});
</script>

<style lang="scss">
@use 'sass:color';
@use '../../../styles/constants';
@use '../../../styles/fonts';

.scoreboard-wrapper {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 390px;
    height: 170px;

    > .scoreboard-teams {
        position: relative;
        max-width: 100%;
        height: 120px;
        margin: 0;
        font-weight: 500;
        background-image: url('../../../../assets/img/scoreboard-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        border: 3px solid constants.$accent-salmon;
        border-radius: 12px;
        padding: 4px;
        box-sizing: border-box;

        > .scoreboard-team-layout {
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            gap: 6px;
            height: 100%;
            position: relative;
            z-index: 2;

            .team-name-text {
                font-size: 30px;
                padding: 0 3px;
            }

            .team-display {
                display: grid;
                grid-template-columns: 1fr 64px;
                column-gap: 8px;
                height: 100%;
                border-radius: 8px;

                > .team-name {
                    align-self: center;
                    justify-self: end;
                }

                .team-score {
                    font-size: 38px;
                }

                &.team-alpha {
                    > .team-name {
                        margin-top: 4px;
                    }
                }

                &.team-bravo {
                    > .team-name {
                        margin-bottom: 4px;
                    }
                }
            }
        }
    }

    //> .scoreboard-donation-total {
    //    background-color: constants.$accent-red;
    //    color: constants.$accent-red-text;
    //    border-radius: 4px;
    //    margin-top: 8px;
    //    width: 180px;
    //    margin-left: auto;
    //    margin-right: 55px;
    //    padding: 0 10px;
    //}

    > .scoreboard-extra {
        margin-top: 8px;
        height: 70px;
        display: flex;
        align-items: center;
        z-index: 2;
        position: relative;
        background-color: constants.$accent-red;
        color: constants.$accent-red-text;
        border-radius: 4px;

        .donation-total-wrapper {
            margin-top: -4px;
        }

        > .tournament-logo {
            width: 85px;
            margin-left: 4px;
            transform: rotate(-5deg);
        }

        > .flavor-text-wrapper {
            margin-left: 10px;
            width: 100%;

            > .flavor-text {
                font-size: 24px;
                line-height: 36px;
                //margin: 0 auto;
            }
        }
    }
}
</style>
