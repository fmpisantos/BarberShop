import { createSlice } from '@reduxjs/toolkit';
import stateReducer from './stateReducer';

export const slice = createSlice({
  name: 'control',
  initialState: {
    idx: 1,
    value: [true,true,false,false],
    total: 0,
    servicosAtivos: [false,false],
    modal: -1,
    barber: -1,
    dateSelected: {
      "string": "",
      hours: "",
      minutes: "",
      day: "",
      month: "",
      year: "",
      duration: ""
    }
  },
  ...stateReducer
});

export const { replace, removeService, addService, openModal, closeModal, selectBarber, selectDate, resetDate, reset } = slice.actions;
export const state = state => state.create

export default slice.reducer;