<template>
    <div class="casters-wrapper">
        <div
            class="casters-layout"
            :class="`caster-count_${Object.keys(casterStore.casters).length}`"
            :style="{ width: `${casterSize.wrapperWidth}px` }"
        >
            <large-caster-display
                v-for="(caster, id) in casterStore.casters"
                :key="`caster_${id}`"
                :caster="caster"
                class="caster-display"
                :width="casterSize.width"
                :aspect-ratio="casterSize.aspectRatio"
            />
        </div>
    </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { computed, defineComponent } from 'vue';
import { useCasterStore } from 'client-shared/store/casterStore';
import LargeCasterDisplay from './components/LargeCasterDisplay.vue';
import { bindEntranceToTimelineGenerator } from '../../helpers/obsSourceHelper';

export default defineComponent({
    name: 'Casters',

    components: { LargeCasterDisplay },

    setup() {
        const casterStore = useCasterStore();

        bindEntranceToTimelineGenerator(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                '.caster-display',
                { y: -875 },
                { y: 0, stagger: -0.25, duration: 0.75, ease: 'power2.out', delay: 0.5 });

            return tl;
        });

        return {
            casterStore,
            casterSize: computed(() => {
                switch (Object.keys(casterStore.casters).length) {
                    case 1:
                        return { width: 1000, aspectRatio: 9 / 16, wrapperWidth: 1200 };
                    case 2:
                        return { width: 700, aspectRatio: 9 / 12, wrapperWidth: 1500 };
                    default:
                        return { width: 550, aspectRatio: 9 / 10, wrapperWidth: 1800 };
                }
            })
        };
    }
});
</script>

<style lang="scss" scoped>
.casters-wrapper {
    position: absolute;
    top: 60px;
    width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.casters-layout {
    height: 825px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &.caster-count_1 {
        justify-content: center;
    }

    > * {
        flex-basis: 33%;
    }
}
</style>
