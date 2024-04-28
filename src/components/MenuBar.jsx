import React from "react";
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
export default function MenuBar() {
    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="focus:outline-none">
                        <RiAccountPinCircleFill />
                    </MenubarTrigger>
                    <MenubarContent>
                        <Link to={"/login"}>
                            <MenubarItem className=" font-bold">
                                <IoMdLogIn /> &nbsp; Log in
                            </MenubarItem>
                        </Link>

                        <MenubarSeparator />
                        <Link to={"/register"}>
                            <MenubarItem className="font-bold text-white bg-orange-500">
                                <BsFillBookmarkPlusFill />
                                &nbsp; Register
                            </MenubarItem>
                        </Link>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
