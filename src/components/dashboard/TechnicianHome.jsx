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
export default function TechnicianHome() {
    return (
        <>
            <section className="flex flex-col  m-9  w-full">
                <h1 className="text-4xl m-5  font-semibold text-orange-500">
                    {" "}
                    Assigned Tasks Lists{" "}
                </h1>
                <div className="w-full">
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="">Status</TableHead>

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
                                        <Link
                                            to={`/technicians/items/${invoice.id}`}
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
        </>
    );
}
