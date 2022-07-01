const reducer = {
    reducers:
        {
            clearUser: state => {
                state.user = {
                    id: null,
                    name: null,
                    phone: null
                };
            },
            login:  (state, action) => {
                state.user = action.payload.user;
            }
        }
}

export default reducer;