import { BiVolumeFull } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPause } from "react-icons/bi";
import { TbRepeat } from "react-icons/tb";
import { TiArrowShuffle } from "react-icons/ti";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

const Player = () => {
    const playing = useSelector((state) => state.playing);
    const playingTrack = useSelector((state) => state.playingTrack);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateTime = () => setCurrentTime(audio.currentTime);
            audio.addEventListener("timeupdate", updateTime);
            return () => {
                audio.removeEventListener("timeupdate", updateTime);
            };
        }
    }, [playing?.track?.preview_url]);

    useEffect(() => {
        if (playingTrack) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [playingTrack]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
        }
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const trackDuration = formatTime(playing?.track?.duration_ms / 1000 || 0);

    return (
        <footer>
            <div className="footer_info">
                <div>
                    <h3>{playing?.track?.name}</h3>
                    <h4>
                        {playing?.track?.artists
                            .map((artist) => artist.name)
                            .join(", ")}
                    </h4>
                </div>
                {playing?.track?.isLiked ? (
                    <FaHeart className="footer_like" />
                ) : (
                    <FaRegHeart className="footer_like" />
                )}
            </div>
            <div className="footer_controls">
                <div className="footer_buttons">
                    <TiArrowShuffle className="footer_shuffle" />
                    <div className="footer_play_pause">
                        {isPlaying ? (
                            <BiPause
                                onClick={handlePlayPause}
                                className="footer_pause"
                            />
                        ) : (
                            <BsFillPlayFill
                                onClick={handlePlayPause}
                                className="footer_play"
                            />
                        )}
                        <audio
                            id="audio"
                            ref={audioRef}
                            src={playing?.track?.preview_url}
                        ></audio>
                    </div>
                    <TbRepeat className="footer_repeat" />
                </div>
                <div className="footer_playing_container">
                    <span>{formatTime(currentTime)}</span>
                    <div className="footer_playing">
                        <div
                            className="footer_playing_children"
                            style={{
                                width: `${
                                    (currentTime /
                                        (playing?.track?.duration_ms / 1000)) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                    <span>{trackDuration}</span>
                </div>
            </div>
            <div className="footer_volume_container">
                <BiVolumeFull className="footer_volume_icon" />
                <div className="footer_volume_div">
                    <div className="footer_volume_div_children"></div>
                </div>
            </div>
        </footer>
    );
};

export default Player;
