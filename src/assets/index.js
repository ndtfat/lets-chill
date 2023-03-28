import myPlaylist from './playlist/my-list/index.js';
import pianoPlaylist from './playlist/piano/index.js';

export { default as themes } from './bkg-themes/index.js';
export { default as vietnamPlaylist } from './playlist/my-list/index.js';
export { default as pianoPlaylist } from './playlist/piano/index.js';

export const playlists = [
    {
        name: 'Vietnam playlist',
        list: myPlaylist,
    },
    {
        name: 'Piano playlist',
        list: pianoPlaylist,
    },
];
