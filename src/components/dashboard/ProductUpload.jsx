import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
export default function ProductUpload() {
    const categoryCol = [
        { id: 1, name: "phone" },
        { id: 2, name: "tablet" },
        { id: 3, name: "watch" },
        { id: 4, name: "laptop" },
        { id: 5, name: "airpod" },
    ];
    const [trackImage, setTrackImage] = useState("");
    const token = localStorage.getItem("token");
    console.log(token);
    const [category, setCategory] = useState("");
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const imgUrl = await toBase64(trackImage);
        axios
            .post(
                "http://localhost:3000/api/v1/products",
                {
                    name: data.name,
                    color: data.color,
                    price: data.price,
                    category,
                    description: data.description,
                    file: imgUrl,
                    stockItem: data.stockItem,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((resp) => {
                console.log(resp.data);
                alert("Success");
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="flex flex-col justify-center items-center w-full mt-5">
            <h1 className="text-3xl">Upload product</h1>
            <form
                action=""
                encType={"multipart/form-data"}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:w-[60%] w-full  mt-3 px-8 py-10 rounded-md border-black/10 "
            >
                <span className="flex flex-col">
                    <label htmlFor=" text-bold ">Name</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-8  py-2 border-1 border-black/10 rounded-md my-2"
                        {...register("name", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Color</label>
                    <input
                        type="text"
                        className="bg-neutral-300/20 px-8  py-2 border-1 border-black/10 rounded-md my-2"
                        name=""
                        id=""
                        {...register("color", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Price</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-8  py-2 border-1 border-black/10 rounded-md my-2"
                        {...register("price", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Description</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-8  py-2 border-1 border-black/10 rounded-md my-2"
                        {...register("description", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Stock Item</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-8  py-2 border-1 border-black/10 rounded-md my-2"
                        {...register("stockItem", { required: true })}
                    />
                </span>
                <span className="flex flex-col my-5">
                    <label htmlFor="">Image</label>
                    <input
                        type="file"
                        name=""
                        id=""
                        onChange={(e) => setTrackImage(e.target.files[0])}
                    />
                </span>
                <span>
                    <Select
                        className="bg-neutral-300/20"
                        onValueChange={(value) => setCategory(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category Collection" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {categoryCol.map((el) => {
                                    return (
                                        <SelectItem value={el.name} key={el.id}>
                                            {el.name}
                                        </SelectItem>
                                    );
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </span>

                <Button type="submit" className="my-5">
                    Submit
                </Button>
            </form>
        </section>
    );
}
