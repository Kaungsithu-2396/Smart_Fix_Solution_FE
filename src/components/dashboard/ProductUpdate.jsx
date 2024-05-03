import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ProductUpdate() {
    const { productID } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState("");
    const token = localStorage.getItem("token");
    const { register, handleSubmit, getValues, setValue, reset } = useForm();
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/products/${productID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setProduct(res.data.product);
                reset(res.data.product);
            })
            .catch((err) => console.log(err));
    }, []);
    // reset({
    //     name: product.name,
    //     color: product.color,
    //     price: product.price,
    //     description: product.description,
    //     stockItem: product.stockItem,
    // });
    const categoryCol = [
        { id: 1, name: "phone" },
        { id: 2, name: "tablet" },
        { id: 3, name: "airpod" },
    ];
    //setting api values as default value in react hook form
    const data = getValues();
    let { name, color, price, description, stockItem } = data;
    // console.log(
    //     "name",
    //     name,
    //     "color",
    //     color,
    //     "price",
    //     price,
    //     "description",
    //     description,
    //     "stockItem",
    //     stockItem
    // );
    const onSubmit = (data) => console.log(data, trackImage);
    const [trackImage, setTrackImage] = useState("");
    const [category, setCategory] = useState("");
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const updateHandler = async () => {
        let imgBase64 = "";
        if (trackImage) {
            try {
                imgBase64 = await toBase64(trackImage);
            } catch (error) {
                console.error("Error reading image file:", error);
                return; // Early return on error
            }
        }
        const image = await toBase64(trackImage);
        console.log(image);
        name = getValues("name");
        color = getValues("color");
        price = getValues("price");
        description = getValues("description");
        stockItem = getValues("stockItem");
        console.log(name, color, price, description, stockItem);
        axios
            .put(
                `http://localhost:3000/api/v1/products/${productID}`,
                {
                    name,
                    color,
                    price,
                    description,
                    category,
                    stockItem,
                    img: imgBase64,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((resp) => {
                alert("success update");
            })
            .catch((err) => console.log(err));
    };
    const deleteHandler = () => {
        axios
            .delete(`http://localhost:3000/api/v1/products/${productID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => {
                alert("delete success");
                navigate("/dashboard");
            })
            .catch((err) => console.log(err));
    };
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
                        name="name"
                        id="name"
                        defaultValue={product.name}
                        className="bg-neutral-300/20 px-3  py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("name", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Color</label>
                    <input
                        type="text"
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        name="color"
                        defaultValue={product.color}
                        id="color"
                        {...register("color", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        defaultValue={product.price}
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("price", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        defaultValue={product.description}
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("description", { required: true })}
                    />
                </span>
                <span className="flex flex-col">
                    <label htmlFor="">Stock Item</label>
                    <input
                        type="text"
                        name="stock"
                        id="stock"
                        defaultValue={product.stockItem}
                        className="bg-neutral-300/20 px-3 py-2 border-2 border-black/30 rounded-md my-2"
                        {...register("stockItem", { required: true })}
                    />
                </span>
                <span className="flex flex-col my-5">
                    <label htmlFor="">Image</label>
                    <input
                        type="file"
                        name=""
                        id=""
                        onChange={(e) => setTrackImage(e.target.files[0] || "")}
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

                {/* <Button type="submit" className="my-5">
                    Submit
                </Button> */}
                <span className="flex gap-4 justify-between">
                    <Button
                        onClick={deleteHandler}
                        className=" bg-red-500 my-2 w-[50%] m-auto"
                    >
                        Delete
                    </Button>
                    <Button
                        type="button"
                        className=" bg-cyan-400  my-2 w-[50%] m-auto"
                        onClick={updateHandler}
                    >
                        Update
                    </Button>
                </span>
            </form>
        </section>
    );
}
