import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import './HomePage.css';
import ProductGrid from './ProductGrid';

function HomePage({ cart, loadCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fecthProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCartItems={loadCartItems} />
      </div>
    </>
  );
}

export default HomePage;
