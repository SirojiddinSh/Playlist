import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FeaturedPlaylists = () => {
    const [playlists, setPlaylists] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getPlaylists = async () => {
        try {
            const response = await fetch(
                "https://api.spotify.com/v1/browse/featured-playlists",
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
        dispatch({ type: "PLAY_PAUSE", payload: playlist });
        dispatch({ type: "SET_PLAYING_TRACK", payload: Math.random() * 60 });
        dispatch({ type: "SINGLE", payload: playlist });
        navigate(`/playlist-info/${playlist.id}`);
    };

    return (
        <div className="featured-playlist">
            {playlists?.map((playlist, index) => (
                <div
                    onClick={() => sendPlaylist(playlist)}
                    key={playlist.id || index}
                    className="featured-playlist-item"
                >
                    <img
                        src={playlist.images[0].url}
                        alt={playlist.name}
                        className="featured-playlist-image"
                    />
                    <h3 className="featured-playlist-title">{playlist.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default FeaturedPlaylists;
