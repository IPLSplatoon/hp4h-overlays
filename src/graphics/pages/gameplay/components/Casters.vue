<template>
    <transition
        @enter="castersEnter"
        @leave="castersLeave"
        @before-enter="beforeCastersEnter"
    >
        <div
            v-if="castersVisible"
            class="casters-wrapper"
        >
            <div class="casters-header">
                Commentators
            </div>
            <div class="casters-content">
                <div
                    v-for="(caster, id) in casterStore.casters"
                    :key="id"
                    class="caster-item"
                >
                    <fitted-content :max-width="300">
                        <span class="caster-name">
                            {{ caster.name }}
                        </span>
                        <badge
                            class="caster-pronouns"
                            :color="$helpers.colors.accentRed"
                        >
                            {{ caster.pronouns }}
                        </badge>
                    </fitted-content>
                    <fitted-content
                        :max-width="300"
                        class="caster-twitter"
                    >
                        {{ caster.twitter }}
                    </fitted-content>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import Badge from '../../../components/Badge.vue';
import { ref } from 'vue';
import gsap from 'gsap';
import { useCasterStore } from 'client-shared/store/casterStore';
import { DASHBOARD_BUNDLE_NAME } from 'client-shared/constants';

export default defineComponent({
    name: 'Casters',

    components: { FittedContent, Badge },

    setup() {
        const casterStore = useCasterStore();
        const castersVisible = ref(false);

        nodecg.listenFor('mainShowCasters', DASHBOARD_BUNDLE_NAME, () => {
            if (!castersVisible.value) {
                castersVisible.value = true;

                setTimeout(() => {
                    castersVisible.value = false;
                }, 15 * 1000);
            }
        });

        return {
            casterStore,
            castersVisible,

            castersEnter: (elem: HTMLElement, done: gsap.Callback) => {
                const tl = gsap.timeline({ onComplete: done });
                tl.to(elem.querySelector('.casters-content'), { y: '0%', rotate: 0, ease: 'power3.out', duration: 0.5 });
                tl.to(elem.querySelector('.casters-header'), { opacity: 1, duration: 0.35 }, '-=0.2');
            },
            beforeCastersEnter: (elem: HTMLElement) => {
                gsap.set(elem.querySelector('.casters-content'), { y: '133%', x: '0%', rotate: gsap.utils.random(-5, 5) });
                gsap.set(elem.querySelector('.casters-header'), { opacity: 0 });
            },
            castersLeave: (elem: HTMLElement, done: gsap.Callback) => {
                const tl = gsap.timeline({ onComplete: done });
                tl.to(elem.querySelector('.casters-content'), { rotate: gsap.utils.random(-5, 5), x: '125%', ease: 'power3.in', duration: 0.5 });
                tl.to(elem.querySelector('.casters-header'), { opacity: 0, duration: 0.35 });
            }
        };
    }
});
</script>

<style lang="scss">
@use '../../../styles/constants';
@use '../../../styles/fonts';

.casters-wrapper {
    position: absolute;
    bottom: 30px;
    right: 60px;
    width: 325px;

    > .casters-header {
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        width: 100%;
        height: 38px;
        background-color: constants.$accent-red;
        color: constants.$accent-red-text;
        margin-bottom: 8px;
        border-radius: constants.$default-border-radius;
    }

    > .casters-content {
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 3px solid constants.$accent-salmon;
        border-radius: 12px;
        background-color: constants.$text-background;
        overflow: hidden;
        padding: 4px 0;

        > .caster-item {
            padding: 0 10px;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('../../../../assets/img/caster-bg.png') no-repeat;
            }

            &:nth-child(1):before {
                background-position: -300px -20px;
            }

            &:nth-child(2):before {
                background-position: -100px -20px;
            }

            &:nth-child(3):before {
                background-position: -320px -20px;
            }

            .caster-name {
                font-size: 30px;
                font-weight: 600;
            }

            .caster-pronouns {
                font-size: 16px;
                line-height: 28px;
                transform: translateY(-5px);
            }

            .caster-twitter {
                font-size: 22px;
            }
        }
    }
}
</style>
