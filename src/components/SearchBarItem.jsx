import React from "react";
import photo from "../photos/wallpaper-1.avif";
export default function SearchBarItem() {
    return (
        <>
            <div className=" border-black  flex justify-center items-center bg-white px-5 py-2  gap-5">
                <img
                    src={photo}
                    className="w-[30%] rounded-md"
                    alt=""
                    srcset=""
                />
                <div className="">
                    <h1 className="font-semibold">IPhone 14 pro max</h1>
                    <h1 className="text-sm">49000 mmk</h1>
                </div>
            </div>
            <hr />
        </>
    );
}
