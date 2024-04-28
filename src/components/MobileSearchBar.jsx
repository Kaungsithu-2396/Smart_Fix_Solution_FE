import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import SearchBarItem from "./SearchBarItem";
export default function MobileSearchBar({ searchBar, setSearchBar }) {
    const [showSearchItem, setShowSearchItem] = useState(false);
    return (
        <>
            {searchBar && (
                <>
                    <div className=" lg:hidden absolute transistion-all duration-300 delay-300 top-0 bg-white w-full h-[30%]">
                        <div className="flex justify-center items-center  py-5 ">
                            <CiSearch className="font-bold" />
                            <input
                                type="text"
                                name=""
                                placeholder="Search"
                                className="border-b-2 border-black/40 focus:outline-none px-2 py-3"
                                id=""
                                onChange={() => setShowSearchItem(true)}
                            />
                            <div
                                className="mx-5"
                                onClick={() => setSearchBar(false)}
                            >
                                <RxCross1 />
                            </div>
                        </div>
                    </div>
                    <div className=" lg:hidden rounded-md absolute z-50 left-[15%] bg-white h-fit md:w-[70%] w-[80%] top-[12%] md:top-[8%] ">
                        {showSearchItem && (
                            <>
                                <SearchBarItem />
                                <SearchBarItem />
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
