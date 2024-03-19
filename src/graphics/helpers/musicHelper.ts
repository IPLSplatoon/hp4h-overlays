import { isBlank } from '@iplsplatoon/vue-components';
import { NowPlaying } from 'schemas';

export function getSongNameAsString(nowPlaying?: NowPlaying | null): string {
    return [nowPlaying?.artist, nowPlaying?.song]
        .filter(value => !isBlank(value))
        .join(' - ');
}
