import { useState, useEffect } from "react";

const UniquelyYours = () => {
    const [playlists, setPlaylists] = useState([]);

    const getPlaylists = async () => {
        try {
            const response = await fetch(
                "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
                {
                    headers: {
                        Authorization: localStorage.getItem("access_token"),
                    },
                }
            );
            const { playlists } = await response.json();
            console.log(playlists.items);
            setPlaylists(playlists.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPlaylists();
    }, []);
    return (
        <div className="YMRJU">
            {playlists?.map((playlist) => (
                <div key={playlist.id} className="YMRJU-item">
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

export default UniquelyYours;
