import React from "react";
import Menu from "./menu.png";
import axios from "axios";
import Bookmark from "./outline_bookmark_border_black_24dp.png";
import Chat from "./outline_chat_bubble_outline_black_24dp.png";
import Reply from "./outline_reply_black_24dp.png";
import Like from "./outline_favorite_border_black_24dp.png";

import { useState, useEffect } from "react";

export default function Card({ name, location, date }) {
    const [image, setImage] = useState();
    useEffect(() => {
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((response) => setImage(response.data.message));
    }, []);

    return (
        <div className="shadow-card p-3 rounded-3xl">
            <div className="pt-1 px-2 pr-0 flex">
                <div className="grid grid-cols-2">
                    <div className="flex">
                        <img
                            className="rounded-full"
                            style={{ height: "45px", width: "45px" }}
                            src="https://source.unsplash.com/random"
                            alt="Profile"
                        />
                        <div className="grid grid-cols-1 pl-2">
                            <div>{name}</div>
                            <div
                                style={{ fontSize: "12px" }}
                                className="text-gray-400"
                            >
                                {location}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end p-2">
                        <img src={Menu} alt="Menu" />
                    </div>
                </div>
            </div>
            <div className="pt-4 justify-center flex">
                <img className="rounded-2xl" src={image} alt="Random Dog" />
            </div>
            <div className="pt-2">
                <div className="grid grid-cols-2">
                    <div className="flex mx-2">
                        <img
                            src={Like}
                            alt="Like"
                            style={{ height: "20px" }}
                            className="mt-1"
                        />
                        &nbsp;&nbsp;
                        <img
                            src={Chat}
                            alt="Comment"
                            className="mt-1"
                            style={{ height: "22px" }}
                        />
                        &nbsp;&nbsp;
                        <img
                            src={Reply}
                            alt="Share"
                            style={{ height: "25px" }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <img
                            src={Bookmark}
                            alt="Bookmark"
                            style={{ height: "25px" }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2 px-2" style={{ fontSize: "13px" }}>
                Liked by{" "}
                <span className="font-bold">jackdorsey & 234 others</span>
            </div>
            <div style={{ fontSize: "12px" }} className="text-gray-400 px-2">
                {date}
            </div>
        </div>
    );
}
