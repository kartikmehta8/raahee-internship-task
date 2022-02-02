import React from "react";

export default function Profile() {
    return (
        <div className="mt-4">
            <div className="flex justify-center">
                <img
                    className="rounded-full"
                    src="https://source.unsplash.com/random"
                    alt="PROFILE"
                    style={{ height: "90px", width: "90px" }}
                />
            </div>
            <div className="flex justify-center mt-4 text-lg font-bold">
                raaheeforyou
            </div>
            <div className="flex justify-center text-gray-600 text-sm">
                INDIA
            </div>
            <div className="flex justify-center">
                <span className="mt-4 bg-gray-800 text-white p-2 px-6 rounded-xl">
                    Edit
                </span>
            </div>
            <div className="flex justify-center mt-6">
                <div className="grid grid-cols-1">
                    <div className="text-lg">&nbsp;&nbsp;98</div>
                    <div>Posts</div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="grid grid-cols-1">
                    <div className="text-lg">&nbsp;&nbsp;&nbsp;&nbsp;3.5k</div>
                    <div>Followers</div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="grid grid-cols-1">
                    <div className="text-lg">&nbsp;&nbsp;&nbsp;&nbsp;900</div>
                    <div>Following</div>
                </div>
            </div>
            <div className="flex justify-start mt-8 font-bold mx-4">Raahee</div>
            <div className="mx-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
            </div>
            <div className="flex justify-start text-blue-700 mx-4 mt-2">
                https://www.kartikmehta.engineer
            </div>
            <div className="mt-12">
                <div className="font-bold mx-4">Your Stories</div>
                <div className="grid grid-cols-4 mx-4">
                    <div className="p-2">
                        <img
                            src="https://source.unsplash.com/random"
                            className="rounded-full"
                            style={{ height: "50px", width: "50px" }}
                            alt="X"
                        />
                    </div>
                    <div className="p-2">
                        <img
                            src="https://source.unsplash.com/random"
                            className="rounded-full"
                            style={{ height: "50px", width: "50px" }}
                            alt="X"
                        />
                    </div>
                    <div className="p-2">
                        <img
                            src="https://source.unsplash.com/random"
                            className="rounded-full"
                            style={{ height: "50px", width: "50px" }}
                            alt="X"
                        />
                    </div>
                    <div className="p-2">
                        <img
                            src="https://source.unsplash.com/random"
                            className="rounded-full"
                            style={{ height: "50px", width: "50px" }}
                            alt="X"
                        />
                    </div>
                    <div className="p-2">
                        <img
                            src="https://source.unsplash.com/random"
                            className="rounded-full"
                            style={{ height: "50px", width: "50px" }}
                            alt="X"
                        />
                    </div>
                    <div className="p-2">
                        <img
                            src="https://source.unsplash.com/random"
                            className="rounded-full"
                            style={{ height: "50px", width: "50px" }}
                            alt="X"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-red-500 mx-6 p-2 mt-6 rounded-xl flex justify-center text-white font-bold">
                Create Post
            </div>
        </div>
    );
}
