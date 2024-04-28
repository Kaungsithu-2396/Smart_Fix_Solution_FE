import React from "react";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        reset();
    };
    const pwd = watch("password");
    const confPwd = watch("cf_password");
    return (
        <section className=" h-screen ">
            <h1 className="text-center text-3xl xs:text-xl mt-10 uppercase">
                create an account
            </h1>
            <div className="2xl:w-[60%] w-full m-auto">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className=" mx-5  border-black/20 p-10 xs:p-3 xs:mt-2  rounded-md mt-6 "
                >
                    <h1 className="mb-5 text-3xl xs:text-xl">
                        Personal Information
                    </h1>
                    <span className="flex flex-col mb-4">
                        <label
                            htmlFor=""
                            className="text-2xl text-neutral-500 py-4  xs:text-xl xs:py-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name=""
                            placeholder="Enter your name"
                            className="xs:px-3 xs:py-2 px-5 py-4 w-full bg-neutral-200/40  focus:outline-none"
                            id=""
                            {...register("name", { required: true })}
                        />
                        {errors?.name?.type === "required" && (
                            <p className="text-red-500">Name is empty field</p>
                        )}
                    </span>
                    <span className="flex flex-col mb-4">
                        <label
                            htmlFor=""
                            className="text-2xl text-neutral-500 py-4 xs:text-xl xs:py-2"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name=""
                            placeholder="Enter your Email"
                            className="xs:px-3 xs:py-2 px-5 py-4 w-full bg-neutral-200/40  focus:outline-none"
                            id=""
                            {...register("email", { required: true })}
                        />
                        {errors?.email?.type === "required" && (
                            <p className="text-red-500">email is empty field</p>
                        )}
                    </span>
                    <span className="flex flex-col mb-4">
                        <label
                            htmlFor=""
                            className="text-2xl text-neutral-500 py-4 xs:text-xl xs:py-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name=""
                            placeholder="Enter your Password"
                            className="xs:px-3 xs:py-2 px-5 py-4 w-full bg-neutral-200/40  focus:outline-none"
                            id=""
                            {...register("password", {
                                required: true,
                                minLength: 6,
                            })}
                        />
                        {errors?.password?.type === "required" && (
                            <p className="text-red-500">
                                password must be filled
                            </p>
                        )}
                        {errors?.password?.type === "minLength" && (
                            <p className="text-red-500">
                                password length must be at least 6
                            </p>
                        )}
                        {pwd !== confPwd && (
                            <p className="text-red-500">
                                Password must be same
                            </p>
                        )}
                    </span>
                    <span className="flex flex-col mb-4">
                        <label
                            htmlFor=""
                            className="text-2xl text-neutral-500 py-4 xs:text-xl xs:py-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name=""
                            placeholder="Confirm Password"
                            className="xs:px-3 xs:py-2 px-5 py-4 w-full bg-neutral-200/40  focus:outline-none"
                            id=""
                            {...register("cf_password", { required: true })}
                        />

                        {errors?.cf_password?.type === "required" && (
                            <p className="text-red-500">
                                Confirm Password is empty field
                            </p>
                        )}
                    </span>
                    <Button className="my-5 text-xl py-4 xs:py-2 xs:text-base">
                        Create Account
                    </Button>
                </form>
            </div>
        </section>
    );
}
