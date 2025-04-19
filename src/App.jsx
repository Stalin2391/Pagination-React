
import { useEffect, useState } from 'react';
import './App.css'

const URL = "https://dummyjson.com/products?limit=500";

const ProductsCard = ({thumbnail, title}) => {
  console.log(title)
  return(
    <div className='product-card'>
        <Image src={thumbnail} alt={title} className="product-img" />
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
        {
          products.map((product) => <ProductsCard  thumbnail={thumbnail} title={title} />)
        }
      </div>
    </div>
  )
}

export default App
