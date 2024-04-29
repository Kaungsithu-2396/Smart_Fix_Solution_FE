import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import axios from "axios";
import { FaArrowCircleDown } from "react-icons/fa";
export default function CartItem({ count, id }) {
    const [item, setItem] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setItem(response.data.product);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const [counter, setCounter] = useState(count);
    return (
        <>
            <div className="flex gap-5 justify-center items-center bg-white">
                <img src={item.image} alt="" className="w-[26%]" srcset="" />
                <div className="">
                    <h1 className="text-sm">{item.name}</h1>
                </div>
                <div className="text-center">
                    <p className="font-bold">Count</p>

                    <span className="flex justify-center items-center gap-x-5">
                        <FaArrowCircleUp
                            className="cursor-pointer text-2xl"
                            onClick={() => setCounter(counter + 1)}
                        />
                        {counter}
                        <FaArrowCircleDown
                            className="cursor-pointer text-2xl"
                            onClick={() => setCounter(counter - 1)}
                        />
                    </span>
                </div>
                <div className="">
                    <h1 className="font-bold">Price</h1>
                    <h1>{eval(item.price * counter)} USD</h1>
                </div>
            </div>
            <hr />
        </>
    );
}
