import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './pages/home/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrderPage from './pages/order/OrderPage';
import TrackingPage from './pages/tracking/TrackingPage';

function App() {
  const [cart, setCart] = useState([]);
  const loadCartItems = async () => {
    try {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
  useEffect(() => {
    const fetchCartItems = async () => {
      await loadCartItems();
    };
    fetchCartItems();
  }, []);
 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} loadCartItems={loadCartItems} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCartItems={loadCartItems} />} />
        <Route path="orders" element={<OrderPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
