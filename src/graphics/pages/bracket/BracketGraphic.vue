<template>
    <div class="bracket-title-wrapper">
        <div class="bracket-title-box">
            <opacity-swap-transition>
                <fitted-content
                    :key="bracketTitle"
                    :max-width="690"
                    align="center"
                >
                    {{ bracketTitle }}
                </fitted-content>
            </opacity-swap-transition>
        </div>
    </div>
    <div
        ref="wrapper"
        class="bracket-wrapper"
    />
</template>

<script setup lang="ts">
import { BracketRenderer, D3BracketAnimator } from '@tourneyview/renderer';
import { computed, onMounted, ref, watch } from 'vue';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';
import FittedContent from '../../components/FittedContent.vue';
import { useBracketStore } from 'client-shared/store/bracketStore';

const wrapper = ref<HTMLDivElement>();
const bracketDataStore = useBracketStore();
const bracketTitle = computed(() => {
    let result = bracketDataStore.bracketData?.name;

    const matchGroupName = bracketDataStore.bracketData?.matchGroups[0]?.name;
    if (matchGroupName !== result) {
        result += ` - ${matchGroupName}`;
    }

    if (bracketDataStore.bracketData?.roundNumber != null) {
        result += ` - Round ${bracketDataStore.bracketData?.roundNumber}`;
    }

    return result;
});
const renderer = new BracketRenderer({
    animator: new D3BracketAnimator(),
    swissOpts: {
        rowHeight: 70
    },
    roundRobinOpts: {
        maxScale: 1.75
    }
});

onMounted(async () => {
    wrapper.value!.appendChild(renderer.element);

    await document.fonts.load('400 32px Splatoon2');

    watch(() => bracketDataStore.bracketData, newValue => {
        if (newValue != null) {
            void renderer.setData(newValue);
        }
    }, { immediate: true });
});
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../styles/constants';
@use '../../styles/fonts';

$margin: 100px;
$top-margin: 150px;
$bottom-margin: 50px;

.bracket-title-wrapper {
    position: absolute;
    width: 100%;
    height: $top-margin;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .bracket-title-box {
        width: 700px;
        height: 50px;
        font-size: 40px;
        line-height: 55px;
        font-weight: 600;
        background-color: constants.$text-background;
        border-radius: 12px;
        border: 4px solid constants.$accent-salmon;
        padding: 8px 0;

        > * {
            margin: 0 auto;
        }
    }
}

.bracket-wrapper {
    line-height: 1.5em;
    position: absolute;
    top: $top-margin;
    left: $margin;
}

.bracket-wrapper :deep(> div) {
    width: 1920px - $margin * 2;
    height: 1080px - ($bottom-margin + $top-margin);
    overflow: visible;

    .round-robin-renderer {
        .round-robin-grid-item {
            transition: background-color 500ms;

            &.type-team-name {
                line-height: 1.2em;
                background-color: constants.$text-background;
                border-radius: 5px;
                padding: 2px 3px;
                overflow: hidden;

                &.type-team-name-top {
                    align-items: end;
                    justify-content: center;
                    -webkit-box-align: end;
                }

                &.type-team-name-left {
                    align-items: center;
                    justify-content: flex-end;
                }
            }

            &.type-match {
                border: 2px solid constants.$text-background;

                .score-layout {
                    margin-top: -4px;
                    font-weight: 600;
                    
                    .team-score {
                        min-width: 1.05em;
                        text-align: center;
                    }
                }

                &.left-team-winner {
                    background-color: #2B8D46;
                }

                &.top-team-winner {
                    background-color: #C7475F;
                }

                &.in-progress {
                    background-color: constants.$text-background;
                    color: constants.$text-color;
                }
            }

            &.type-blank-no-match {
                background-color: color.adjust(constants.$background-dark, $alpha: -0.25);
            }
        }
    }

    .elimination-renderer {
        .bracket-link {
            stroke: constants.$background-dark !important;
        }

        .elimination-renderer__bracket-title {
            background-color: constants.$accent-salmon;
            display: inline-block;
            padding: 2px 6px;
            border-radius: 4px;
        }

        .round-label {
            background-color: constants.$text-background;
            padding: 2px 6px;
            border-radius: 4px;
        }

        .match-cell__third-place-match-label {
            box-sizing: border-box;
            padding-top: 2px;
            background-color: constants.$accent-salmon;
            font-size: 14px;
            font-weight: 500;
        }

        .match-cell {
            color: constants.$text-color;
            background-color: constants.$text-background;
            border: 2px solid constants.$accent-salmon;

            .match-cell__score-wrapper {
                background-color: constants.$accent-salmon;
                line-height: 2em;
                height: 100%;
            }

            .match-cell__score {
                font-weight: 600;

                &.is-disqualified {
                    font-size: 1em;
                }
            }

            .match-cell__top-team-name, .match-cell__top-score {
                margin-top: 2px;
            }

            .match-cell__bottom-team-name, .match-cell__bottom-score {
                margin-bottom: 2px;
            }
        }

        .bracket-link {
            stroke: #fff;
            stroke-width: 2px;
        }
    }

    .swiss-renderer {
        width: 60%;
        justify-items: center;

        .match-row-wrapper {
            margin: 8px 0;
            width: 1000px;
            overflow: hidden;
            position: relative;
            display: flex;
            justify-content: center;
        }

        .match-row {
            color: constants.$text-color;
            background-color: constants.$accent-salmon;
            width: 1000px;
            height: 100%;
            position: absolute;
            border: 4px solid constants.$accent-salmon;
            box-sizing: border-box;
            border-radius: 12px;

            .match-row__team-name {
                font-size: 1.5em;
                line-height: 2em;
                padding: 0 8px;
                background-color: constants.$text-background;
                height: 100%;
                border-radius: 8px;
            }

            .match-row__scores {
                background-color: constants.$accent-salmon;
                border-radius: 5px;
                font-weight: 600;
                font-size: 1.3em;
                width: 120px;
                padding: 0 4px;
            }
        }
    }
}
</style>
