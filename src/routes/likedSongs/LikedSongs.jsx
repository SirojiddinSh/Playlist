import { TbClockHour3 } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import "./LikedSongs.css";
import { FaHeart } from "react-icons/fa";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Search from "../../images/search.png";
import Uchburchak from "../../images/pastki-uchburchak.png";
import Play from "../../images/play.png";
import Pastga from "../../images/pastga.png";
import Dumaloq from "../../images/dumaloq.png";
import UchNuqta from "../../images/uchnuqta.png";
import { useDispatch } from "react-redux";

const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}

const handleChange = (value) => {
    console.log(`Selected: ${value}`);
};

const LikedSongs = () => {
    const [playlists, setPlaylists] = useState([]);
    const likedPlaylists = JSON.parse(localStorage.getItem("liked"));
    // console.log(likedPlaylists[0].track.album.id);

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

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const handleRemoveLiked = (trackId) => {
        dispatch({ type: "REMOVE_LIKED", payload: trackId });
        console.log(trackId);
    };

    return (
        <div className="liked">
            <div className="bg-div">
                <div className="header">
                    <button>
                        <LeftOutlined
                            style={{ fontSize: "25px", color: "white" }}
                        />
                    </button>
                    <button>
                        <RightOutlined
                            style={{ fontSize: "25px", color: "white" }}
                        />
                    </button>
                </div>
                <div className="likedSongs_container">
                    <div className="liked_like">
                        <FaHeart
                            style={{
                                fontSize: "100px",
                                color: "white",
                            }}
                        />
                    </div>
                    <div className="liked_songs_info">
                        <h4 style={{ width: "100px" }}>PUBLIC PLAYLIST</h4>
                        <h1>Liked Songs</h1>
                        <div>
                            <h3>davedirect3 + 34 songs</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="liked-songs">
                <div className="liked-songs-play-container">
                    <div className="liked-songs-play">
                        <div className="liked-songs-play-div">
                            <img
                                style={{ marginLeft: "5px" }}
                                src={Play}
                                alt=""
                            />
                        </div>
                        <FiHeart style={{ color: "white", fontSize: "45px" }} />
                        <div className="liked-songs-play-dumaloq">
                            <img className="pastga" src={Pastga} alt="" />
                            <img
                                className="dumaloq"
                                style={{ marginLeft: "5px" }}
                                src={Dumaloq}
                                alt=""
                            />
                        </div>
                        <img
                            src={UchNuqta}
                            alt=""
                            width={30}
                            style={{ marginLeft: "15px" }}
                        />
                    </div>
                    <div className="liked-songs-search">
                        <img
                            style={{ marginRight: "25px" }}
                            src={Search}
                            alt=""
                            width={23}
                        />
                        <h4>Custom order</h4>
                        <img src={Uchburchak} alt="" />
                    </div>
                </div>
            </div>
            <div className="tbody">
                <h2 className="title">TITLE</h2>
                <h2 className="album">ALBUM</h2>
                <TbClockHour3 className="soat_icon" />
            </div>
            <div className="liked-playlists">
                {likedPlaylists?.map((playlist, index) => (
                    <div
                        key={playlist.id || index}
                        className="liked-playlist-item"
                    >
                        <div className="liked-playlist-title">
                            <img
                                src={playlist.track.album.images[0].url}
                                alt={playlist.track.album.name}
                                className="liked-playlist-image"
                            />
                            <div>
                                <h3 className="liked-playlist-name">
                                    {playlist.track.album.name}
                                </h3>
                                <h4>{playlist.track.artists[0].name}</h4>
                            </div>
                        </div>
                        <h3 className="liked-playlist-description">
                            {playlist.track.name}
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                marginLeft: "35px",
                            }}
                        >
                            <FaHeart
                                onClick={() =>
                                    handleRemoveLiked(playlist.track.album.id)
                                }
                                className="like"
                            />

                            <h4 className="liked-playlist-duration">
                                {formatTime(
                                    playlist.track.duration_ms / 1000 || 0
                                )}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LikedSongs;
