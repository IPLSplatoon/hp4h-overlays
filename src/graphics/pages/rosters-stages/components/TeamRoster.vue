<template>
    <div
        class="team-roster"
        :class="`team-${team}`"
    >
        <div class="team-roster-content">
            <div class="team-name-wrapper">
                <fitted-content
                    :max-width="450"
                    class="team-name"
                    align="center"
                >
                    {{ $helpers.addDots(teamData?.name) }}
                </fitted-content>
            </div>
            <div
                class="players"
                :class="`player-count_${players.length}`"
            >
                <img
                    src="../../../../assets/img/pulse.png"
                    class="separator"
                >
                <fitted-content
                    v-for="player in players"
                    :key="player.name"
                    class="team-player"
                    :align="team === 'A' ? 'right' : 'left'"
                >
                    {{ $helpers.addDots(player.name) }}<badge
                        v-if="!$helpers.isBlank(player.pronouns)"
                        :color="$helpers.colors.accentRed"
                        class="pronouns"
                    >
                        {{ player.pronouns }}
                    </badge>
                </fitted-content>
                <div style="height: 20px" />
            </div>
            <img
                class="plaster plaster-top"
                src="../../../../assets/img/plaster.png"
            >
            <img
                class="plaster plaster-bottom"
                src="../../../../assets/img/plaster.png"
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, PropType } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { useActiveRoundStore } from 'client-shared/store/activeRoundStore';
import Badge from '../../../components/Badge.vue';
import { isBlank } from '@iplsplatoon/vue-components';

export default defineComponent({
    name: 'TeamRoster',

    components: { Badge, FittedContent },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        },
        compact: {
            type: Boolean,
            required: true
        }
    },

    setup(props) {
        const activeRoundStore = useActiveRoundStore();
        const teamData = computed(() => props.team === 'A'
            ? activeRoundStore.activeRound.teamA
            : activeRoundStore.activeRound.teamB);

        return {
            teamData,
            activeRoundStore,
            players: computed(() => teamData.value?.players.slice(0, 8)),
            imageShown: computed(() => teamData.value?.showLogo && !isBlank(teamData.value?.logoUrl))
        };
    }
});
</script>

<style lang="scss">
@use 'sass:color';
@use '../../../styles/constants';

.compact .team-roster {
    .players {
        height: 0;
    }
}

.team-roster {
    width: 100%;
    display: flex;
    flex-direction: column;

    &.team-A {
        align-items: flex-end;

        .plaster-bottom {
            left: 25px;
        }

        .plaster-top {
            right: -45px;
            transform: rotate(2deg);
        }
    }

    &.team-B {
        align-items: flex-start;

        .plaster-bottom {
            right: 25px;
        }

        .plaster-top {
            left: -45px;
            transform: rotate(-3deg);
        }
    }

    .team-roster-content {
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: constants.$text-background;
        padding: 8px;
        border: 4px solid constants.$accent-salmon;
        border-radius: 16px;
        position: relative;

        .plaster {
            position: absolute;
            z-index: 1;
            width: 200px;

            &.plaster-bottom {
                bottom: -65px;
            }

            &.plaster-top {
                top: -70px;
            }
        }

        .team-name-wrapper {
            display: flex;
            height: 75px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: relative;
        }

        .team-name {
            font-size: 50px;
            font-weight: 500;
        }

        .players {
            width: 460px;
            padding: 0 24px;
            position: relative;
            z-index: 2;
            overflow: hidden;

            > .separator {
                width: 100%;
            }
        }

        .team-player {
            font-size: 35px;
            line-height: 56px;
            height: 40px;
            padding: 8px 0;

            &:first-of-type {
                padding-top: 0;
            }

            .pronouns {
                font-size: 18px;
                line-height: 28px;
                transform: translateY(-4px);
            }
        }
    }
}
</style>
