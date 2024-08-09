import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Settings from "./components/settings/Settings";
import Home from "./routes/home/Home";
import Search from "./routes/search/Search";
import Library from "./routes/library/Library";
import LikedSongs from "./routes/likedSongs/LikedSongs";
import CreatePlaylist from "./routes/createPlaylist/CreatePlaylist";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/Create-Playlist" element={<CreatePlaylist />} />
                <Route path="/Liked-Songs" element={<LikedSongs />} />
            </Routes>
            <Settings />
        </div>
    );
}

export default App;
