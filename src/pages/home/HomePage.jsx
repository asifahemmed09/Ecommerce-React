import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import './HomePage.css';
import ProductGrid from './ProductGrid';


function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    axios
      .get('/api/products')
      .then((response) => setProducts(response.data));
    
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid  products={products} />
      </div>
    </>
  );
}

export default HomePage;
