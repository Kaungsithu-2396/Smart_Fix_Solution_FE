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
import axios from "axios";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function TechnicianHome() {
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/v1/technicians/serviceItems", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => setData(resp.data.data))
            .catch((err) => console.log(err));
    }, []);
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
                            {data.length > 0 ? (
                                data.map((el, idx) => (
                                    <TableRow key={el.id}>
                                        <TableCell className="font-medium">
                                            {el.name}
                                        </TableCell>
                                        <TableCell>{el.email}</TableCell>
                                        <TableCell>{el.description}</TableCell>
                                        <TableCell>{el.status}</TableCell>
                                        <Link
                                            to={`/technicians/reportTask/${el._id}`}
                                        >
                                            <TableCell className="cursor-pointer">
                                                <GrView />
                                            </TableCell>
                                        </Link>
                                    </TableRow>
                                ))
                            ) : (
                                <h1 className="text-center m-5 text-3xl text-red-500">
                                    No task assigned
                                </h1>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}
