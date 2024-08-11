import "./Home.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import FeaturedPlaylists from "./components/FeaturedPlaylists";
import YourTopMixes from "./components/YourTopMixes";
import MadeForYou from "./components/MadeForYou";
import RecentPlayed from "./components/RecentlyPlayed";
import JumpBackIn from "./components/JumpBackIn";
import UniquelyYours from "./components/UniquelyYours";

const Home = () => {
    return (
        <div className="home">
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
            <div style={{ width: "100%" }}>
                <h2 className="home-title">Good afternoon</h2>
            </div>
            <FeaturedPlaylists />
            <div style={{ width: "100%" }}>
                <h2 className="home-title">Your top mixes</h2>
            </div>
            <YourTopMixes />
            <div style={{ width: "100%" }}>
                <h2 className="home-title">Made for you</h2>
            </div>
            <MadeForYou />
            <div style={{ width: "100%" }}>
                <h2 className="home-title">Recently played</h2>
            </div>
            <RecentPlayed />
            <div style={{ width: "100%" }}>
                <h2 className="home-title">Jump back in</h2>
            </div>
            <JumpBackIn />
            <div style={{ width: "100%" }}>
                <h2 className="home-title">Uniquely yours</h2>
            </div>
            <UniquelyYours />
        </div>
    );
};

export default Home;
