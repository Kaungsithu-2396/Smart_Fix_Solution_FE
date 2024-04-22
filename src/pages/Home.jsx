import React from "react";
import Nav from "../components/Nav";
export default function Home() {
    return (
        <section className="">
            <Nav />
            <div className="  h-[70vh]">
                <div className=" h-full relative">
                    <div className="first-bg h-full bg-top   bg-no-repeat bg-cover"></div>
                    <div className=" w-full h-full top-0 absolute bg-black/50"></div>
                    <div className="absolute top-[30%] lg:top-[30%] md:left-[17%] lg:left-[25%] ">
                        <div className="text-white   text-center">
                            <p className="xl:text-4xl text-xl font-semibold tracking-wide lg:px-0 px-5">
                                Looking for the{" "}
                                <span className="text-orange-500">
                                    sales & service
                                </span>{" "}
                                in one stop place? <br />
                                <p className="xl:pt-5 py-2">
                                    {" "}
                                    Let's Meet our Specialist {"  "}
                                    <p className="text-orange-500 xl:pt-6 pt-2">
                                        Technicians
                                    </p>{" "}
                                </p>
                            </p>
                            <button className="text-white border  border-white m-4 lg:my-10 px-10 rounded-lg py-2 hover:bg-orange-500 duration-150 delay-200 transition-all hover:scale-110 hover:text-black">
                                Products
                            </button>
                            <button className="text-white border  border-white lg:my-10 px-10 rounded-lg py-2 hover:bg-orange-500 duration-150 delay-200 transition-all hover:scale-110 hover:text-black">
                                Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
