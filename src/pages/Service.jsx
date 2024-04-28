import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import service_form from "../photos/service_form.json";
import Lottie from "lottie-react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BreadCrumbRoute from "@/components/BreadCrumbRoute";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
const schema = yup
    .object({
        name: yup.string().required("please provide name"),
        email: yup.string().email().required("Please provide email"),
        image: yup.mixed().required("please provide the image"),
        description: yup.string().required("please provide description"),
    })
    .required();
function Service() {
    const [isDelivered, setIsDelivered] = useState("No");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        navigate("/success-service-item");
    };
    return (
        <section className=" min-h-screen  mx-4">
            <div className="">
                <BreadCrumbRoute data={["Home", "Service"]} />
                <hr />
            </div>
            <div className="flex flex-col-reverse 2xl:flex-row gap-4  justify-center items-center">
                <form
                    action=""
                    className="grid grid-cols-1 justify-center items-start gap-5 lg:w-[50%] 2xl:w-[30%] py-5 m-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <legend className="text-center font-bold text-3xl my-5">
                        Service Upload Form
                    </legend>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Name"
                        className="px-3 rounded-md py-2  border border-black"
                    />
                    {errors.name?.type === "required" && (
                        <p role="alert" className=" text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                    <input
                        type="text"
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="px-3 rounded-md py-2  border border-black"
                    />
                    {errors.email?.type === "required" && (
                        <p role="alert" className=" text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        accept=".jpeg"
                        className="px-3 rounded-md py-2  border border-black"
                    />
                    {errors.image?.type === "required" && (
                        <p role="alert" className=" text-red-500">
                            {errors.image.message}
                        </p>
                    )}
                    <input
                        type="text"
                        {...register("description", { required: true })}
                        placeholder="Description"
                        className="px-3 rounded-md py-2  border border-black"
                    />
                    {errors.description?.type === "required" && (
                        <p role="alert" className=" text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                    <p>Need Delivery ?</p>
                    <RadioGroup
                        defaultValue="No"
                        className=" flex  flex-row m-0"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="Yes"
                                id="r1"
                                onClick={(e) => setIsDelivered(e.target.value)}
                            />
                            <Label htmlFor="r1">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="No"
                                id="r2"
                                onClick={(e) => setIsDelivered(e.target.value)}
                            />
                            <Label htmlFor="r2">No</Label>
                        </div>
                    </RadioGroup>

                    {isDelivered === "Yes" && (
                        <>
                            <input
                                {...register("address", { required: true })}
                                className="px-3 py-2 border border-black rounded-md"
                                type="text"
                                name=""
                                placeholder="Address"
                                id=""
                            />
                            {errors.address?.type === "required" &&
                                isDelivered ===
                                    "Yes"(
                                        <p
                                            role="alert"
                                            className="text-red-500"
                                        >
                                            {errors.address.message}
                                        </p>
                                    )}
                        </>
                    )}
                    <div className="flex justify-center items-center ">
                        <input
                            type="submit"
                            value="Submit"
                            className="hover:scale-105 hover:bg-orange-500 hover:text-white delay-200 duration-300 border mx-4 px-5  flex justify-center items-center m-auto text-center py-2 rounded-md border-black cursor-pointer"
                            onClick={() => {
                                setIsSubmit(true);
                            }}
                        />
                    </div>
                </form>
                <div className="">
                    <Lottie animationData={service_form} />
                </div>
            </div>
        </section>
    );
}

export default Service;
