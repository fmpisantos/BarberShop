import { createSlice } from '@reduxjs/toolkit';
import stateReducer from './firebaseReducer';

export const slice = createSlice({
    name: 'firebase',
    initialState: {
            id: null,
            name: "",
            phone: "",
            validNumber: true,
            logged: false
    },
    ...stateReducer
});

export const { clearUser, setUser, login } = slice.actions;

export const state = state => state.firebase

export default slice.reducer;