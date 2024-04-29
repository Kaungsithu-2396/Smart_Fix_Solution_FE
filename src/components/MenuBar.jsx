import React, { useEffect, useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "./ui/menubar";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuthStatus from "@/hooks/useAuth";
export default function MenuBar() {
    const isLoggedIn = useAuthStatus("token");
    const [verifyLogin, setVerifyLogin] = useState(isLoggedIn);

    useEffect(() => {
        setVerifyLogin(isLoggedIn);
        console.log("render", isLoggedIn);
    }, []);
    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="focus:outline-none">
                        <RiAccountPinCircleFill />
                    </MenubarTrigger>
                    <MenubarContent>
                        {verifyLogin ? (
                            <>
                                <MenubarItem
                                    className=" font-bold"
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        setVerifyLogin(false);
                                        window.location.reload();
                                    }}
                                >
                                    <IoMdLogIn /> &nbsp; Log out
                                </MenubarItem>
                                {JSON.parse(localStorage.getItem("user"))
                                    ?.role === "admin" && (
                                    <Link to={"/dashboard"}>
                                        <MenubarItem
                                            className="font-bold text-black"
                                            onClick={() => {
                                                setVerifyLogin(true);
                                            }}
                                        >
                                            Dashboard
                                        </MenubarItem>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link to={"/login"}>
                                    <MenubarItem
                                        className=" font-bold"
                                        onClick={() => {
                                            setVerifyLogin(true);
                                        }}
                                    >
                                        <IoMdLogIn /> &nbsp; Log in
                                    </MenubarItem>
                                </Link>

                                <MenubarSeparator />
                                <Link to={"/register"}>
                                    <MenubarItem
                                        className="font-bold text-white bg-orange-500"
                                        onClick={() => {
                                            setVerifyLogin(true);
                                        }}
                                    >
                                        <BsFillBookmarkPlusFill />
                                        &nbsp; Register
                                    </MenubarItem>
                                </Link>
                                <MenubarSeparator />
                                <Link to={"/technicians/login"}>
                                    <MenubarItem
                                        className="font-bold text-black"
                                        onClick={() => {
                                            setVerifyLogin(true);
                                        }}
                                    >
                                        <BsFillBookmarkPlusFill />
                                        &nbsp; Technicians
                                    </MenubarItem>
                                </Link>
                            </>
                        )}
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
