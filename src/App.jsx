import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Settings from "./components/settings/Settings";
import Home from "./routes/home/Home";
import Search from "./routes/search/Search";
import Library from "./routes/library/Library";
import LikedSongs from "./routes/likedSongs/LikedSongs";
import CreatePlaylist from "./routes/createPlaylist/CreatePlaylist";
import { CLIENT_ID, CLIENT_SECRET } from "./veraibls/veraibls";
import FooterPlay from "./components/footerPlay/FooterPlay";

const getToken = async () => {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`,
            },
            body: "grant_type=client_credentials",
        });

        const auth = await response.json();
        localStorage.setItem(
            "access_token",
            `${auth.token_type} ${auth.access_token}`
        );
    } catch (error) {
        console.log(error);
    }
};
getToken();

function App() {
    return (
        <>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/library" element={<Library />} />
                    <Route
                        path="/Create-Playlist"
                        element={<CreatePlaylist />}
                    />
                    <Route path="/Liked-Songs" element={<LikedSongs />} />
                </Routes>
                <Settings />
            </div>
            <FooterPlay />
        </>
    );
}

export default App;
