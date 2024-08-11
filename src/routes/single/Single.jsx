import "./Single.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";
import { useParams } from "react-router-dom";
import Play from "../../images/play.png";
import Pastga from "../../images/pastga.png";
import Dumaloq from "../../images/dumaloq.png";
import UchNuqta from "../../images/uchnuqta.png";
import { useDispatch, useSelector } from "react-redux";

const Single = () => {
    const [tracks, setTracks] = useState([]);
    const { id } = useParams();
    const single = JSON.parse(localStorage.getItem("singlePlaylist"));
    const likedTracks = useSelector((state) => state.liked);
    const dispatch = useDispatch();

    const handlePlay = async () => {
        try {
            const response = await fetch(
                `https://api.spotify.com/v1/playlists/${id}`,
                {
                    headers: {
                        Authorization: ` ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const { tracks } = await response.json();
            setTracks(tracks.items || []);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handlePlay();
    }, [id]);

    const handlePlayAndPause = (track) => {
        dispatch({ type: "PLAY_PAUSE", payload: track });
        dispatch({ type: "SET_PLAYING_TRACK", payload: Math.random() * 60 });
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const handleAddLiked = (track) => {
        dispatch({ type: "SET_LIKED", payload: track });
    };

    return (
        <div className="single">
            <div className="single_header">
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
            <div className="single_bg-div">
                <div className="single_container">
                    <img
                        src={single.images ? single.images[0].url : ""}
                        alt=""
                    />
                    <div className="single_songs_info">
                        <h4 style={{ width: "100px" }}>PUBLIC PLAYLIST</h4>
                        <h1>{single.name}</h1>
                        <div>
                            <h3>
                                Made for {single.owner.display_name} +{" "}
                                {single.tracks.total} songs,{" "}
                                {Math.floor(Math.random() * 10)} hr{" "}
                                {Math.floor(Math.random() * 60)} mins
                            </h3>
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
                </div>
            </div>
            <div className="tbody">
                <h2 className="title">TITLE</h2>
                <h2 className="album">ALBUM</h2>
                <TbClockHour3 className="soat_icon" />
            </div>
            <div className="liked-playlists">
                {tracks.map((track, index) => (
                    <div
                        onClick={() => handlePlayAndPause(track)}
                        key={`${track.track.id}-${index}`}
                        className="liked-playlist-item"
                    >
                        <div className="liked-playlist-title">
                            <img
                                src={track.track.album.images[0].url}
                                alt={track.track.name}
                                className="liked-playlist-image"
                            />
                            <h3 className="liked-playlist-name">
                                {track.track.name}
                            </h3>
                        </div>
                        <h3 className="liked-playlist-description">
                            {track.track.album.name}
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                marginLeft: "35px",
                            }}
                        >
                            {/* <FaHeart
                                onClick={() => handleRemoveLiked(track.id)}
                                className="like"
                            /> */}

                            <FaRegHeart
                                onClick={() => handleAddLiked(track)}
                                className="like"
                            />

                            <h4 className="liked-playlist-duration">
                                {formatTime(
                                    track.track.duration_ms / 1000 || 0
                                )}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Single;
