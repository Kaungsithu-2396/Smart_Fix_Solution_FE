import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
export default function CartItem({ img, model, count, price }) {
    return (
        <>
            <div className="flex gap-5 justify-center items-center bg-white">
                <img src={img} alt="" className="w-[26%]" srcset="" />
                <div className="">
                    <h1 className="text-sm">{model}</h1>
                </div>
                <div className="text-center">
                    <p className="font-bold">Count</p>

                    <span className="flex justify-center items-center gap-x-5">
                        <FaArrowCircleUp className="cursor-pointer text-2xl" />
                        {count}
                        <FaArrowCircleDown className="cursor-pointer text-2xl" />
                    </span>
                </div>
                <div className="">
                    <h1 className="font-bold">Price</h1>
                    <h1>{price} MMK</h1>
                </div>
            </div>
            <hr />
        </>
    );
}
