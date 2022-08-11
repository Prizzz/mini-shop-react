import Product from "./components/Product";
import { useProducts } from "./components/hooks/products";

function App() {
  const { loading, products, error } = useProducts();
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
