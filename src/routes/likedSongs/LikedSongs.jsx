import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useState } from "react";

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
    const [size, setSize] = useState("middle");
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    return (
        <div>
            <div className="header">
                <div className="buttons">
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
                <Select
                    size={size}
                    defaultValue="a1"
                    onChange={handleChange}
                    style={{
                        width: 200,
                    }}
                    options={options}
                />
            </div>
        </div>
    );
};

export default LikedSongs;
