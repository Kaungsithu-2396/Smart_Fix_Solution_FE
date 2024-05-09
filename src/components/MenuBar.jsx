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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthStatus from "@/hooks/useAuth";
export default function MenuBar() {
    const isLoggedIn = useAuthStatus("token");
    const [verifyLogin, setVerifyLogin] = useState(isLoggedIn);
    const navigate = useNavigate();
    useEffect(() => {
        setVerifyLogin(isLoggedIn);
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
                                        localStorage.removeItem("user");
                                        setVerifyLogin(false);
                                        window.location.reload();
                                        navigate("/");
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
