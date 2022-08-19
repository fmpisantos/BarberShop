const reducer = {
    reducers:
        {
            replace: (state, action) => {
                state.value = action.payload.value;
                state.idx = action.payload.idx;
            },
            closeModal: state => {
                state.modal = -1;
                state.value = [true, true, state.total !== 0, state.total !== 0 && state.barber !== -1, state.total !== 0 && state.barber !== -1 && state.dateSelected.hours?.length > 0 && state.dateSelected.minutes?.length > 0]
            },
            openModal: (state, action) => {
                state.modal = action.payload
            },
            addService: (state, action) => {
                for(let idx in state.servicosAtivos) 
                    state.servicosAtivos[idx] = false;
                state.servicosAtivos[action.payload.servico] = true;
                state.total += action.payload.total;
                state.value = [true, true, true, false];
                state.modal = -1;
            },
            removeService: (state, action) => {
                state.servicosAtivos[action.payload.servico] = false;
                state.total -= action.payload.total;
                state.value = [true, true, false, false];
            },
            selectBarber: (state, action) => {
                state.barber = action.payload;
                state.value = [true, true, true, true];
                state.modal = -1;
            },
            resetDate: (state) => {
                state.dateSelected = {
                    "string": "",
                    hours: "",
                    minutes: "",
                    day: "",
                    month: "",
                    year: "",
                    duration: ""
                }
            },
            selectDate: (state, action) => {
                state.dateSelected = action.payload;
            },
            reset: (state) => {
                state.idx = 1;
                state.value = [true, true, false, false];
                state.total = 0;
                state.servicosAtivos = [false, false];
                state.modal = -1;
                state.barber = -1;
                state.dateSelected = {
                    "string": "",
                    hours: "",
                    minutes: "",
                    day: "",
                    month: "",
                    year: "",
                    duration: ""
                }
            }
        }
}

export default reducer;