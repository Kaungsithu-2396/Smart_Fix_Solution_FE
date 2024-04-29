import React from "react";
import { Link } from "react-router-dom";
export default function ProductCart({ src, price, model, to }) {
    return (
        <>
            <Link to={`/product/${to}`}>
                <div className="flex justify-center flex-col  py-2 cursor-pointer  rounded-md   items-center">
                    <img
                        src={src}
                        alt=""
                        className=" w-[250px] hover:scale-105 duration-200 delay-300  transistion-all"
                    />
                    <div className="text-center">
                        <p className="">{model}</p>
                        <p className=" text-orange-400 font-semibold text-2xl md:text-3xl">
                            {price}
                        </p>
                        <span className="text-black">USD</span>
                    </div>
                </div>
            </Link>
        </>
    );
}
