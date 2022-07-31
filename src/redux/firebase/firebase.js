import { createSlice } from '@reduxjs/toolkit';
import stateReducer from './firebaseReducer';

export const slice = createSlice({
    name: 'firebase',
    initialState: {
        user: {
            id: null,
            name: "",
            phone: "",
            validNumber: true
        }
    },
    ...stateReducer
});

export const { clearUser, setUser, login } = slice.actions;

export const state = state => state.firebase

export default slice.reducer;