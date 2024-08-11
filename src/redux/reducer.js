const initialState = {
    single: {},
    playing: {},
    playingTrack: null,
    liked: JSON.parse(localStorage.getItem("liked")) || [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SINGLE":
            localStorage.setItem(
                "singlePlaylist",
                JSON.stringify(action.payload)
            );
            return {
                ...state,
                single: action.payload,
            };

        case "PLAY_PAUSE":
            return {
                ...state,
                playing: action.payload,
            };

        case "SET_PLAYING_TRACK":
            return {
                ...state,
                playingTrack: action.payload,
            };
        case "SET_LIKED":
            const likedSongs = [...state.liked, action.payload];
            localStorage.setItem("liked", JSON.stringify(likedSongs));
            return {
                ...state,
                liked: likedSongs,
            };

        case "REMOVE_LIKED": {
            const likeds = state.liked.filter(
                (i) => i.track.album.id !== action.payload
            );
            localStorage.setItem("liked", JSON.stringify(likeds));
            location.reload();
            return {
                ...state,
                liked: likeds,
            };
        }
        default:
            return state;
    }
};

export default reducer;
