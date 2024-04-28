import Lottie from "lottie-react";
import React from "react";
import SuccessAnimation from "../photos/success.json";
function Success() {
    return (
        <div className=" bg-slate-300/20 h-[75vh]">
            <div className="w-[30%] m-auto py-5">
                <Lottie animationData={SuccessAnimation} loop={false} />
            </div>
        </div>
    );
}

export default Success;
