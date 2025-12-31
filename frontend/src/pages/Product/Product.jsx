import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router";
import { frontendAssets } from "../../const/frontendImagesAssets";
import { Title } from "../../components/Title/Title";
import { ProductItemCard } from "../../components/ProductItemCard/ProductItemCard";

const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [related, setRelated] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    if (products.length > 0 && productData) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter(
        (item) => productData.category === item.category
      );
      productsCopy = productsCopy.filter(
        (item) => productData.subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, productData]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Details section */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                src={item}
                key={index}
                alt={`image_${index}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img
              src={frontendAssets.star_icon}
              alt="Star Icon"
              className="w-3 5"
            />
            <img
              src={frontendAssets.star_icon}
              alt="Star Icon"
              className="w-3 5"
            />
            <img
              src={frontendAssets.star_icon}
              alt="Star Icon"
              className="w-3 5"
            />
            <img
              src={frontendAssets.star_icon}
              alt="Star Icon"
              className="w-3 5"
            />
            <img
              src={frontendAssets.star_dull_icon}
              alt="Dull Star Icon"
              className="w-3 5"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex  gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border-[1px] border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer uppercase"
          >
            add to cart
          </button>

          <hr className="mt-8 sm:w-4/5 " />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Reviews and Description Section */}
      <div className="mt-20">
        <div className="flex">
          <button
            onClick={() => setActiveTab("description")}
            className={`border-[1px] border-neutral-300 border-b-0 px-5 py-3 text-sm cursor-pointer ${
              activeTab === "description"
                ? "font-bold text-black"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`border-[1px] border-neutral-300 border-b-0 border-l-0 px-5 py-3 text-sm cursor-pointer ${
              activeTab === "reviews" ? "font-bold text-black" : "text-gray-500"
            }`}
          >
            Reviews (122)
          </button>
        </div>
        <div className="flex flex-col gap-4 border-[1px] border-neutral-300 px-12 py-[60px] text-sm text-gray-500">
          {activeTab === "description" ? (
            <>
              <p className="text-base">
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
                E-commerce websites have gained immense popularity due to their
                convenience, accessibility, and the global reach they offer.
              </p>
              <p className="mt-3 text-base">
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations (e.g., sizes, colors). Each product usually has its
                own dedicated page with relevant information. 
              </p>
            </>
          ) : (
            <div className="w-full">
              <p>Review Swiper goes here</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="my-24">
        <div className="text-center text-3xl py-2">
          <Title title1={`related`} title2={`products`} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-6">
            {related.map((relatedProduct, index) => (
              <ProductItemCard
                onClick={() =>
                  (window.location.href = `/product/${relatedProduct._id}`)
                }
                key={index}
                id={relatedProduct._id}
                image={relatedProduct.image}
                name={relatedProduct.name}
                price={relatedProduct.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-gray-600 text-center">No products found</p>
  );
};

export default Product;
