<template>
    <div class="lower-third-active-round">
        <opacity-swap-transition>
            <fitted-content
                :key="`${teamA?.name}_${teamB?.name}`"
                :max-width="1200"
                align="center"
            >
                <span class="team-name">{{ $helpers.addDots(teamA?.name) }}</span>
                <span class="scores">{{ teamA?.score }} - {{ teamB?.score }}</span>
                <span class="team-name">{{ $helpers.addDots(teamB?.name) }}</span>
            </fitted-content>
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import { useActiveRoundStore } from 'client-shared/store/activeRoundStore';

export default defineComponent({
    name: 'OmnibarActiveRound',

    components: { FittedContent, OpacitySwapTransition },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const teamA = computed(() => activeRoundStore.activeRound.teamA);
        const teamB = computed(() => activeRoundStore.activeRound.teamB);

        return {
            teamA,
            teamB
        };
    }
});
</script>

<style lang="scss">
@use '../../../styles/fonts';
@use '../../../styles/constants';

.lower-third-active-round {
    .team-name {
        font-size: 40px;
        font-weight: 500;
    }

    .team-name-container {
        text-align: center;
    }

    .scores {
        margin: 0 16px;
        color: constants.$accent;
        font-size: 42px;
        font-weight: 600;
        font-feature-settings: 'tnum';
    }
}
</style>
