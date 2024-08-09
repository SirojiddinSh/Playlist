import {
    CloseOutlined,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons";

const Settings = () => {
    return (
        <div className="settings">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "35px",
                }}
            >
                <h2>Friend Activity</h2>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                        }}
                    >
                        <UserAddOutlined
                            style={{ color: "lightgray", fontSize: "25px" }}
                        />
                    </button>
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                        }}
                    >
                        <CloseOutlined
                            style={{ color: "lightgray", fontSize: "25px" }}
                        />
                    </button>
                </div>
            </div>
            <p>
                Let friends and followers on Spotify see what you’re listening
                to.
            </p>
            <div className="settings_container">
                <div className="settings_div">
                    <div className="settings-img">
                        <UserOutlined className="user-icon" />
                    </div>
                    <div className="nmadurlar">
                        <div className="nmadur1"></div>
                        <div className="nmadur2"></div>
                        <div className="nmadur2"></div>
                    </div>
                </div>
                <div className="settings_div">
                    <div className="settings-img">
                        <UserOutlined className="user-icon" />
                    </div>
                    <div className="nmadurlar">
                        <div className="nmadur1"></div>
                        <div className="nmadur2"></div>
                        <div className="nmadur2"></div>
                    </div>
                </div>
                <div className="settings_div">
                    <div className="settings-img">
                        <UserOutlined className="user-icon" />
                    </div>
                    <div className="nmadurlar">
                        <div className="nmadur1"></div>
                        <div className="nmadur2"></div>
                        <div className="nmadur2"></div>
                    </div>
                </div>
            </div>
            <p>
                Go to Settings > Social and enable “Share my listening activity
                on Spotify.’ You can turn this off at any time.
            </p>
            <button className="settings-btn">SETTINGS</button>
        </div>
    );
};

export default Settings;
