const reducer = {
    reducers:
        {
            clearUser: state => {
                state.id = null;
                state.name = "";
                state.phone = "";
                state.validNumber = true;
                state.logged = false;
            },
            setUser:  (state, action) => {
                let user = action.payload;
                state[user.field] = user.val;
            }
        }
}

export default reducer;