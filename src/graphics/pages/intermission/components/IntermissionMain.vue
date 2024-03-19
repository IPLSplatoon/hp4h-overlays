<template>
    <div class="intermission-main">
        <opacity-swap-transition>
            <fitted-content
                :key="mainFlavorText"
                :max-width="1200"
                class="flavor-text"
                align="center"
            >
                {{ mainFlavorText }}
            </fitted-content>
        </opacity-swap-transition>
        <intermission-main-timer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { computed } from 'vue';
import IntermissionMainTimer from './IntermissionMainTimer.vue';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { useBreakScreenStore } from 'client-shared/store/breakScreenStore';

library.add(faMusic, faClock);

export default defineComponent({
    name: 'IntermissionMain',

    components: { OpacitySwapTransition, IntermissionMainTimer, FittedContent },

    setup() {
        const breakScreenStore = useBreakScreenStore();

        return {
            mainFlavorText: computed(() => breakScreenStore.mainFlavorText)
        };
    }
});
</script>

<style lang="scss">
@use '../../../styles/constants';

.intermission-main {
    background-color: constants.$text-background;
    padding: 16px 16px 24px;
    border-radius: 16px;
    border: 4px solid constants.$accent-salmon;
    width: 1200px;

    .flavor-text {
        font-size: 72px;
        line-height: 80px;
        font-weight: 600;
    }
}
</style>
