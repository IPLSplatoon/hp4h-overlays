import { App } from 'vue';
import { addDots, isBlank } from '../../client-shared/helpers/stringHelper';
import { COLORS } from '../styles/colors';
import { formatDuration } from './timerHelper';

export function installCommonHelpers(app: App): void {
    if (!window.obsstudio) {
        document.getElementById('app')!.style.backgroundColor = '#333';
    }

    app.config.globalProperties.$helpers = {
        addDots,
        isBlank,
        formatDuration,
        colors: COLORS
    };
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $helpers: {
            addDots: typeof addDots,
            isBlank: typeof isBlank,
            formatDuration: typeof formatDuration,
            colors: typeof COLORS
        }
    }
}
