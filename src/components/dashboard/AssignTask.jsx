import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function AssignTask() {
    const id = useParams();

    const token = localStorage.getItem("token");
    const [data, setData] = useState("");
    const [technician, setTechnician] = useState([]);
    const [tID, setTid] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/serviceItems/${id.itemID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => setData(resp.data.serviceItem))
            .catch((err) => console.log(err));

        axios
            .get("http://localhost:3000/api/v1/technicians", {
                headers: {
                    Authorization: `Bearer Token`,
                },
            })
            .then((resp) => setTechnician(resp.data.data))
            .catch((err) => console.log(err));
    }, []);

    const availableTechnician = technician?.filter(
        (el) => el.isAvailable === true
    );

    const onSubmit = (data) => {
        console.log(data);
        axios
            .put(
                `http://localhost:3000/api/v1/technicians/${tID}`,
                {
                    task_id: id.itemID,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((resp) => {
                alert("Assigned successfully");
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <section className="m-5 flex  flex-col justify-center items-center">
                <h1 className="text-4xl p-4 text-orange-500">
                    Task Assigned Section
                </h1>
                <form
                    action=""
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col w-full gap-5  mt-8 px-8 py-10 rounded-md border-black/30 "
                >
                    <span className="flex flex-col">
                        <label htmlFor=" text-bold ">Name</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            defaultValue={data.name}
                            className="bg-neutral-300/20 px-3 py-2 border-1 border-black/10 rounded-md my-2"
                            {...register("name", { required: true })}
                        />
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            className="bg-neutral-300/20 px-3 py-2 border-1 border-black/10 rounded-md my-2"
                            name=""
                            id=""
                            defaultValue={data.email}
                            {...register("email", { required: true })}
                        />
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="">Description</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            defaultValue={data.description}
                            className="bg-neutral-300/20 px-3 py-2 border-1 border-black/10 rounded-md my-2"
                            {...register("description", { required: true })}
                        />
                    </span>
                    <span>
                        <label htmlFor="">Image</label>

                        <img
                            src={data.image}
                            alt=""
                            srcset=""
                            className=" w-[40%]"
                        />
                    </span>
                    <span>
                        <Select
                            className="bg-neutral-300/20"
                            onValueChange={(value) => setTid(value)}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Available Technician" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {availableTechnician?.map((el) => {
                                        return (
                                            <SelectItem
                                                value={el._id}
                                                key={el._id}
                                            >
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
        </>
    );
}
