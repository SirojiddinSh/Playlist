import { FaHeart } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";
import {
    HomeOutlined,
    SearchOutlined,
    PicRightOutlined,
    PlusSquareOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Navbar = () => {
    return (
        <div style={{ width: "310px" }}>
            <div
                style={{
                    width: "310px",
                    height: "100%",
                    background: "black",
                }}
            >
                <Sider style={{ width: "310px" }} trigger={null} collapsible>
                    <Menu
                        style={{
                            width: "310px",
                            height: "400px",
                            paddingTop: "50px",
                            background: "black",
                        }}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: (
                                    <HomeOutlined
                                        style={{
                                            fontSize: "33px",
                                        }}
                                    />
                                ),
                                label: (
                                    <NavLink
                                        style={{
                                            fontSize: "20px",
                                        }}
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                ),
                            },
                            {
                                key: "2",
                                icon: (
                                    <SearchOutlined
                                        style={{
                                            fontSize: "33px",
                                        }}
                                    />
                                ),
                                label: (
                                    <NavLink
                                        style={{
                                            fontSize: "20px",
                                        }}
                                        to="/search"
                                    >
                                        Search
                                    </NavLink>
                                ),
                            },
                            {
                                key: "3",
                                icon: (
                                    <PicRightOutlined
                                        style={{
                                            fontSize: "33px",
                                        }}
                                    />
                                ),
                                label: (
                                    <NavLink
                                        style={{
                                            fontSize: "20px",
                                        }}
                                        to="/library"
                                    >
                                        Your Library
                                    </NavLink>
                                ),
                            },
                            {
                                key: "4",
                                icon: (
                                    <PlusSquareOutlined
                                        style={{
                                            fontSize: "34px",
                                            borderRadius: "2px",
                                        }}
                                    />
                                ),
                                label: (
                                    <NavLink
                                        style={{
                                            fontSize: "20px",
                                        }}
                                        to="/Create-Playlist"
                                    >
                                        Create Playlist
                                    </NavLink>
                                ),
                            },
                            {
                                key: "5",
                                icon: (
                                    <div className="navbar_like">
                                        <FaHeart
                                            style={{
                                                fontSize: "15px",
                                                color: "white",
                                            }}
                                        />
                                    </div>
                                ),
                                label: (
                                    <NavLink
                                        style={{
                                            fontSize: "20px",
                                        }}
                                        to="/Liked-Songs"
                                    >
                                        Liked Songs
                                    </NavLink>
                                ),
                            },
                        ]}
                    />
                    <div
                        style={{
                            paddingLeft: "30px",
                            width: "310px",
                            height: "100%",
                            background: "black",
                            paddingTop: "20px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                            marginBottom: "100px",
                        }}
                    >
                        <ul className="navbar_ul">
                            <li>Chill Mix</li>
                            <li>Insta Hits</li>
                            <li>Your Top Songs 2021</li>
                            <li>Mellow Songs</li>
                            <li>Anime Lofi & Chillhop Music</li>
                            <li>BG Afro “Select” Vibes</li>
                            <li>Afro “Select” Vibes</li>
                            <li>Happy Hits!</li>
                            <li>Deep Focus</li>
                            <li>Instrumental Study</li>
                            <li>OST Compilations</li>
                            <li>Nostalgia for old souled mill...</li>
                            <li>Mixed Feelings</li>
                        </ul>
                    </div>
                </Sider>
            </div>
        </div>
    );
};

export default Navbar;
