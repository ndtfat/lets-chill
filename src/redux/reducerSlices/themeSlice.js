import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../assets';

export default createSlice({
    name: 'theme',
    initialState: {
        themeSRC: themes[0].themeSRC,
        titleImg: themes[0].imgTitle,
    },
    reducers: {
        changeTheme: (state, action) => {
            state.themeSRC = themes[action.payload].themeSRC;
        },
    },
});
