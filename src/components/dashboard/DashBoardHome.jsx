import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

import { GrView } from "react-icons/gr";

import { Link } from "react-router-dom";
import axios from "axios";

export default function DashBoardHome() {
    const token = localStorage.getItem("token");
    console.log(token);
    const [users, setUsers] = useState([]);
    const [serviceItems, setServiceItems] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/v1/users", {
                headers: {
                    Authorization: `Bearer ${token} `,
                },
            })
            .then((resp) => {
                setUsers(resp.data.user);
                console.log(users);
            })
            .catch((err) => console.log(err));

        axios
            .get("http://localhost:3000/api/v1/serviceItems", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => {
                setServiceItems(resp.data.data);
                console.log(serviceItems);
            })
            .catch((err) => console.log(err));
        axios
            .get("http://localhost:3000/api/v1/products", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => setProducts(resp.data.products))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className=" mx-10   mt-20">
            <h1 className="text-3xl font-bold">Welcome Mg Kaung </h1>

            <div className=" my-6">
                <h1 className="text-3xl mb-8 text-orange-500">User Lists</h1>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Email</TableHead>

                            <TableHead>View</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.map((user, idx) => (
                            <TableRow key={user._id}>
                                <TableCell className="font-medium">
                                    {user.name}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>

                                <TableCell className="font-medium">
                                    <Link to={`/dashboard/user/${user._id}`}>
                                        <GrView />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className=" my-6">
                <h1 className="text-3xl mb-8 text-orange-500">
                    Service Item Lists
                </h1>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="">Status</TableHead>
                            <TableHead className="">Assigned</TableHead>
                            <TableHead className="">View</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {serviceItems.map((serviceItem, idx) => (
                            <TableRow key={serviceItem.id}>
                                <TableCell className="font-medium">
                                    {serviceItem.name}
                                </TableCell>
                                <TableCell>{serviceItem.email}</TableCell>
                                <TableCell>{serviceItem.description}</TableCell>
                                <TableCell>{serviceItem.status}</TableCell>
                                <TableCell>
                                    {serviceItem.status === "pending" &&
                                        "unassigned"}
                                </TableCell>
                                <TableCell>
                                    <Link
                                        to={`/dashboard/assignTask/${serviceItem._id}`}
                                    >
                                        <GrView />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className=" my-6">
                <h1 className="text-3xl mb-8 text-orange-500">Product Lists</h1>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Color</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="">Category</TableHead>
                            <TableHead className="">Description</TableHead>

                            <TableHead className="">View</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product, idx) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">
                                    {product.name}
                                </TableCell>
                                <TableCell>{product.color}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>
                                    {product.description.slice(0, 30)}
                                </TableCell>

                                <TableCell>
                                    <Link
                                        to={`/dashboard/product/${product._id}`}
                                    >
                                        <GrView />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
