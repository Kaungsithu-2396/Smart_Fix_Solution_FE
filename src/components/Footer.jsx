import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <footer className=" bg-neutral-50 py-4">
            <div className="flex justify-center items-center font-semibold md:text-xl">
                <FaRegCopyright />
                {"  "}&nbsp;
                <span>2024 Kaung Si Thu. All rights Reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
