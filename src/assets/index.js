import myPlaylist from './playlist/my-list/index.js';
import feelPlaylist from './playlist/feel-every-lyrics';

export { default as themes } from './bkg-themes/index.js';
export { default as startPageVid } from './startPage-vid.mp4';

export const playlists = [
    {
        name: "Let's chill",
        list: myPlaylist,
    },
    {
        name: 'Feel every lyrics',
        list: feelPlaylist,
    },
];
