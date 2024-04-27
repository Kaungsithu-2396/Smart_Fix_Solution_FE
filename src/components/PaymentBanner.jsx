import React from "react";
import PaymentOptions from "../photos/paymentOptions.jpg";
import Lottie from "lottie-react";
import PaymentBannerAnimation from "../photos/paymentAnimation.json";
export default function PaymentBanner() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className=" w-[70%] m-auto">
                <Lottie animationData={PaymentBannerAnimation} />
            </div>
            <div className="text-center md:text-start">
                <h1 className="lg:text-3xl text-xl">
                    Process your payment with
                </h1>
                <h2 className="lg:text-4xl text-xl text-orange-500">
                    Popular Mobile banking
                </h2>
                <div className="flex justify-center items-center md:block md:border-l-background">
                    <img
                        src={PaymentOptions}
                        className="my-3 text-center "
                        alt=""
                        srcset=""
                    />
                </div>
            </div>
        </div>
    );
}
