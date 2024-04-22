import React from "react";
import Banner from "./Banner";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
export default function Nav() {
    return (
        <div className="">
            <Banner />
            <div className="  my-4 relative ">
                <nav className="md:flex hidden mx-4  lg:justify-around md:justify-around md:gap-x-5  lg:gap-x-8  items-center text-center">
                    <div className=" md:block lg:hidden"></div>
                    <ul className=" md:ml-[2rem]  xl:ml-[10rem]   flex justify-center items-center lg:gap-x-6 lg:gap-y-6 md:gap-10 cursor-pointer min-h-fit">
                        <li className="hover:font-bold hover:text-orange-400 hover:scale-110  transition-all delay-150 duration-100 ">
                            Home
                        </li>
                        <li className="hover:font-bold hover:text-orange-400 hover:scale-110 transition-all delay-150 duration-150 ">
                            About
                        </li>
                        <li className="hover:font-bold hover:text-orange-400 hover:scale-110 transition-all delay-150 duration-150 ">
                            Shop
                        </li>
                        <li className="hover:font-bold hover:text-orange-400 hover:scale-110 transition-all delay-150 duration-150 ">
                            Service
                        </li>
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
        </div>
    );
}
