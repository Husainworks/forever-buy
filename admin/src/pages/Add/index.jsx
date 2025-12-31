import React, { useState } from "react";
import { adminAssets } from "../../const/adminImagesAssets";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";
import { Spinner } from "../../components/Spinner";

export const Add = () => {
  const [loading, setLoading] = useState(false);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image1 && !image2 && !image3 && !image4) {
      toast.warn("Please upload at least one product image.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const token = localStorage.getItem("admin-token");

      const response = await axios.post(
        backendUrl + "/api/product/add-product",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setBestSeller(false);
        setSizes([]);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
        console.log(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-full items-start gap-3"
      >
        {/* Images */}
        <div>
          <p className="mb-2">Upload Image</p>

          <div className="flex gap-2">
            <label htmlFor="image1">
              <img
                src={
                  image1 ? URL.createObjectURL(image1) : adminAssets.upload_area
                }
                alt="Click Here to upload"
                className="w-20"
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                id="image1"
                hidden
              />
            </label>
            <label htmlFor="image2">
              <img
                src={
                  image2 ? URL.createObjectURL(image2) : adminAssets.upload_area
                }
                alt="Click Here to upload"
                className="w-20"
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                id="image2"
                hidden
              />
            </label>
            <label htmlFor="image3">
              <img
                src={
                  image3 ? URL.createObjectURL(image3) : adminAssets.upload_area
                }
                alt="Click Here to upload"
                className="w-20"
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                id="image3"
                hidden
              />
            </label>
            <label htmlFor="image4">
              <img
                src={
                  image4 ? URL.createObjectURL(image4) : adminAssets.upload_area
                }
                alt="Click Here to upload"
                className="w-20"
              />
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                type="file"
                id="image4"
                hidden
              />
            </label>
          </div>
        </div>

        {/* Basic Product Information */}
        <div className="w-full">
          <p className="mb-2">Product Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type here"
            required
            className="w-full max-w-[500px] px-3 py-2"
          />
        </div>

        <div className="w-full">
          <p className="mb-2">Product Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Write content here"
            required
            className="w-full max-w-[500px] px-3 py-2"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
          {/* Product Category  */}
          <div>
            <p className="mb-2">Product Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Product Sub Category  */}
          <div>
            <p className="mb-2">Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full px-3 py-2"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/* Product Price  */}
          <div>
            <p className="mb-2">Product Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="25"
              className="w-full px-3 py-2 sm:w-[120px] max-h-10"
              required
            />
          </div>
        </div>

        {/* Product Sizes */}
        <div className="select-none">
          <p className="mb-2">Product Sizes</p>
          <div className="flex gap-3">
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"]
                )
              }
            >
              <p
                className={`${
                  sizes.includes("S") ? "bg-pink-300" : "bg-slate-200"
                }  px-3 py-1 cursor-pointer`}
              >
                S
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"]
                )
              }
            >
              <p
                className={`${
                  sizes.includes("M") ? "bg-pink-300" : "bg-slate-200"
                }  px-3 py-1 cursor-pointer`}
              >
                M
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"]
                )
              }
            >
              <p
                className={`${
                  sizes.includes("L") ? "bg-pink-300" : "bg-slate-200"
                }  px-3 py-1 cursor-pointer`}
              >
                L
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"]
                )
              }
            >
              <p
                className={`${
                  sizes.includes("XL") ? "bg-pink-300" : "bg-slate-200"
                }  px-3 py-1 cursor-pointer`}
              >
                XL
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"]
                )
              }
            >
              <p
                className={`${
                  sizes.includes("XXL") ? "bg-pink-300" : "bg-slate-200"
                }  px-3 py-1 cursor-pointer`}
              >
                XXL
              </p>
            </div>
          </div>
        </div>

        {/* Add to BestSeller */}
        <div className="flex gap-2 mt-2">
          <input
            onChange={() => {
              setBestSeller((prev) => !prev);
            }}
            checked={bestSeller}
            type="checkbox"
            id="bestseller"
          />
          <label className="cursor-pointer" htmlFor="bestseller">
            Add to bestseller
          </label>
        </div>

        {/* Submit */}
        <button
          className="w-28 py-3 mt-4 bg-black text-white uppercase"
          type="submit"
        >
          add
        </button>
      </form>
    </>
  );
};
