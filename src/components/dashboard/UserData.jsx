import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function UserData() {
    const { userID } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/users/${userID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((err) => console.log(err));
    }, []);

    const categoryCol = [
        { id: 1, name: "phone" },
        { id: 2, name: "tablet" },
        { id: 3, name: "airpod" },
    ];
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = () => {
        axios
            .delete(`http://localhost:3000/api/v1/users/${userID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => {
                alert("success");
                console.log(resp.data);
                navigate("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="flex flex-col justify-center items-center w-full mt-5">
            <h1 className="text-3xl">Product Customization</h1>
            <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:w-[60%] w-full  mt-3 px-8 py-10 rounded-md border-black/30 "
            >
                <span className="flex flex-col">
                    <label htmlFor=" text-bold ">Name</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={user.name}
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
                        defaultValue={user.email}
                        {...register("Email", { required: true })}
                    />
                </span>

                <Button type="submit" className="my-5" onClick={onSubmit}>
                    Delete
                </Button>
            </form>
        </section>
    );
}
