
import { useEffect, useState } from 'react';
import './App.css'

const URL = "https://dummyjson.com/products?limit=500";

const ProductsCard = ({product} ) => {
  const { title, thumbnail } = product;
  console.log(product, "test")
  return(
    <div className='product-card'>
        <img src={thumbnail} alt={title} className="product-img" />
        <span>{title}</span>
    </div>
  )
}

function App() {
  
  // utl = "https://dummyjson.com/products?limit=150"
  const [products, setProducts] = useState([]);

  const fetchApi = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    setProducts(json.products);
  }

  useEffect(() => {
    fetchApi();
  }, [])


  // console.log(products);

  return !products.length ? <h3>Loading....</h3> : (
    <div className='pagination'>
      <h3>Pagination</h3>
      <div className='product-container'>
        {/* {products?.product?.map((product) => <ProductsCard  product={product} />)} */}
        {products.map((product) => <ProductsCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default App
