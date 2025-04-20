import { useEffect, useState } from "react";
import "./App.css";
import ProductsCard from "./components/ProductsCard";
import Pagination from "./components/Pagination";
const URL = "https://dummyjson.com/products?limit=500";

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const fetchApi = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const totalPages = products.length;

  const noOfPages = Math.ceil(totalPages / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  //   const handlePageChange = (n) => {
  //     setCurrentPage(n);
  //   };

  //   const goToPrev = () => {
  //     setCurrentPage((prev) => prev - 1);
  //   };
  //   const goToNext = () => {
  //     setCurrentPage((prev) => prev + 1);
  //   };

  return !products.length ? (
    <h3>Loading....</h3>
  ) : (
    <div className="pagination">
      <h3>Pagination</h3>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        noOfPages={noOfPages}
      />
      <div className="product-container">
        {products.slice(start, end).map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
