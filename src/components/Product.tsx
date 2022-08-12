import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const btnBgClassName: string = details
    ? "bg-yellow-400 hover:bg-yellow-500"
    : "bg-blue-400 hover:bg-blue-500";
  const btnClasses: string[] = ["py-2 px-4 rounded transition", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center w-1/5">
      <img src={product.image} className="w-24" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">Price: {product.price}$</span>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show Details"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          {product?.rating?.rate && (
            <p>
              Rate:
              <span style={{ fontWeight: 700 }}>{product?.rating?.rate}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
