<template>
    <transition
        name="timer"
    >
        <div
            v-if="breakScreenStore.nextRoundStartTime.isVisible"
            class="timer"
        >
            <div class="timer-text">
                <template v-if="timer <= 0">
                    The next round will start soon!
                </template>
                <template v-else-if="timer === 1">
                    The next round starts in about <span class="minutes">one minute!</span>
                </template>
                <template v-else>
                    The next round starts in about <span class="minutes">{{ timer }} minutes...</span>
                </template>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { useNextStageTimer } from '../../../helpers/timerHelper';
import { useBreakScreenStore } from 'client-shared/store/breakScreenStore';

const breakScreenStore = useBreakScreenStore();
const timer = useNextStageTimer();
</script>

<style lang="scss">
@use '/src/graphics/styles/constants';
@use '/src/graphics/styles/fonts';

.timer {
    height: 40px;
    font-weight: 500;

    .timer-text {
        font-size: 42px;
        text-align: center;
        position: relative;
        font-feature-settings: 'tnum';
    }

    .minutes {
        color: constants.$accent-red;
    }
}

.timer-leave-active {
    transition: height 500ms ease 250ms, opacity 350ms linear;
}

.timer-enter-active {
    transition: height 500ms ease, opacity 350ms linear 250ms;
}

.timer-enter-from,
.timer-leave-to {
    height: 0;
    opacity: 0;
}
</style>
