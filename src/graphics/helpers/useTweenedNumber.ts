import { ComputedRef, ref, Ref, watch } from 'vue';
import gsap from 'gsap';

export function useTweenedNumber(number: ComputedRef<number> | Ref<number>): Ref<number> {
    const tweenedNumber = ref(number.value);

    watch(() => number.value, newValue => {
        gsap.to(tweenedNumber, { duration: 0.5, value: newValue, roundProps: { value: 1 }, ease: 'power2.inOut' });
    });

    return tweenedNumber;
}
