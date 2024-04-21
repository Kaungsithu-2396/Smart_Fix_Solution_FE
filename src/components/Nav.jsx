import React from "react";
import Banner from "./Banner";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Nav() {
    return (
        <div className="">
            <Banner />
            <div className=" my-6 relative ">
                <nav className="flex lg:justify-around md:justify-center md:gap-x-7  lg:gap-x-8  items-center text-center">
                    <div className=" cursor-pointer text-center flex justify-center items-center gap-2 text-xl">
                        <span className="hover:scale-105 duration-150 delay-200">
                            <FaGithub />
                        </span>
                        <span className="hover:scale-105 duration-150 delay-200 hover:text-blue-500">
                            <FaLinkedin />
                        </span>
                    </div>
                    <ul className=" md:mx-[2rem]  lg:ml-[8rem] flex justify-center items-center gap-x-6 gay-y-6 cursor-pointer min-h-fit">
                        <li className="hover:font-bold hover:scale-110  transition-all delay-150 duration-100 ">
                            Home
                        </li>
                        <li className="hover:font-bold hover:scale-110 transition-all delay-150 duration-150 ">
                            About
                        </li>
                        <li className="hover:font-bold hover:scale-110 transition-all delay-150 duration-150 ">
                            Shop
                        </li>
                        <li className="hover:font-bold hover:scale-110 transition-all delay-150 duration-150 ">
                            Service
                        </li>
                    </ul>
                    <div className="">
                        <button className=" bg-orange-400 text-black hover:scale-105 rounded-md hover:text-white transition-all duration-100 delay-150 px-3 py-2">
                            Register
                        </button>
                        <button className=" border-2 mx-2 border-black text-black hover:scale-105 rounded-md  transition-all duration-100 delay-150 px-3 py-2">
                            login
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
