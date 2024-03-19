<template>
    <div class="lower-third-predictions">
        <div class="first-outcome">
            <fitted-content
                :max-width="550"
                class="team-name"
                align="right"
            >
                {{ addDots(firstOutcome?.title) }}
            </fitted-content>
            <div class="subtext">
                <span class="total-points">{{ tweenedFirstOutcomePointsUsed }}p</span> / <span class="percentage-text">{{ padNumber(tweenedFirstOutcomePercentage, 2) }}%</span>
            </div>
            <div
                class="percentage-bar"
                :style="{ width: `${firstOutcomePercentage}%` }"
            />
        </div>
        <div class="second-outcome">
            <fitted-content
                :max-width="550"
                class="team-name"
            >
                {{ addDots(secondOutcome?.title) }}
            </fitted-content>
            <div class="subtext">
                <span class="percentage-text">{{ padNumber(tweenedSecondOutcomePercentage, 2) }}%</span> / <span class="total-points">{{ tweenedSecondOutcomePointsUsed }}p</span>
            </div>
            <div
                class="percentage-bar"
                :style="{ width: `${secondOutcomePercentage}%` }"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import { addDots } from 'client-shared/helpers/stringHelper';
import { useTweenedNumber } from '../../../helpers/useTweenedNumber';
import { usePredictionDataStore } from 'client-shared/store/predictionDataStore';
import { padNumber } from '@iplsplatoon/vue-components';

export default defineComponent({
    name: 'OmnibarPredictions',

    components: { FittedContent },

    setup() {
        const predictionStore = usePredictionDataStore();
        const firstOutcome = computed(() => predictionStore.predictionStore.currentPrediction?.outcomes[0]);
        const secondOutcome = computed(() => predictionStore.predictionStore.currentPrediction?.outcomes[1]);
        const totalPointsUsed = computed(() => (firstOutcome.value?.pointsUsed ?? 0) + (secondOutcome.value?.pointsUsed ?? 0));

        function calculatePercentage(pointsUsed?: number): number {
            if (pointsUsed === 0 || !pointsUsed) {
                return 0;
            }
            return Math.round((pointsUsed / totalPointsUsed.value) * 100);
        }

        const firstOutcomePercentage = computed(() => calculatePercentage(firstOutcome.value?.pointsUsed));
        const secondOutcomePercentage = computed(() => calculatePercentage(secondOutcome.value?.pointsUsed));
        const tweenedFirstOutcomePercentage = useTweenedNumber(firstOutcomePercentage);
        const tweenedSecondOutcomePercentage = useTweenedNumber(secondOutcomePercentage);
        const tweenedFirstOutcomePointsUsed = useTweenedNumber(computed(() => firstOutcome.value?.pointsUsed ?? 0));
        const tweenedSecondOutcomePointsUsed = useTweenedNumber(computed(() => secondOutcome.value?.pointsUsed ?? 0));

        return {
            addDots,
            firstOutcome,
            secondOutcome,
            firstOutcomePercentage,
            secondOutcomePercentage,
            tweenedFirstOutcomePercentage,
            tweenedSecondOutcomePercentage,
            tweenedFirstOutcomePointsUsed,
            tweenedSecondOutcomePointsUsed,
            padNumber,
        };
    }
});
</script>

<style lang="scss">
@use '../../../styles/constants';
@use '../../../styles/fonts';

.lower-third-predictions {
    display: flex;
    width: 100%;

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;

        &.first-outcome {
            margin-right: 32px;
            align-items: flex-end;

            .percentage-text {
                text-align: right;
            }

            .percentage-bar {
                right: 0;
            }
        }

        &.second-outcome {
            text-align: left;

            .percentage-bar {
                left: 0;
            }
        }
    }

    .team-name {
        font-size: 40px;
        line-height: 50px;
        font-weight: 500;
    }

    .subtext {
        font-size: 28px;
        line-height: 28px;
        z-index: 2;
        font-feature-settings: 'tnum';
    }

    .percentage-text {
        display: inline-block;
        color: constants.$accent-red;
    }

    .percentage-bar {
        height: 4px;
        margin-top: 4px;
        background-color: constants.$accent-red;
        border-radius: 8px;
        transition: width 250ms ease;
    }
}
</style>
