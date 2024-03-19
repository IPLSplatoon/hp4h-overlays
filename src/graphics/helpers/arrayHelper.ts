import random from 'random';

export function getNextIndex(array: unknown[], currentIndex: number): number {
    return currentIndex + 1 === array.length ? 0 : currentIndex + 1;
}

export function shuffleSeeded<T>(array: T[], seed: string): T[] {
    const rng = random.clone(seed);
    const length = array.length;
    const lastIndex = length - 1;
    let index = -1; 
    
    while (++index < length) {
        const rand = rng.int(index, lastIndex), value = array[rand];

        array[rand] = array[index];
        array[index] = value;
    }

    return array;
}
