export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
}

// action -> type, [payload] 
const reducer = (state, action) => {
    console.log(action);
    console.log(state)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;