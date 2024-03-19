<template>
    <div
        class="score-counter"
    >
        <score-display
            :color="activeRoundStore.activeRound.teamA.color"
            :value="activeRoundStore.activeRound.teamA.score"
        />
        <score-display
            :color="activeRoundStore.activeRound.teamB.color"
            :value="activeRoundStore.activeRound.teamB.score"
        />
    </div>
</template>

<script setup lang="ts">
import { useActiveRoundStore } from 'client-shared/store/activeRoundStore';
import ScoreDisplay from '../../../components/ScoreDisplay.vue';

const activeRoundStore = useActiveRoundStore();
</script>

<style scoped lang="scss">
@use '../../../styles/constants';

.score-counter {
    width: 200px;
    height: 80px;
    background-color: constants.$text-background;
    border: 4px solid constants.$text-color;
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 8px;
    box-sizing: border-box;
}
</style>
