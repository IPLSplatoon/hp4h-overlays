<template>
    <div class="lower-third-music">
        <opacity-swap-transition>
            <fitted-content
                :key="nowPlaying"
                :max-width="1200"
                align="center"
            >
                {{ nowPlaying }}
            </fitted-content>
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { computed } from 'vue';
import { getSongNameAsString } from '../../../helpers/musicHelper';
import FittedContent from '../../../components/FittedContent.vue';
import { useMusicStore } from '../../../../client-shared/store/musicStore';

export default defineComponent({
    name: 'OmnibarMusic',

    components: { FittedContent, OpacitySwapTransition },

    setup() {
        const musicStore = useMusicStore();

        return {
            nowPlaying: computed(() => getSongNameAsString(musicStore.nowPlaying)),
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.lower-third-music {
    font-weight: 500;
}
</style>
