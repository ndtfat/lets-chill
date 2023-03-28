import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../assets';

export default createSlice({
    name: 'theme',
    initialState: { themeSRC: themes[1].themeSRC },
    reducers: {
        changeTheme: (state, action) => {
            state.themeSRC = themes[action.payload].themeSRC;
        },
    },
});
