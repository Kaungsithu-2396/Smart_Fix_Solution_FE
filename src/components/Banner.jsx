import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "./ui/menubar";
import { Link } from "react-router-dom";
export default function Banner() {
    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, []);
    return (
        <>
            <div className=" lg:py-5 md:py-4 flex   md:justify-center lg:justify-around items-center h-100vh cursor-pointer">
                <div className="relative justify-center items-center hidden lg:flex">
                    <span className="text-xl absolute left-2 lg:hidden xl:block">
                        <CiSearch />
                    </span>
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={searchInput}
                        placeholder="search"
                        className="border-2 border-black/20 rounded-sm focus:outline-none lg:px-2 xl:px-8  py-2"
                    />
                </div>

                <div className=" flex md:block justify-between mx-5 md:mx-0 w-full md:w-auto items-center">
                    <Link to={"/"}>
                        <p className=" md:text-4xl text-2xl pt-3 px-2  tracking-wide text-orange-400 font-bold ">
                            Smart <span className=" ">Fix</span> <br />
                            <span className="text-black/80  md:text-3xl md:text-center md:flex md:justify-center md:items-center ">
                                Solution
                            </span>
                        </p>
                    </Link>
                    <div className="md:hidden text-3xl ">
                        <RxHamburgerMenu />
                    </div>
                </div>

                <div className=" hidden lg:flex justify-center items-center gap-x-3">
                    <span className="text-2xl hover:scale-110 delay-150 duration-150 cursor-pointer hover:text-orange-400">
                        {/* <RiAccountPinCircleFill /> */}
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    <RiAccountPinCircleFill />
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem className=" font-bold">
                                        <IoMdLogIn /> &nbsp; Log in
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem className="font-bold text-white bg-orange-500">
                                        <BsFillBookmarkPlusFill />
                                        &nbsp; Register
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </span>
                    <span className="text-2xl hover:scale-110 delay-150 duration-150 cursor-pointer hover:text-orange-400">
                        <BsCart />
                    </span>
                </div>
            </div>
            {/* <div className=" bg-black/10 h-1"></div> */}
            <hr className="hidden md:block" />
        </>
    );
}
