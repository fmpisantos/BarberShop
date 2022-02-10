const reducer = {
    reducers:
      {
        nextState: state => {
            state.value[++state.idx] = true;
        },
        replace: (state, action) => {
            state.value = action.payload.value;
            state.idx = action.payload.idx;
        }
      }
  }
  
  export default reducer;