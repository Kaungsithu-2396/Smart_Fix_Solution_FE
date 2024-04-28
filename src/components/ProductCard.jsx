import React from "react";

export default function ProductCart() {
    return (
        <>
            <div className="flex justify-center flex-col  py-2 cursor-pointer  rounded-md   items-center">
                <img
                    src="https://mdriveasia.com/cdn/shop/files/ROSA_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color_370x.jpg?v=1694843285"
                    alt=""
                    className=" w-[250px] hover:scale-105 duration-200 delay-300  transistion-all"
                />
                <div className="text-center">
                    <p className="">IPhone 14 pro max</p>
                    <p className=" text-orange-400 font-semibold text-2xl md:text-3xl">
                        49000
                    </p>
                    <span>MMK</span>
                </div>
            </div>
        </>
    );
}
