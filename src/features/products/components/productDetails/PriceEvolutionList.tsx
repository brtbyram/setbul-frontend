import clsx from "clsx";
import React, { useState } from "react";

interface PriceEvolutionProps {
  data: Array<{
    date: string;
    price: number;
    seller: string;
  }>
}

function PriceEvolutionList({ data}: PriceEvolutionProps) {

  const [ limit, setLimit ] = useState(10);
  const limitedData = data.slice(0, limit);

  const handleClick = () => {
    setLimit((prevLimit) => prevLimit + 10);

  };



  return (
    <div className="">
      <div className="grid grid-cols-4 text-xs md:text-sm py-4  md:px-4 mb-2  border-b border-neutral-300 ">
        <div>DATE</div>
        <div>SELLER</div>
        <div>LOWEST PRICE</div>
        <div>PRICE CHANGE</div>
      </div>
      <ul className="space-y-2">
        {limitedData.map((entry, index) => (
          <li
            key={index}
            className="grid grid-cols-4 py-4 md:px-4 text-sm border-b border-neutral-300 "
          >
            <div>{new Date(entry.date).toLocaleDateString("tr-TR")}</div>
            <div>{entry.seller}</div>
            <div>{entry.price} TL</div>
            <div>
              {index > 0 ? (
                <>
                  {entry.price < data[index - 1].price ? (
                    <span className="text-green-600">- {data[index - 1].price - entry.price} TL</span>
                  ) : entry.price > data[index - 1].price ? (
                    <span className="text-[#b62454]">+{entry.price - data[index - 1].price} TL</span>
                  ) : (
                    <span className="text-gray-600">-</span>
                  )}
                </>
              ) : (
                <span className="text-gray-600">N/A</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className={clsx(
          " px-4 py-3 bg-neutral-200 w-96 text-black border border-t-0 border-neutral-300 rounded-b-xl flex items-center justify-center mx-auto",
          limit >= data.length && "hidden"
        )}
        disabled={limit >= data.length }
      > 
        Load More
      </button>
    </div>
  );
}

export default PriceEvolutionList;
