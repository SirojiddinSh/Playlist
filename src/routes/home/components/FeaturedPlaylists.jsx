import { useState, useEffect } from "react";

const FeaturedPlaylists = () => {
    const [playlists, setPlaylists] = useState([]);

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
    return (
        <div className="featured-playlist">
            {playlists?.map((playlist) => (
                <div key={playlist.id} className="featured-playlist-item">
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
