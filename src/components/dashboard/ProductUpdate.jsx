import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
export default function ProductUpdate() {
    const categoryCol = [
        { id: 1, name: "phone" },
        { id: 2, name: "tablet" },
        { id: 3, name: "airpod" },
    ];
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data, trackImage);
    const [trackImage, setTrackImage] = useState("");
    const [category, setCategory] = useState("");
    return (
        <section className="flex flex-col justify-center items-center w-full mt-5">
            <h1 className="text-3xl">Product Customization</h1>
            <form
                action=""
                encType={"multipart/form-data"}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:w-[60%] w-full  mt-3 px-8 py-10 rounded-md border-black/30 "
            >
                <span className="flex flex-col">
                    <label htmlFor=" text-bold ">Name</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-3  py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("name", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Color</label>
                    <input
                        type="text"
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
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
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("price", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Description</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("description", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Stock Item</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("stockItem", { required: true })}
                    />
                </span>
                <span className="flex flex-col my-5">
                    <label htmlFor="">Image</label>
                    <input
                        type="file"
                        accept=".jpeg"
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
                <span className="flex gap-4 justify-between">
                    <Button
                        type="submit"
                        className=" bg-red-500 my-2 w-[50%] m-auto"
                    >
                        Delete
                    </Button>
                    <Button
                        type="submit"
                        className=" bg-cyan-400  my-2 w-[50%] m-auto"
                    >
                        Update
                    </Button>
                </span>
            </form>
        </section>
    );
}
