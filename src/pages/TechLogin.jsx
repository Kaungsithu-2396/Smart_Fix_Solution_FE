import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import axios from "axios";
export default function TechnLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [error, setError] = useState("");
    const onSubmit = (data) => {
        axios
            .post("http://localhost:3000/api/v1/technicians/login", {
                email: data.email,
                password: data.password,
            })
            .then((resp) => {
                setError("");
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("user", JSON.stringify(resp.data.data));

                alert("success");
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.message);
            });
    };
    return (
        <>
            <section className="flex flex-col  justify-center items-center w-full my-5">
                <h1 className=" font-bold text-3xl">Technician Log In</h1>
                <h2 className="text-center text-red-500">{error && error}</h2>
                <form
                    action=""
                    encType={"multipart/form-data"}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-[50%] w-full  mt-3 px-8 py-10 rounded-md border-black/30 "
                >
                    <span className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            className="bg-neutral-300/20 px-8  py-2 border-1 border-black/30 rounded-md my-2"
                            name=""
                            id=""
                            {...register("email", { required: true })}
                        />
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            name=""
                            id=""
                            className="bg-neutral-300/20 px-8  py-2 border-1 border-black/30 rounded-md my-2"
                            {...register("password", { required: true })}
                        />
                    </span>

                    <Button type="submit" className="my-5">
                        Submit
                    </Button>
                </form>
            </section>
        </>
    );
}
