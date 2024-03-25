export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //REMOVE THIS AFTER FINISHED DEVELOPING (BY DEFAULT AUTHENTICATED USING THE TOKEN)
    token: 
    "BQDoJ_CImVFsFwmlq1fo5rDSkL0Vu931lmYjg8uE-VXGFp2ZJ9GXNk-MFTfY-omRMj6YL52ORcKlhlA9MpB0YqEZ0wzDkShP8shKhjh8v1zUzZttDjxyVR5s12rudwQY62jJvtu6tlYK36Y78hqNubqMfmtJWefW4AdOd1U4iMuSO3jrZavlhv9wcHvXMp3nXhwx35fY0OH8vcOKzB59",
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
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }
            
        default:
            return state;
    }
}

export default reducer;