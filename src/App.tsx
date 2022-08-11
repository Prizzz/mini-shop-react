import axios, { Axios, AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import { IProduct } from "./models";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=8"
      );
      setProducts(res.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-7xl flex flex-wrap justify-center gap-3 pt-5">
      {loading && <p className="text-center font-bold font-xl">loading...</p>}
      {error && <p className="text-center font-bold font-xl">{error}</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
