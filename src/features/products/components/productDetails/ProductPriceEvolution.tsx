import React from "react";
import PriceEvolutionChart from "./PriceEvolutionChart";
import PriceEvolutionList from "./PriceEvolutionList";
import { ChartLine, Menu } from "lucide-react";
import clsx from "clsx";

function ProductPriceEvolution() {
  const [activeTab, setActiveTab] = React.useState<"chart" | "list">("chart");

  // 1 ürün için her günün fiyat evrimini saklayan örnek veri yapısı
  const productPriceData = [
    {
      date: "2023-01-01",
      price: 100,
      seller: "Seller Aasfasf",
    },
    {
      date: "2023-01-02",
      price: 120,
      seller: "Seller Aasdas",
    },
    {
      date: "2023-01-03",
      price: 120,
      seller: "Seller cds",
    },
    {
      date: "2023-01-04",
      price: 125,
      seller: "Seller asdadsA",
    },
    {
      date: "2023-01-05",
      price: 115,
      seller: "Seller Aasdad",
    },
    {
      date: "2023-01-06",
      price: 130,
      seller: "Seller Aasdasd",
    },
    {
      date: "2023-01-07",
      price: 140,
      seller: "Seller Aasdas",
    },
    {
      date: "2023-01-08",
      price: 150,
      seller: "Seller Asdasd",
    },
    {
      date: "2023-01-09",
      price: 160,
      seller: "Seller Aasdas",
    },
    {
      date: "2023-01-10",
      price: 170,
      seller: "Seller Aasdasd",
    },
    {
      date: "2023-01-11",
      price: 180,
      seller: "Seller Aasdas",
    },
    {
      date: "2023-01-12",
      price: 190,
      seller: "Seller Aasdasd",
    },
    {
      date: "2023-01-13",
      price: 200,
      seller: "Seller Aasdasd",
    },
  ];

  return (
    <div id="price-evolution" className="px-3 container mx-auto text-sm md:text-md">
      <h2 className="text-2xl md:text-4xl mb-4 text-[#0b051d]">Price Evolution</h2>
      <p className="my-4 text-[16px] text-[#0b051d]">
        Track the price changes of this product over time from different sellers.
        <br /> Use this information to make informed purchasing decisions and find the best deals.
      </p>
      {/* Tab buttons */}
      <div className="flex items-center justify-between mb-4 ">
        <div className="px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-black transition duration-500">
          Select seller
        </div>
        <div>
          <button
            className={`mr-2 px-4 py-2 rounded-full border transition duration-500 ${
              activeTab === "chart"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
            onClick={() => setActiveTab("chart")}
          >
            <ChartLine />
          </button>
          <button
            className={`px-4 py-2 rounded-full border transition duration-500 ${
              activeTab === "list"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
            onClick={() => setActiveTab("list")}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Conditional rendering based on activeTab */}
      <div>
        {activeTab === "chart" && <PriceEvolutionChart data={productPriceData} />}
        {activeTab === "list" && <PriceEvolutionList data={productPriceData} />}
      </div>

      {/* Explanation Section */}

      <div className="mt-2 p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white text-neutral-500">
        <div className=" flex flex-col items-center justify-center p-4text-center">
          <h3 className="text-sm mb-2 text-neutral-800">Lowest Price 3 months</h3>
          <div className="text-3xl font-bold text-black">
            {productPriceData.reduce((min, p) => (p.price < min ? p.price : min), productPriceData[0].price)} TL
          </div>
          <p className="text-xs text-[#615f6d]">
            {productPriceData[0].seller} - {productPriceData[0].date}{" "}
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-sm mb-2 text-neutral-800">Lowest price now</h3>
          <div className="text-3xl font-bold text-black">{productPriceData[productPriceData.length - 1].price} TL</div>
          <p className="text-xs text-[#615f6d]">{productPriceData[productPriceData.length - 1].seller}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-sm m-2 text-neutral-800">Price Change</h3>
          <div
            className={clsx(
              "text-3xl font-bold",
              productPriceData[productPriceData.length - 1].price - productPriceData[0].price > 0
                ? "text-[#b62454]"
                : productPriceData[productPriceData.length - 1].price - productPriceData[0].price < 0
                ? "text-green-600"
                : "text-gray-600"
            )}
          >
            {productPriceData[productPriceData.length - 1].price - productPriceData[0].price > 0 ? "+" : ""}
            {productPriceData[productPriceData.length - 1].price - productPriceData[0].price} TL
          </div>
          <p className="text-xs text-[#615f6d]">Since {new Date(productPriceData[0].date).toLocaleDateString("tr-TR")}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPriceEvolution;
