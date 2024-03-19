<template>
    <opacity-swap-transition>
        <fitted-content
            :key="`${teamA?.name}_${teamB?.name}`"
            :max-width="1200"
            align="center"
        >
            <div class="next-round-content-wrapper">
                <span class="team-name">{{ $helpers.addDots(teamA?.name) }}</span>
                <span class="versus">vs</span>
                <span class="team-name">{{ $helpers.addDots(teamB?.name) }}</span>
            </div>
        </fitted-content>
    </opacity-swap-transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { useNextRoundStore } from '../../../../client-shared/store/nextRoundStore';

export default defineComponent({
    name: 'OmnibarNextRound',

    components: { FittedContent, OpacitySwapTransition },

    setup() {
        const nextRoundStore = useNextRoundStore();

        return {
            teamA: computed(() => nextRoundStore.nextRound.teamA),
            teamB: computed(() => nextRoundStore.nextRound.teamB)
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.next-round-content-wrapper {
    //display: flex;
    //flex-direction: row;
    //align-items: center;

    .next-up {
        color: $accent;
        margin-right: 10px;
    }

    .team-name {
        font-size: 40px;
        font-weight: 500;
    }

    .versus {
        margin: 0 9px;
        color: $accent;
        font-weight: 700;
    }

    .team-name-container {
        text-align: center;
    }
}
</style>
