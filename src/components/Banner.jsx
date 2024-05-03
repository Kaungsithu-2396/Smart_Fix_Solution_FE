import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar";
import MobileSearchBar from "./MobileSearchBar";
import CartItem from "./CartItem";
import { Button } from "./ui/button";
import axios from "axios";
export default function Banner() {
    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, []);
    const [searchBar, setSearchBar] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    let token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/v1/cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setCartItem(response.data.data))
            .catch((error) => console.log(error));
    }, [token]);
    const orderHandler = () => {
        axios
            .delete("http://localhost:3000/api/v1/cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => console.log(resp.data))
            .catch((err) => console.log(err));
        setShowCart(false);
        alert("Checkout success");
        window.location.reload();
    };
    return (
        <>
            <MobileSearchBar
                searchBar={searchBar}
                setSearchBar={setSearchBar}
            />
            <div className=" lg:hidden flex justify-around pt-3 mb-2 text-xl items-center">
                <div className=" w-[50%] m-auto relative flex justify-center items-center border-r-2 border-black">
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
                        onClick={() => {
                            setShowCart(!showCart);
                        }}
                    >
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
                            {cartItem.map((el) => {
                                return (
                                    <CartItem
                                        count={el.products[0].count}
                                        id={el.products[0].productId}
                                    />
                                );
                            })}
                            {cartItem.length === 0 && (
                                <h1 className="text-center font-bold">
                                    No Item selected
                                </h1>
                            )}
                            {cartItem.length > 0 && (
                                <Button
                                    className="w-full"
                                    onClick={orderHandler}
                                >
                                    Order
                                </Button>
                            )}
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
