import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router";

export const ProductItemCard = ({ id, image, name, price, onClick }) => {
  const { currency } = useContext(ShopContext);

  const content = (
    <div className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden relative before:content-[''] before:block before:pt-[345px]">
        <img
          className="hover:scale-110 transition ease-in-out absolute top-0 left-0 w-full h-full"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="text-left pt-3 pb-1 text-sm">{name}</p>
      <p className="text-left font-medium text-sm">
        {currency} {price}
      </p>
    </div>
  );

  return onClick ? (
    <div onClick={onClick}>
      <Link to={`/product/${id}`}>{content}</Link>
    </div>
  ) : (
    <Link to={`/product/${id}`}>{content}</Link>
  );
};
