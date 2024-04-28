import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import { BsCart } from "react-icons/bs";

import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import MobileSearchBar from "./MobileSearchBar";
export default function Banner() {
    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, []);
    const [searchBar, setSearchBar] = useState(false);
    return (
        <>
            <MobileSearchBar
                searchBar={searchBar}
                setSearchBar={setSearchBar}
            />
            <div className=" lg:hidden flex justify-around pt-3 mb-2 text-xl items-center">
                <div className=" w-[50%] m-auto flex justify-center items-center border-r-2 border-black">
                    <BsCart />
                </div>

                <div
                    className=" w-[50%] m-auto flex justify-center items-center"
                    onClick={() => setSearchBar(true)}
                >
                    <CiSearch />
                </div>
            </div>
            <hr />
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

                <div className="flex  md:block  justify-between mx-5 md:mx-0 w-full md:w-auto items-center">
                    <div className="md:hidden text-3xl ">
                        <RxHamburgerMenu />
                    </div>
                    <Link to={"/"}>
                        <p className=" md:text-4xl text-2xl pt-3 px-2  tracking-wide text-orange-400 font-bold ">
                            Smart <span className=" ">Fix</span> <br />
                            <span className="text-black/80  md:text-3xl md:text-center md:flex md:justify-center md:items-center ">
                                Solution
                            </span>
                        </p>
                    </Link>

                    <div className="md:hidden text-2xl justify-center items-center flex-row-reverse flex ">
                        <span className="">
                            <MenuBar />
                        </span>
                    </div>
                </div>

                <div className=" hidden lg:flex justify-center items-center gap-x-3">
                    <span className="text-2xl hover:scale-110 delay-150 duration-150 cursor-pointer hover:text-orange-400">
                        <MenuBar />
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
