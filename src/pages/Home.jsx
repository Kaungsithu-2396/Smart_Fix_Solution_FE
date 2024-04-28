import "@splidejs/react-splide/css";
import Nav from "../components/Nav";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CategoryCard from "@/components/CategoryCard";
import ProductCart from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import PaymentBanner from "@/components/PaymentBanner";
import BreadCrumbRoute from "@/components/BreadCrumbRoute";
import { useLocation } from "react-router-dom";
export default function Home() {
    const location = useLocation();
    return (
        <section className="">
            <BreadCrumbRoute data={["Home"]} />
            <Splide
                aria-label="My Favorite Images"
                className=""
                options={{
                    autoplay: true,
                    interval: 3000,
                    type: "loop",
                    pauseOnFocus: true,
                    arrows: false,
                }}
            >
                <SplideSlide>
                    <div className=" h-[70vh] relative">
                        <div className="first-bg h-full bg-top   bg-no-repeat bg-cover"></div>
                        <div className=" w-full h-full top-0 absolute bg-black/50"></div>
                        <div className="absolute top-[30%] md:top-[50%] lg:top-[30%] md:left-[2%] left-[10%] sm:left-0  lg:left-[10%] ">
                            <div className="text-white text-center md:text-start ">
                                <div className="lg:text-4xl text-xl font-semibold tracking-wide lg:px-0 px-5">
                                    Looking for{"   "}
                                    <span className="text-orange-500">
                                        sales & service
                                    </span>{" "}
                                    in one stop place? <br />
                                    <div className="xl:pt-5 py-2">
                                        {" "}
                                        Let's Meet our Specialist {"  "}
                                        <div className="text-orange-500 xl:pt-6 pt-2">
                                            Technicians
                                        </div>{" "}
                                    </div>
                                </div>

                                <button className="text-white border  border-white m-3 lg:my-10 px-10 rounded-lg py-2 hover:bg-orange-500 duration-150 delay-200 transition-all hover:scale-110 hover:text-black">
                                    Service
                                </button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" h-[70vh] relative">
                        <div className="second-bg h-full bg-top   bg-no-repeat bg-cover"></div>
                        <div className=" w-full h-full top-0 absolute bg-black/70"></div>
                        <div className="absolute top-[30%] md:top-[50%] lg:top-[30%] md:left-[2%] left-[10%] sm:left-0  lg:left-[10%] ">
                            <div className="text-white text-center md:text-start">
                                <div className="lg:text-4xl text-xl font-semibold tracking-wide lg:px-0 px-5">
                                    <span className="text-orange-500">
                                        Gadget House
                                    </span>{" "}
                                    in your hand <br />
                                    <div className="xl:pt-5 py-2">
                                        {" "}
                                        Explore our lastest Model {"  "}
                                        <div className="text-orange-500 xl:pt-6 pt-2">
                                            Gadgets
                                        </div>{" "}
                                    </div>
                                </div>
                                <button className="text-white border  border-white m-4 lg:my-10 px-10 rounded-lg py-2 hover:bg-orange-500 duration-150 delay-200 transition-all hover:scale-110 hover:text-black">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
            {/* Category */}
            <div className=" h-fit pt-7 mx-2  ">
                {/* <h1 className=" text-xl font-semibold p-4 mb-4 lg:text-3xl">
                    Categories
                </h1> */}
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
                    <CategoryCard
                        img={
                            "https://mdriveasia.com/cdn/shop/files/iPad_Cellular_Family_Lineup_434x.png?v=1695377879"
                        }
                        name={"Tablet"}
                    />
                    <CategoryCard
                        img={
                            "https://mdriveasia.com/cdn/shop/files/iPhone_15_Pro_iPhone_15_Family_a0a1a335-e077-4f30-89f4-b3182a4c6ec7_434x.png?v=1695380043"
                        }
                        name={"Phone"}
                    />
                    <CategoryCard
                        img={
                            "https://mdriveasia.com/cdn/shop/files/Apple_Watch_Series_9_45mm_GPS_Apple_Watch_Ultra_2_49mm_Cellular_Apple_Watch_SE_44mm_GPS_3-up_Family_434x.png?v=1695373829"
                        }
                        name={"Watch"}
                    />
                    <CategoryCard
                        img={
                            "https://mdriveasia.com/cdn/shop/files/MacBook_Pro_14-in_M3_Pro_Silver_Pure_Front_MacBook_Pro_16-in_M3_Pro_Space_Black_Pure_Front_2-up_Screen__USEN_434x.png?v=1699434632"
                        }
                        name={"Laptop"}
                    />
                    <div className=" col-span-2 lg:col-span-1">
                        <CategoryCard
                            img={
                                "https://mdriveasia.com/cdn/shop/files/AirPods_434x.png?v=1660834539"
                            }
                            name={"Airpods"}
                        />
                    </div>
                </div>
            </div>
            {/* Category */}
            {/* Product Section */}
            <div className="h-fit p-7">
                <h1 className=" text-xl font-semibold  lg:text-3xl">
                    Trending Products
                </h1>
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-5 ">
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                </div>
                <div className="text-center mt-5">
                    <Button className="  text-xl  border border-black  px-10">
                        View All
                    </Button>
                </div>
            </div>
            {/* Product Section */}
            <div className=" h-fit  ">
                <PaymentBanner />
            </div>
        </section>
    );
}
