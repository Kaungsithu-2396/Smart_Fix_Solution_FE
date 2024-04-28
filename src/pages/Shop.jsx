import BreadCrumbRoute from "@/components/BreadCrumbRoute";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { useLocation } from "react-router-dom";
function Shop() {
    const location = useLocation();
    return (
        <section className="my-5">
            <div className="mx-4">
                <BreadCrumbRoute data={["Home", "Shop"]} />
                <hr />
            </div>
            <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default Shop;
