import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "./ui/menubar";
export default function Banner() {
    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, []);
    return (
        <>
            <div className=" lg:py-5 md:py-4 flex lg:justify-around md:justify-center items-center h-100vh cursor-pointer">
                <div className="relative justify-center items-center md:hidden  lg:flex">
                    <span className="text-xl absolute left-2 lg:hidden xl:block">
                        <CiSearch />
                    </span>
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={searchInput}
                        placeholder="search"
                        className="border-b-2 border-b-black/20 focus:outline-none lg:px-2 xl:px-8  py-2"
                    />
                </div>
                <p className=" text-4xl tracking-wide text-orange-400 font-bold ">
                    Smart <span className=" ">Fix</span> <br />
                    <span className="text-black/80 text-3xl text-center flex justify-center items-center ">
                        Solution
                    </span>
                </p>
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
            <hr />
        </>
    );
}
