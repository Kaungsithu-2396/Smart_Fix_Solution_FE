import axios from "axios";
import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        axios
            .post("http://localhost:3000/api/v1/users/login", data)
            .then((response) => {
                setError(false);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                navigate("/");
            })
            .catch((error) => setError(true));
        reset();
    };
    return (
        <section className="2xl:h-screen">
            <h1 className="text-center font-semibold text-2xl lg:text-4xl my-8 uppercase">
                Already Registered ?
            </h1>

            <div className="mx-4 grid grid-cols-1 2xl:grid-cols-2 mt-12 justify-center items-center gap-5">
                <div className="border-2 2xl:p-20 lg:p-10 p-8 my-3 h-full rounded-md border-black/10">
                    <h1 className="text-3xl">New Customer</h1>
                    <p className=" text-neutral-500  my-4">
                        By creating an account with our store, you will be able
                        to move through the checkout process faster, store
                        multiple shipping addresses, view and track your orders
                        in your account and more.
                    </p>
                    <div className="my-4">
                        <Link to={"/register"}>
                            {" "}
                            <Button>Create Account</Button>
                        </Link>
                    </div>
                </div>
                <div className="border-2 border-black/10 2xl:p-20 lg:p-10 p-8 ">
                    <h1 className="uppercase text-3xl">Login</h1>
                    <p className="text-neutral-500 mt-4">
                        If you have an account with us, please log in
                    </p>
                    <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-red-500">
                            {error && "Email or Password Incorrect"}
                        </h1>
                        <div className="flex flex-col">
                            <label
                                htmlFor=""
                                className="text-2xl text-neutral-500 py-4 "
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name=""
                                className="border-1 border-black rounded-md px-5 py-3 mb-3 w-full lg:w-[60%] bg-neutral-200/30"
                                id=""
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                            {errors?.email?.type == "required" && (
                                <p className="text-red-500 py-3">
                                    Email field is empty
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor=""
                                className="text-2xl text-neutral-500 py-4 "
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name=""
                                className="border-1 border-black rounded-md px-5 py-3 w-full lg:w-[60%] bg-neutral-200/30"
                                id=""
                                placeholder="Password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            {errors?.password?.type == "required" && (
                                <p className="text-red-500 py-3">
                                    Passowrd field is empty
                                </p>
                            )}
                        </div>
                        <br />
                        <Button className="my-4">Log In</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
