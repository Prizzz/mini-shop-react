import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import { IProduct } from "./models";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function fetchProducts() {
    const res = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=8"
    );
    setProducts(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-7xl flex flex-wrap justify-center gap-3 pt-5">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
