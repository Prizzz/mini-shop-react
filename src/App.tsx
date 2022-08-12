import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, products, error } = useProducts();
  return (
    <div className="container mx-auto max-w-7xl flex flex-wrap justify-center gap-3 pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      <Modal title="Create new product">
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
