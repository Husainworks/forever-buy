import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { Title } from "../../../components/Title/Title";
import { ProductItemCard } from "../../../components/ProductItemCard/ProductItemCard";

export const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const bestSellerProducts = [];

  useEffect(() => {
    // My Method
    // products.forEach((product) => {
    //   if (product.bestseller === true) {
    //     bestSellerProducts.push(product);
    //     setBestSeller(bestSellerProducts.slice(0, 5));
    //   }
    // });

    // Video Method
    const bestSellerProducts = products.filter((item) => item.bestSeller);
    setBestSeller(bestSellerProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-4xl">
        <Title title1="best" title2="seller" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((product, index) => (
          <ProductItemCard
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
