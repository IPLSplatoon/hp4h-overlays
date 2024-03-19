<template>
    <div class="large-caster-wrapper">
        <div
            class="large-caster-display"
            :style="{ width: `${props.width}px` }"
        >
            <div
                class="caster-visual"
                :style="{ height: `${visualHeight}px` }"
            >
                <image-loader
                    v-if="$helpers.isBlank(caster.videoUrl)"
                    class="caster-image"
                    :src="caster.imageUrl"
                />
                <video-loader
                    v-else
                    :src="caster.videoUrl"
                    class="caster-video"
                />
            </div>
            <div class="details">
                <fitted-content
                    :max-width="365"
                    align="left"
                    class="name-wrapper"
                >
                    <span>{{ props.caster.name }}</span>
                    <badge
                        class="pronouns"
                        :color="$helpers.colors.accentRed"
                    >
                        {{ props.caster.pronouns }}
                    </badge>
                </fitted-content>
                <fitted-content
                    :max-width="365"
                    align="left"
                    class="twitter-wrapper"
                >
                    {{ props.caster.twitter }}
                </fitted-content>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Caster } from 'schemas';
import FittedContent from '../../../components/FittedContent.vue';
import Badge from '../../../components/Badge.vue';
import ImageLoader from '../../../components/ImageLoader.vue';
import VideoLoader from '../../../components/VideoLoader.vue';
import { computed } from 'vue';

const props = defineProps<{
    caster: Caster
    width: number
    aspectRatio: number
}>();
const visualHeight = computed(() => props.width * props.aspectRatio);
</script>

<style lang="scss" scoped>
@use '../../../styles/constants';
@use '../../../styles/fonts';

.large-caster-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.large-caster-display {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .caster-visual {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: constants.$background-dark;
        border-radius: 12px;
        overflow: hidden;
        border: 4px solid constants.$accent-salmon;
        position: relative;

        .caster-image {
            width: 175px;
            height: 175px;
            border-radius: 9999px;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .caster-video {
            height: 100%;
            aspect-ratio: 16 / 9;
            position: absolute;
        }
    }

    > .details {
        padding: 8px 16px;
        color: constants.$text-color;
        border-radius: 12px;
        background-repeat: no-repeat;
        background-color: constants.$text-background;
        box-sizing: border-box;
        width: max-content;
        border: 4px solid constants.$accent-salmon;
        margin-top: -24px;
        margin-left: -12px;
        z-index: 2;

        .name-wrapper {
            font-size: 44px;
            font-weight: 600;
        }

        .pronouns {
            font-size: 20px;
            line-height: 28px;
            transform: translateY(-5px);
        }

        .twitter-wrapper {
            margin-top: -4px;
            font-size: 26px;
            opacity: 85%;
        }
    }
}
</style>
