import React from "react";
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
const invoices = [
    {
        id: 1,
        name: "Kaung Si Thu",
        email: "Kgkg@gmail.com",
        description: "Broken screen",
        status: "pending",
        assigned: "",
    },
    {
        id: 2,
        name: "Kaung Si Thu",
        email: "Kgkg@gmail.com",
        description: "Broken screen",
        status: "pending",
        assigned: "",
    },
    {
        id: 3,
        name: "Kaung Si Thu",
        email: "Kgkg@gmail.com",
        description: "Broken screen",
        status: "pending",
        assigned: "",
    },
    {
        id: 4,
        name: "Kaung Si Thu",
        email: "Kgkg@gmail.com",
        description: "Broken screen",
        status: "pending",
        assigned: "",
    },
    {
        id: 5,
        name: "Kaung Si Thu",
        email: "Kgkg@gmail.com",
        description: "Broken screen",
        status: "pending",
        assigned: "",
    },
    {
        id: 6,
        name: "Kaung Si Thu",
        email: "Kgkg@gmail.com",
        description: "Broken screen",
        status: "pending",
        assigned: "",
    },
];
export default function DashBoardHome() {
    return (
        <section className=" mx-10   mt-20">
            <h1 className="text-3xl font-bold">Welcome Mg Kaung </h1>

            <div className="my-9 flex justify-center items-center lg:flex-row flex-col gap-10">
                <div className="border-2 lg:w-[17vw] w-full text-center rounded-md  p-10 border-black/20">
                    <h1 className="text-3xl ">Category</h1>
                    <p className="text-2xl pt-4 text-center font-bold text-orange-500">
                        5
                    </p>
                </div>
                <div className="border-2 lg:w-[17vw] w-full text-center rounded-md  p-10 border-black/20">
                    <h1 className="text-3xl">User</h1>
                    <p className="text-2xl pt-4 text-center">5</p>
                </div>
                <div className="border-2 lg:w-[17vw] w-full text-center rounded-md  p-10 border-black/20">
                    <h1 className="text-3xl">Technicians</h1>
                    <p className="text-2xl pt-4 text-center">5</p>
                </div>
                <div className="border-2  lg:w-[17vw] w-full text-center rounded-md  p-10 border-black/20">
                    <h1 className="text-3xl">Products</h1>
                    <p className="text-2xl pt-4 text-center">5</p>
                </div>
            </div>
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
                        {invoices.map((invoice, idx) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">
                                    {invoice.name}
                                </TableCell>
                                <TableCell>{invoice.email}</TableCell>

                                {/* <TableCell className="flex gap-5">
                                    <Link
                                        to={`/dashboard/assignTask/${invoice.id}`}
                                    >
                                        <FaRegTrashAlt />
                                    </Link>
                                    <Link
                                        to={`/dashboard/assignTask/${invoice.id}`}
                                    >
                                        <GrUpdate />
                                    </Link>
                                </TableCell> */}
                                <TableCell className="font-medium">
                                    <Link to={`/dashboard/user/${invoice.id}`}>
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
                        {invoices.map((invoice, idx) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">
                                    {invoice.name}
                                </TableCell>
                                <TableCell>{invoice.email}</TableCell>
                                <TableCell>{invoice.description}</TableCell>
                                <TableCell>{invoice.status}</TableCell>
                                <TableCell>
                                    {invoice.assigned === ""
                                        ? "Not Assigned"
                                        : " assigned"}
                                </TableCell>
                                <TableCell>
                                    <Link
                                        to={`/dashboard/assignTask/${invoice.id}`}
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
                            <TableHead className="">Stock Items</TableHead>

                            <TableHead className="">View</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, idx) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">
                                    {invoice.name}
                                </TableCell>
                                <TableCell>{invoice.email}</TableCell>
                                <TableCell>{invoice.description}</TableCell>
                                <TableCell>{invoice.status}</TableCell>
                                <TableCell>minglar par</TableCell>
                                <TableCell>minglar par</TableCell>

                                <TableCell>
                                    <Link
                                        to={`/dashboard/product/${invoice.id}`}
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
