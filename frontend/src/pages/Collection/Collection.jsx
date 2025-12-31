import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Title } from "../../components/Title/Title";
import { ProductItemCard } from "../../components/ProductItemCard/ProductItemCard";
import { frontendAssets } from "../../const/frontendImagesAssets";

const Collection = () => {
  const { products, search, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("Relevant");
  const [visibleCount, setVisibleCount] = useState(20);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (
      scrollTop + windowHeight >= fullHeight - 100 &&
      !loadingMore &&
      visibleCount < filterProducts.length
    ) {
      setLoadingMore(true);

      setTimeout(() => {
        setVisibleCount((prev) => {
          const next = prev + 20;
          return next <= filterProducts.length ? next : filterProducts.length;
        });
        setLoadingMore(false);
      }, 500);
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (setSearch && search) {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    switch (sortType.toLowerCase()) {
      case "low - high":
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case "high - low":
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filterProducts, visibleCount, loadingMore]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType, products, search, setSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60 sticky top-[82px] h-fit">
        <p className="uppercase my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`h-3 sm:hidden transition-all duration-150 ease-linear ${
              showFilter ? "rotate-90" : ""
            }`}
            src={frontendAssets.dropdown_icon}
            alt="Dropdown Icon"
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                id="men"
                type="checkbox"
                className="w-3"
                value={`Men`}
                onChange={toggleCategory}
              />
              <label className="select-none cursor-pointer" htmlFor="men">
                Men
              </label>
            </p>
            <p className="flex gap-2">
              <input
                id="women"
                type="checkbox"
                className="w-3"
                value={`Women`}
                onChange={toggleCategory}
              />
              <label className="select-none cursor-pointer" htmlFor="women">
                Women
              </label>
            </p>
            <p className="flex gap-2">
              <input
                id="kids"
                type="checkbox"
                className="w-3"
                value={`Kids`}
                onChange={toggleCategory}
              />
              <label className="select-none cursor-pointer" htmlFor="kids">
                Kids
              </label>
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                id="topwear"
                type="checkbox"
                className="w-3"
                value={`Topwear`}
                onChange={toggleSubCategory}
              />
              <label className="select-none cursor-pointer" htmlFor="topwear">
                Topwear
              </label>
            </p>
            <p className="flex gap-2">
              <input
                id="bottomwear"
                type="checkbox"
                className="w-3"
                value={`Bottomwear`}
                onChange={toggleSubCategory}
              />
              <label
                className="select-none cursor-pointer"
                htmlFor="bottomwear"
              >
                Bottomwear
              </label>
            </p>
            <p className="flex gap-2">
              <input
                id="winterwear"
                type="checkbox"
                className="w-3"
                value={`Winterwear`}
                onChange={toggleSubCategory}
              />
              <label
                className="select-none cursor-pointer"
                htmlFor="winterwear"
              >
                Winterwear
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title title1={`All`} title2={`Collections`} />
          {/* Product Sort */}

          <select
            onChange={(e) => setSortType(e.target.value.toLowerCase())}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low - high">Sort by: Low to High</option>
            <option value="high - low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.slice(0, visibleCount).map((product, index) => (
            <ProductItemCard
              key={index}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}

          {loadingMore && visibleCount < filterProducts.length && (
            <div className="col-span-full text-center mt-4">
              <svg
                className="animate-spin h-5 w-5 text-gray-600 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                />
              </svg>
              <p className="text-sm text-gray-500 mt-1">Loading more...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
