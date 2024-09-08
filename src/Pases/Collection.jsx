import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProducItem from "../components/ProducItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [fillterProducts, setFillterProducts] = useState([]);
  const [categoty, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // { toggle function}

  const toggleCategory = (e) => {
    if (categoty.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // another function

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (categoty.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categoty.includes(item.categoty)
      );
    }
    setFillterProducts(productsCopy);
  };

  useEffect(() => {
    setFillterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [categoty, subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-1">
      {/* Fillter option */}
      <div onClick={() => setShowFilter(!showFilter)} className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILLTER
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category fillter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6  ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"MEN"}
                onChange={toggleCategory}
                // onChange={toggleSubCategory}
              />{" "}
              MEN
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              kids
            </p>
          </div>
        </div>

        {/* SubCategary */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                // onChange={toggleSubCategory}
              />
              Topwear{" "}
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                // onChange={toggleSubCategory}
              />
              Bottomwea{" "}
            </p>

            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                // onChange={toggleSubCategory}
              />
              Winder
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2px  mb-4">
          <Title text1={"ALL"} text2={"COLLECTION____"} />
          {/* Product Sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevent">Sort by: Relavent</option>
            <option value="low-high ">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* map Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {fillterProducts.map((item, index) => (
            <ProducItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
