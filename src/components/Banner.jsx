import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import MenuBar from "./MenuBar";
import MobileSearchBar from "./MobileSearchBar";
import CartItem from "./CartItem";
export default function Banner() {
    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, []);
    const [searchBar, setSearchBar] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <MobileSearchBar
                searchBar={searchBar}
                setSearchBar={setSearchBar}
            />
            <div className=" lg:hidden flex justify-around pt-3 mb-2 text-xl items-center">
                <div className=" w-[50%] m-auto relative flex justify-center items-center border-r-2 border-black">
                    <div className=" w-5 h-5 absolute top-[-10px] right-[36%] text-sm   bg-red-500 text-white rounded-full flex justify-center items-center">
                        5
                    </div>
                    <BsCart onClick={() => setShowCart(!showCart)} />
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
                    <div
                        className="md:hidden text-3xl "
                        onClick={() => setShowNav(!showNav)}
                    >
                        {showNav ? <RxCross1 /> : <RxHamburgerMenu />}
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
                    <span
                        className="text-2xl hover:scale-110 delay-150 duration-150 cursor-pointer relative "
                        onClick={() => setShowCart(!showCart)}
                    >
                        <div className=" w-5 h-5 absolute top-[-10px] right-[-10px] text-base   bg-red-500 text-white rounded-full flex justify-center items-center">
                            5
                        </div>
                        <BsCart />
                    </span>
                </div>
            </div>
            {showNav && (
                <div className="md:hidden z-50 absolute bg-white w-full h-full flex justify-center pt-8 ">
                    <hr />
                    <ul className="text-center text-3xl flex flex-col gap-9">
                        <NavLink to={"/"}>
                            {" "}
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={"/about"}>
                            {" "}
                            <li>About</li>
                        </NavLink>
                        <NavLink to={"/shop"}>
                            {" "}
                            <li>Shop</li>
                        </NavLink>
                        <NavLink to={"/service"}>
                            {" "}
                            <li>Service</li>
                        </NavLink>
                        <NavLink to={"/tracking"}>
                            {" "}
                            <li>Tracking</li>
                        </NavLink>
                    </ul>
                </div>
            )}
            {showCart && (
                <div className="  h-fit">
                    {" "}
                    <div className="absolute top-0 right-0 h-full overflow-scroll bg-white z-50 w-full lg:w-[60%] 2xl:w-[40%]">
                        <h1 className="text-4xl m-5 p-4 flex justify-between items-center bg-white/50 sticky top-0 ">
                            Cart Items{" "}
                            <span
                                className="cursor-pointer"
                                onClick={() => setShowCart(false)}
                            >
                                <RxCross1 />
                            </span>{" "}
                        </h1>
                        <div className=" ">
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                            <CartItem
                                img={
                                    "https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_medium.jpg?v=1694843285"
                                }
                                model={"IPhone 14 Pro max"}
                                count={5}
                                price={4200}
                            />
                        </div>
                    </div>
                    {/* <div className="absolute w-full   top-0 bg-black/50 h-full z-40 "></div> */}
                </div>
            )}
            {/* <div className=" bg-black/10 h-1"></div> */}
            <hr className="hidden md:block" />
        </>
    );
}
