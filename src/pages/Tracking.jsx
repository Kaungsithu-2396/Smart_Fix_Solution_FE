import React, { useEffect, useState, useRef } from "react";
import trackingAnimation from "../photos/tracking.json";
import { Button } from "../components/ui/button";
import Lottie from "lottie-react";
import BreadCrumbRoute from "../components/BreadCrumbRoute";
function Tracking() {
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <section className="h-screen  py-5">
            <div className="mx-4">
                <BreadCrumbRoute data={["Home", "Tracking"]} />
            </div>
            <h1 className="text-center font-bold text-3xl my-5">
                Track Device
            </h1>
            <div className="flex flex-col-reverse md:flex-row justify-center ">
                <div className="my-5 flex flex-col gap-5 w-full justify-center items-center">
                    <input
                        type="text"
                        className=" px-5 py-4 mx-3 lg:w-[50%] w-[90%]    rounded-md border-2 border-black "
                        name=""
                        id=""
                        ref={inputRef}
                        value={search}
                        onChange={onChangeHandler}
                        placeholder="Enter your id"
                    />{" "}
                    <Button className="mx-2">Search</Button>
                </div>
                {/* <div className="lg:w-[30%]">
                    <Lottie animationData={trackingAnimation} />
                </div> */}
            </div>
        </section>
    );
}

export default Tracking;
