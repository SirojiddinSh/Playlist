import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const MadeForYou = () => {
    const [playlists, setPlaylists] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getPlaylists = async () => {
        try {
            const response = await fetch(
                "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
                {
                    headers: {
                        Authorization: localStorage.getItem("access_token"),
                    },
                }
            );
            const { playlists } = await response.json();
            setPlaylists(playlists.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPlaylists();
    }, []);

    const sendPlaylist = (playlist) => {
        dispatch({ type: "SINGLE", payload: playlist });
        dispatch({ type: "PLAY_PAUSE", payload: playlist });
        dispatch({ type: "SET_PLAYING_TRACK", payload: Math.random() * 60 });
        navigate(`/playlist-info/${playlist.id}`);
    };
    return (
        <div className="YMRJU">
            {playlists?.map((playlist, index) => (
                <div
                    style={{ cursor: "pointer" }}
                    onClick={() => sendPlaylist(playlist)}
                    key={playlist.id || index}
                    className="YMRJU-item"
                >
                    <img
                        src={playlist.images[0].url}
                        alt={playlist.name}
                        className="YMRJU-image"
                    />
                    <h3 className="YMRJU-title">{playlist.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default MadeForYou;
