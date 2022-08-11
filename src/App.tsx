import React from "react";
import Product from "./components/Product";
import { products } from "./data/products";

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1>Hello React!</h1>
      <Product product={products[0]} />
      <Product product={products[1]} />
    </div>
  );
}

export default App;
