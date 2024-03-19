<template>
    <div class="intermission-wrapper">
        <div class="intermission-main-content">
            <img
                class="tournament-logo"
                src="../../../assets/img/full-logo.png"
            >
            <div class="intermission-slides">
                <intermission-main />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IntermissionMain from './components/IntermissionMain.vue';

export default defineComponent({
    name: 'Intermission',

    components: { IntermissionMain }
});
</script>

<style lang="scss">
@import '../../styles/constants';

.intermission-wrapper {
    width: 100%;
    height: 95%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intermission-main-content {
    border-radius: $default-border-radius;
    z-index: 100;
    padding: 15px 25px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .tournament-logo {
        width: 1100px;
    }

    > .intermission-slides {
        width: 100%;
        position: relative;
        margin-top: 30px;
    }
}
</style>
