import { configureStore } from '@reduxjs/toolkit';
import songSlice from './reducerSlices/songSlice';
import themeSlice from './reducerSlices/themeSlice';

const store = configureStore({
    reducer: {
        song: songSlice.reducer,
        theme: themeSlice.reducer,
    },
});

export default store;
