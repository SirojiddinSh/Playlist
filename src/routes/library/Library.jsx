import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Library = () => {
    return (
        <div style={{ height: "1060px" }} className="home">
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
        </div>
    );
};

export default Library;
