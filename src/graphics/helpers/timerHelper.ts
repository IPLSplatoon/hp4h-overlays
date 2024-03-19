import { DateTime, Duration } from 'luxon';
import { computed, onMounted, onUnmounted, Ref, ref, watch } from 'vue';
import { useBreakScreenStore } from 'client-shared/store/breakScreenStore';

export function useNextStageTimer(): Ref<number> {
    const breakScreenStore = useBreakScreenStore();
    const startTime = computed(() => DateTime.fromISO(breakScreenStore.nextRoundStartTime.startTime));
    const diff = ref<number>(0);

    function setDiff() {
        diff.value = Math.ceil(startTime.value.diffNow().as('minutes'));
    }

    watch(startTime, setDiff, { immediate: true });
    let nextStageDiffInterval: number;

    onMounted(() => {
        nextStageDiffInterval = window.setInterval(setDiff, 1000);
    });

    onUnmounted(() => {
        window.clearInterval(nextStageDiffInterval);
    });

    return diff;
}

export function formatDuration(seconds: number): string {
    return Duration.fromObject({ seconds }).toFormat('m:ss');
}
