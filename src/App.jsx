import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://dummyjson.com/products?limit=500";

const ProductsCard = ({ product }) => {
  const { title, thumbnail } = product;
  console.log(product, "test");
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  );
};

const PAGE_SIZE = 10;

function App() {
  // utl = "https://dummyjson.com/products?limit=150"
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

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goToNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return !products.length ? (
    <h3>Loading....</h3>
  ) : (
    <div className="pagination">
      <h3>Pagination</h3>
      <div className="page-container">
        <button disabled={currentPage === 0} onClick={() => goToPrev()}>
          prev
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            onClick={() => handlePageChange(n)}
            className={`page-number ${n === currentPage ? "active" : ""}`}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => goToNext()}
        >
          next
        </button>
      </div>
      <div className="product-container">
        {products.slice(start, end).map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
