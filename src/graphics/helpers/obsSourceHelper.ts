import gsap from 'gsap';
import { ObsEvent } from '../types/obs';

export function bindEntranceToTimeline(timeline: gsap.core.Timeline): void {
    if (window.obsstudio !== undefined) {
        window.addEventListener('obsSourceActiveChanged', (e: ObsEvent) => {
            if (e.detail.active) {
                timeline.restart(true);
            } else {
                timeline.pause(0);
            }
        });

        window.addEventListener('obsSourceVisibleChanged', (e: ObsEvent) => {
            if (e.detail.visible) {
                timeline.restart(false);
            }
        });
    }
    // Not in OBS Source
    else {
        timeline.delay(1).restart(true);
        document.body.ondblclick = () => {
            timeline.delay(1).restart(true);
        };
    }
}

export function bindEntranceToTimelineGenerator(generator: () => gsap.core.Timeline): void {
    if (window.obsstudio !== undefined) {
        window.addEventListener('obsSourceActiveChanged', (e: ObsEvent) => {
            const timeline = generator();
            if (e.detail.active) {
                timeline.restart(true);
            } else {
                timeline.pause(0);
                timeline.kill();
            }
        });

        window.addEventListener('obsSourceVisibleChanged', (e: ObsEvent) => {
            if (e.detail.visible) {
                generator().restart(false);
            }
        });
    }
    // Not in OBS Source
    else {
        generator().delay(1).restart(true);
        document.body.ondblclick = () => {
            generator().delay(1).restart(true);
        };
    }
}
