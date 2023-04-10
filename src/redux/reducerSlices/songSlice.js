import { createSlice } from '@reduxjs/toolkit';
import { playlists } from '../../assets';

const initialState = localStorage.getItem('song')
    ? { ...JSON.parse(localStorage.getItem('song')), playPause: false }
    : {
          playlist: playlists[0].list,
          currentSongIndex: 0,
          playPause: false,
          repeat: false,
          muted: false,
          volume: 0.5,
          currentTime: {
              value: 0,
              userAdjust: false,
          },
      };

export default createSlice({
    name: 'song',
    initialState: initialState,
    reducers: {
        changePlaylist: (state, action) => {
            console.log(action.payload);
            state.playlist = playlists[action.payload].list;
            console.log(state.playlist);
            state.currentSongIndex = 0;
        },
        playPause: (state, action) => {
            state.playPause = action.payload;
        },
        repeat: (state) => {
            state.repeat = !state.repeat;
        },
        muted: (state) => {
            state.muted = !state.muted;
        },
        nextSong: (state) => {
            state.currentSongIndex += 1;
            if (state.currentSongIndex === state.playlist.length) {
                state.currentSongIndex = 0;
            }
            state.playPause = true;
            state.currentTime = { ...state.currentTime, value: 0 };
        },
        prevSong: (state) => {
            state.currentSongIndex -= 1;
            if (state.currentSongIndex < 0) {
                state.currentSongIndex = state.playlist.length - 1;
            }
            state.playPause = true;
            state.currentTime = { ...state.currentTime, value: 0 };
        },
        changeSong: (state, action) => {
            state.currentSongIndex = action.payload;
            state.playPause = true;
        },
        adjustVolume: (state, action) => {
            state.volume = action.payload;
            if (state.volume > 1) state.volume = 1;
            if (state.volume < 0) state.volume = 0;
        },
        updateProgress: (state, action) => {
            state.currentTime = action.payload.value
                ? action.payload
                : { ...action.payload, value: 0 };
        },
    },
});
