import React from "react";

export default function CategoryCard({ img, name }) {
    return (
        <>
            <div className=" ">
                <div className="flex justify-center p-4 items-center rounded-md flex-col  bg-neutral-300/40 ">
                    <img
                        src={img}
                        className="lg:w-[180px] w-[120px] cursor-pointer hover:scale-105 transition-all duration-300 px-5  delay-300"
                        alt=""
                    />
                    <h1 className=" font-semibold">{name}</h1>
                </div>
            </div>
        </>
    );
}
