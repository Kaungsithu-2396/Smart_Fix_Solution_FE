import React from "react";
import Banner from "./Banner";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Nav() {
    return (
        <div className=" ">
            <Banner />
            <div className=" py-4 relative ">
                <nav className="md:flex  hidden mx-4  lg:justify-around md:justify-around md:gap-x-5  lg:gap-x-8  items-center text-center">
                    <div className=" md:block lg:hidden"></div>
                    <ul className=" md:ml-[2rem] xl:ml-[10rem]   flex justify-center items-center lg:gap-x-6 lg:gap-y-6 md:gap-10 cursor-pointer min-h-fit">
                        <NavLink to={"/"}>
                            <li className="hover:font-bold  hover:scale-110  transition-all delay-150 duration-100 ">
                                Home
                            </li>
                        </NavLink>
                        <NavLink to={"/about"}>
                            <li className="hover:font-bold  hover:scale-110 transition-all delay-150 duration-150 ">
                                About
                            </li>
                        </NavLink>

                        <NavLink to={"/shop"}>
                            <li className="hover:font-bold  hover:scale-110 transition-all delay-150 duration-150 ">
                                Shop
                            </li>
                        </NavLink>
                        <NavLink to={"/service"}>
                            <li className="hover:font-bold  hover:scale-110 transition-all delay-150 duration-150 ">
                                Service
                            </li>
                        </NavLink>
                        <NavLink to={"/tracking"}>
                            <li className="hover:font-bold  hover:scale-110 transition-all delay-150 duration-150 ">
                                Tracking
                            </li>
                        </NavLink>
                    </ul>
                    <div className=" lg:hidden md:flex justify-center items-center gap-x-3">
                        <span className="text-2xl hover:scale-110 delay-150 duration-150 cursor-pointer hover:text-orange-400">
                            {" "}
                            <RiAccountPinCircleFill />
                        </span>
                        <span className="text-2xl hover:scale-110 delay-150 duration-150 cursor-pointer hover:text-orange-400">
                            <BsCart />
                        </span>
                    </div>
                </nav>
            </div>
            <hr />

            <Outlet />
            <Footer />
        </div>
    );
}
