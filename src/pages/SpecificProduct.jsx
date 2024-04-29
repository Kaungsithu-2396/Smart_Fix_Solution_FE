import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMinus } from "react-icons/hi";

export default function SpecificProduct() {
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const [item, setItem] = useState([]);
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/products/${id}`)
            .then((response) => {
                setItem(response.data.product);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <section className="flex justify-center items-start mt-14 h-screen gap-10">
                <div className="">
                    <img
                        src={item.image}
                        className="w-[400px] m-auto"
                        alt=""
                        srcset=""
                    />
                </div>
                <div className="w-[30%] my-6">
                    <h1 className="text-4xl">{item.name}</h1>
                    <h2 className="text-2xl text-orange-500">
                        {item.price} USD
                    </h2>
                    <span
                        className="flex flex-col justify-center items-start
                     mt-5"
                    >
                        <p className="text-xl">
                            Color : <span> {item.color}</span>
                        </p>
                        <p className="text-xl">
                            Category : <span>{item.category}</span>
                        </p>
                        <div className=" mt-10">
                            <h1 className="text-4xl text-black ">
                                Description
                            </h1>
                            <p className=" text-neutral-500 w-full text-justify py-4  ">
                                {item.description}
                            </p>
                        </div>
                        <div
                            className="w-full "
                            onClick={() => {
                                axios
                                    .post(
                                        "http://localhost:3000/api/v1/cart",
                                        { productId: id },
                                        {
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        console.log(response);
                                        alert("Add to cart success");
                                    })
                                    .catch((error) => console.log(error));
                                window.location.reload();
                            }}
                        >
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </span>
                </div>
            </section>
        </>
    );
}
