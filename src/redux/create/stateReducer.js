const reducer = {
    reducers:
      {
        nextState: (state,action) => {
            if(state.total === 0)
              state.value = [true,true,false,false]
            else 
              state.value[action.payload] = true;
        },
        replace: (state, action) => {
            state.value = action.payload.value;
            state.idx = action.payload.idx;
        },
        closeModal: state =>{
            state.modal = -1;
        },
        openModal: (state,action) =>{
          state.modal = action.payload
        },
        addService: (state,action) =>{
          state.servicosAtivos[action.payload.servico] = true;
          state.total += action.payload.total;
        },
        removeService: (state,action) =>{
          state.servicosAtivos[action.payload.servico] = false;
          state.total -= action.payload.total;
        },
        selectBarber: (state,action) =>{
          state.barber = action.payload;
          state.value = [true,true,true,true];
          state.modal = -1;
        },
      }
  }
  
  export default reducer;