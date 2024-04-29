import BreadCrumbRoute from "@/components/BreadCrumbRoute";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Shop() {
    const location = useLocation();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/products`)
            .then((resp) => setProduct(resp.data));
    }, []);

    return (
        <section className="my-5">
            <div className="mx-4">
                <BreadCrumbRoute data={["Home", "Shop"]} />
                <hr />
            </div>
            <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {product?.products?.length > 0 &&
                    product?.products.map((el) => {
                        return (
                            <div className="" key={el._id}>
                                <ProductCard
                                    to={el._id}
                                    src={el.image}
                                    price={el.price}
                                    model={el.name}
                                />
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}

export default Shop;
