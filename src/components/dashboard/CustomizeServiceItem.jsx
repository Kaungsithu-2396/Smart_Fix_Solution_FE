import React from "react";
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
import { useParams } from "react-router-dom";
export default function CustomizeServiceItem() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    const { itemId } = useParams();

    return (
        <section className="m-5 flex  flex-col justify-center items-center">
            <h1 className="text-4xl p-4 text-orange-500">
                Task Assigned Section
            </h1>
            <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col  mt-8 px-8 py-10 rounded-md border-black/30 "
            >
                <span className="flex flex-col">
                    <label htmlFor=" text-bold ">Name</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("name", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        name=""
                        id=""
                        {...register("email", { required: true })}
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
                <span>
                    <label htmlFor="">Image</label>

                    <img
                        src="https://mdriveasia.com/cdn/shop/products/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-2_Design_SEA_600x.jpg?v=1662967340"
                        alt=""
                        srcset=""
                        className=" w-[40%]"
                    />
                </span>
                <span>
                    <Select
                        className="bg-neutral-300/20"
                        onValueChange={(value) => setTechnician(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Available Technician" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {/* {availableTechnician.map((el) => {
                                    return (
                                        <SelectItem value={el.name} key={el.id}>
                                            {el.name}
                                        </SelectItem>
                                    );
                                })} */}
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
