import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

export default function TechnicianBoard() {
    return (
        <>
            <section className="flex flex-col 2xl:flex-row  ">
                {/* mobile */}
                <div className="block 2xl:hidden mt-7">
                    <Link to={"/"}>
                        <h1 className="text-3xl text-center mb-5 font-semibold ">
                            <span className="text-orange-500">Smart</span>Fix{" "}
                            <br />
                            Solution
                        </h1>
                    </Link>
                    <hr />
                    <div className="grid grid-cols-2 font-semibold justify-center text-center items-center gap-6 m-5">
                        <Link to={"/technicians"}>
                            {" "}
                            <span>Products</span>
                        </Link>
                        <Link to={"/dashboard/addproducts"}>
                            <span>Technicians</span>
                        </Link>
                    </div>
                    <hr />
                </div>
                <aside className="border-black/10 border-r-2 relative hidden 2xl:block    h-screen 2xl:w-[14%]   ">
                    <Link to={"/"}>
                        <h1 className="text-3xl text-center mt-5 font-bold">
                            <span className="text-orange-500">Smart</span>{" "}
                            <span>Fix Solution</span>
                        </h1>
                    </Link>
                    <ul
                        className="absolute left-20 text-center top-[20%] flex flex-col justify-center items-center  gap-y-8   text-3x2"
                        id="admin"
                    >
                        <Link to={"/technicians"}>
                            <li className="px-3 py-2  border-black  h-full w-full hover:scale-105 duration-200 delay-200 hover:font-bold">
                                Products
                            </li>
                        </Link>

                        <Link to={"/dashboard/addproducts"}>
                            <li className="px-3 py-2 hover:scale-105 duration-200 delay-200 hover:font-bold">
                                Account Detail
                            </li>
                        </Link>
                    </ul>
                </aside>
                <Outlet />
            </section>
        </>
    );
}
