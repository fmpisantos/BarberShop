const reducer = {
    reducers:
        {
            clearUser: state => {
                state.user = {
                    id: null,
                    name: "",
                    phone: "",
                    validNumber: true
                };
            },
            setUser:  (state, action) => {
                state.user = action.payload.user;
            }
        }
}

export default reducer;