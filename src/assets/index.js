import myPlaylist from './playlist/my-list/index.js';
import pianoPlaylist from './playlist/piano/index.js';

export { default as themes } from './bkg-themes/index.js';
export { default as myPlaylist } from './playlist/my-list/index.js';
export { default as pianoPlaylist } from './playlist/piano/index.js';
export { default as startPageVid } from './startPage-vid.mp4';

export const playlists = [
    {
        name: 'my playlist',
        list: myPlaylist,
    },
    {
        name: 'Piano playlist',
        list: pianoPlaylist,
    },
];
