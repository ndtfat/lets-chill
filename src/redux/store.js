import { configureStore } from '@reduxjs/toolkit';
import playlistSlice from './reducerSlices/playlistSlice';
import songSlice from './reducerSlices/songSlice';
import themeSlice from './reducerSlices/themeSlice';

const store = configureStore({
    reducer: {
        song: songSlice.reducer,
        theme: themeSlice.reducer,
        playlist: playlistSlice.reducer,
    },
});

export default store;
