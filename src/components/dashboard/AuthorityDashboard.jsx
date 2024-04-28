import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AuthorityDashboard() {
    return (
        <>
            <section className="flex  ">
                <aside className="border-black/10 border-r-2 relative   h-screen 2xl:w-[14%]   ">
                    <ul
                        className="absolute left-2 text-center top-[20%] flex flex-col justify-center items-center  gap-y-8  font-semibold text-3x2"
                        id="admin"
                    >
                        <NavLink to={"/admin"}>
                            <li className="px-3 py-2 border-l-8 border-black  h-full w-full">
                                Home
                            </li>
                        </NavLink>
                        <NavLink to={"/assignedTasks"}>
                            <li className="px-3 py-2">AssignTasks</li>
                        </NavLink>
                        <NavLink to={"/addproducts"}>
                            <li className="px-3 py-2">Product</li>
                        </NavLink>

                        <NavLink to={"/assignTechnician"}>
                            <li className="px-3 py-2">Technicians</li>
                        </NavLink>
                    </ul>
                </aside>
                <Outlet />
            </section>
        </>
    );
}
