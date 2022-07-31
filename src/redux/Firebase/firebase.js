import { createSlice } from '@reduxjs/toolkit';
import stateReducer from './firebaseReducer';

export const slice = createSlice({
    name: 'firebase',
    initialState: {
        user: {
            id: null,
            name: null,
            phone: null
        }
    },
    ...stateReducer
});

export const { clearUser, setUser } = slice.actions;

export const state = state => state.firebase

export const login = () => {

};

export const logout = dispatch => {
    alert("Logout");
}

export default slice.reducer;