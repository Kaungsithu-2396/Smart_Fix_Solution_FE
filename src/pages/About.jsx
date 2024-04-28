import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import BreadCrumbRoute from "@/components/BreadCrumbRoute";
import { useLocation } from "react-router-dom";
function About() {
    const [viewMore, setViewMore] = useState(false);
    const viewMoreHandler = () => {
        setViewMore(!viewMore);
    };
    const location = useLocation();
    return (
        <section className="  xl:h-screen  ">
            <div className="pb-8 mx-5">
                <BreadCrumbRoute data={["Home", "About"]} />
                <hr />
            </div>

            <div className="  w-2/3 m-auto grid grid-cols-1 2xl:grid-cols-2 justify-center gap-3 lg:gap-10">
                {" "}
                <div className="">
                    <h1 className=" font-bold text-3xl">About Us</h1>
                    <p className="my-4 sm:text-justify ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quam fuga esse error. Sed ipsam nesciunt
                        consequuntur nostrum perferendis eligendi rem, itaque,
                        alias blanditiis laborum explicabo sequi suscipit.
                        Consequuntur, inventore vitae?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Omnis molestias
                        necessitatibus molestiae, veritatis odio quidem
                        cupiditate. Doloremque, explicabo dolorem! Consectetur
                        et repellendus exercitationem fuga optio reiciendis
                        laudantium! Molestiae, perspiciatis unde.
                    </p>
                    <p
                        className={`${
                            viewMore ? "block" : "hidden"
                        } sm:text-justify`}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab impedit laboriosam error quasi, fugit autem?
                        Repudiandae quam dignissimos deserunt facilis blanditiis
                        numquam itaque nam nulla assumenda vel? Aliquid, non
                        earum.
                    </p>
                    <div className={` my-5`}>
                        <Button className="px-10" onClick={viewMoreHandler}>
                            {viewMore ? "See Less" : "View More"}
                        </Button>
                    </div>
                    <span className=" text-3xl cursor-pointer flex justify-start gap-4 items-center ">
                        <FaFacebook className=" text-blue-400 hover:scale-110 delay-200 duration-300" />
                        <FaInstagram className=" text-[#E1306C] hover:scale-110 delay-200 duration-300" />
                        <FaSquareXTwitter className="hover:scale-110 delay-200 duration-300" />
                    </span>
                    <span className="text-2xl my-5 block ">
                        <div
                            className="flex gap-5 justify-start
                     items-center pb-2"
                        >
                            <FiPhone />
                            <span className="md:text-xl sm:text-base text-sm tracking-wide font-semibold">
                                {" "}
                                + 09123456981
                            </span>
                        </div>
                        <div
                            className="flex gap-5 justify-start
                     items-center"
                        >
                            <CgMail />
                            <span className="md:text-xl sm:text-base text-sm tracking-wide font-semibold">
                                {" "}
                                Kaungsithu2396@gmail.com
                            </span>
                        </div>
                    </span>
                </div>
                <div className="">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1676357175001-dec2a4bf4241?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
                        alt=""
                        srcset=""
                        className=" 2xl:h-[80%] rounded-lg "
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
